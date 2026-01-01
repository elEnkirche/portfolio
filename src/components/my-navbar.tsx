"use client";

import Link from "next/link";
import { Home, User, Briefcase, FileText, Heart, Phone } from "lucide-react";
import { NavBar } from "./ui/tubelight-navbar";

export function MyNavBar() {
  const navItems = [
  { name: "Home", url: "#", icon: Home },
  { name: "Projets", url: "#", icon: Briefcase },
  { name: "Passions", url: "#", icon: Heart },
  { name: "Contacts", url: "#", icon: Phone },
];

  return <NavBar items={navItems} />;
}
