"use client";

import Link from "next/link";
import { Home, User, Briefcase, FileText, Heart, Phone } from "lucide-react";
import { NavBar } from "./ui/tubelight-navbar";

export function MyNavBar() {
  const navItems = [
  { name: "Home", url: "/", icon: Home },
  { name: "Projets", url: "/projets", icon: Briefcase },
  { name: "Passions", url: "/passions", icon: Heart },
  { name: "Contacts", url: "/contacts", icon: Phone },
];

  return <NavBar items={navItems} />;
}
