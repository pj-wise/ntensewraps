"use client";
import Link from "next/link";
import { HamburgerMenu, MenuBody } from "../hamburger-menu";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const linkClassName =
    "link hover:gradientNtense gradientClipText bg-foreground transition-colors";
  return (
    <>
      <nav className="hidden z-[999] lg:flex justify-between items-center bg-background left-0 right-0 absolute py-5 layoutPadding">
        <h2 className="font-bold text-5xl text-primary">NW</h2>

        <div className="flex justify-evenly gap-6 transition-colors">
          <Link href="#home" className={linkClassName}>
            Home
          </Link>
          <Link href="#about" className={linkClassName}>
            About
          </Link>
          <Link href="#services" className={linkClassName}>
            Services
          </Link>
          <Link href="#gallery" className={linkClassName}>
            Gallery
          </Link>
          <Link href="#contact" className={linkClassName}>
            Contact
          </Link>
        </div>

        <button className="hover:bg-primary/90 transition-colors bg-primary text-primary-foreground font-normal h-fit  py-1.5 px-4 rounded">
          Get a quote
        </button>
      </nav>

      <nav className="flex z-[999] lg:hidden justify-between items-center bg-background left-0 right-0 absolute py-6 layoutPadding">
        <h2 className="font-bold text-5xl">NW</h2>
        <div className="flex items-center gap-3">
          <button className="hover:bg-primary/90 transition-colors bg-primary text-primary-foreground font-normal h-fit  py-1.5 px-4 rounded">
            Get a quote
          </button>
          <HamburgerMenu onClick={() => setShowMenu((bool) => !bool)} />
        </div>
      </nav>
      <MenuBody showMenu={showMenu} />
    </>
  );
};
