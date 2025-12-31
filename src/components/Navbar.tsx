"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  name: string;
  href: string;
};

export default function Navbar(): React.ReactElement {
  const [open, setOpen] = useState(false); // mobile menu
  const [presentationOpen, setPresentationOpen] = useState(false); // desktop hover/focus
  const [presentationMobileOpen, setPresentationMobileOpen] = useState(false); // mobile submenu
  const [visible, setVisible] = useState(true); // navbar visible state (hide on scroll down)
  const pathname = usePathname();
  const presentationRef = useRef<HTMLDivElement | null>(null);

  const links: NavLink[] = [
    { name: "Projets", href: "/projets" },
    { name: "Passions", href: "/passions" },
    { name: "Contact", href: "/contact" },
  ];

  const presentationItems: NavLink[] = [
    { name: "Expérience professionnelle", href: "/#experience" },
    { name: "Formation", href: "/#formation" },
    { name: "Langues", href: "/#langues" },
    { name: "Compétences", href: "/#competences" },
];
    useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setPresentationMobileOpen(false);
        setPresentationOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    // Close mobile menu and presentation submenu on route change
    setOpen(false);
    setPresentationMobileOpen(false);
    setPresentationOpen(false);
  }, [pathname]);

  // Close presentation dropdown when clicking outside (desktop)
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (presentationRef.current && !presentationRef.current.contains(e.target as Node)) {
        setPresentationOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  // Use IntersectionObserver on sections (works better with scroll-snap). Fallback to scroll listener if IO unavailable.
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mainEl = document.querySelector("main");
    const root = mainEl ?? null; // if null, observer root is viewport

    const sections = Array.from(document.querySelectorAll("main section[id], section[id]")) as HTMLElement[];
    if (sections.length === 0) return;

    // DEBUG
    // eslint-disable-next-line no-console
    console.log("Navbar: sections observed:", sections.map((s) => s.id));

    let prevIndex = 0;
    const HIDE_TRANSITION_DELAY = 200; // CSS transition-delay when hiding (ms)
    const HIDE_JS_DELAY = 60; // small JS delay before triggering hide (ms)
    let hideTimeout: number | null = null; // single timeout used by IO and fallback
    const threshold = 0.6; // consider section active when 60% visible

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          const visibleEntries = entries.filter((e) => e.isIntersecting);
          if (visibleEntries.length === 0) return;
          visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          const entry = visibleEntries[0];
          const index = sections.indexOf(entry.target as HTMLElement);

          // eslint-disable-next-line no-console
          console.log("Navbar IO entry:", { id: (entry.target as HTMLElement).id, index, prevIndex, ratio: entry.intersectionRatio });

          if (index > prevIndex) {
            // scrolled to a later section -> hide (small delayed JS call; CSS adds additional delay for smoother hide)
            if (!open && !presentationMobileOpen && !presentationOpen) {
              if (hideTimeout) window.clearTimeout(hideTimeout);
              hideTimeout = window.setTimeout(() => setVisible(false), HIDE_JS_DELAY);
            }
          } else if (index < prevIndex) {
            if (hideTimeout) {
              window.clearTimeout(hideTimeout);
              hideTimeout = null;
            }
            setVisible(true);
          }
          prevIndex = index;
        },
        {
          root: root instanceof HTMLElement ? root : null,
          rootMargin: "0px",
          threshold,
        }
      );

      sections.forEach((s) => observer.observe(s));

      return () => {
        observer.disconnect();
        if (hideTimeout) {
          window.clearTimeout(hideTimeout);
          hideTimeout = null;
        }
      };
    }

    // Fallback: simple scroll listener on main or window (type-safe)
    const scrollingEl = document.scrollingElement as HTMLElement | null;
    const scrollContainerEl = scrollingEl ?? document.documentElement;

    let lastY = scrollContainerEl.scrollTop;
    let ticking = false;
    const buffer = 10;

    const getY = () => scrollContainerEl.scrollTop || (window as any).pageYOffset || 0;

    const onScroll = () => {
      const currentY = getY();
      // eslint-disable-next-line no-console
      console.log("Navbar fallback scroll:", { currentY, lastY });
      if (Math.abs(currentY - lastY) < buffer) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (open || presentationMobileOpen || presentationOpen) {
            if (hideTimeout) {
              window.clearTimeout(hideTimeout);
              hideTimeout = null;
            }
            setVisible(true);
          } else if (currentY > lastY && currentY > 100) {
            if (hideTimeout) window.clearTimeout(hideTimeout);
            hideTimeout = window.setTimeout(() => setVisible(false), HIDE_JS_DELAY);
          } else if (currentY < lastY) {
            if (hideTimeout) {
              window.clearTimeout(hideTimeout);
              hideTimeout = null;
            }
            setVisible(true);
          }
          lastY = currentY;
          ticking = false;
        });
        ticking = true;
      }
    };

    const targetEl = scrollContainerEl instanceof HTMLElement ? scrollContainerEl : document.documentElement;
    targetEl.addEventListener("scroll", onScroll, { passive: true } as AddEventListenerOptions);
    return () => {
      targetEl.removeEventListener("scroll", onScroll as EventListener);
      if (hideTimeout) {
        window.clearTimeout(hideTimeout);
        hideTimeout = null;
      }
    };
  }, [open, presentationMobileOpen, presentationOpen]);

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-white text-gray-800 shadow-sm z-50 transform transition-transform transition-opacity duration-700 ease-in-out ${
        (visible || open || presentationOpen) ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      }`}
      style={{ willChange: "transform, opacity" }}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-lg font-semibold text-gray-900 hover:text-blue-600">
              MonPortfolio
            </Link>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {/* Présentation (link + dropdown) */}
            <div
              ref={presentationRef}
              onMouseEnter={() => setPresentationOpen(true)}
              onMouseLeave={() => setPresentationOpen(false)}
              onFocusCapture={() => setPresentationOpen(true)}
              onBlurCapture={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) setPresentationOpen(false);
              }}
              className="relative"
            >
              <Link
                href="/"
                aria-haspopup="menu"
                aria-expanded={presentationOpen}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
                  isActive("/") ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Présentation
              </Link>

              {/* Dropdown */}
              <div
                className={`absolute left-0 mt-2 w-48 bg-white border rounded shadow-md focus:outline-none transition-opacity duration-150 ${
                  presentationOpen ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-1"
                }`}
                role="menu"
                aria-label="Présentation"
              >
                <div className="py-1">
                  {presentationItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 ${
                        isActive(item.href) ? "text-blue-600" : ""
                      }`}
                      onClick={() => setPresentationOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Other links */}
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
                  isActive(link.href) ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-controls="mobile-menu"
              aria-expanded={open}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {!open ? (
                // Hamburger
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                // Close
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${open ? "block" : "hidden"} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
          {/* Présentation with collapsible submenu */}
          <div className="border-b border-gray-50">
            <div className="flex items-center justify-between px-3 py-2">
              <Link
                href="/"
                className={`text-base font-medium ${isActive("/") ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`}
                onClick={() => setOpen(false)}
              >
                Présentation
              </Link>
              <button
                onClick={() => setPresentationMobileOpen((s) => !s)}
                aria-expanded={presentationMobileOpen}
                aria-controls="presentation-submenu"
                className="p-1 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <span className="sr-only">Toggle Présentation submenu</span>
                <svg
                  className={`h-5 w-5 transform transition-transform ${presentationMobileOpen ? "rotate-180" : "rotate-0"}`}
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M6 8l4 4 4-4" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div id="presentation-submenu" className={`${presentationMobileOpen ? "block" : "hidden"} px-3 pb-3`}> 
              {presentationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setOpen(false);
                    setPresentationMobileOpen(false);
                  }}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-150 ${
                    isActive(item.href) ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Other links */}
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-150 ${
                isActive(link.href) ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
