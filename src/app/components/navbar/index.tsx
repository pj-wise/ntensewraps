"use client";
import Link from "next/link";
import { HamburgerMenu, MenuBody } from "../hamburger-menu";
import { useEffect, useState } from "react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const linkClassName =
    "link hover:gradientNtense gradientClipText bg-foreground transition-colors";

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    }
  }, [showMenu]);
  return (
    <>
      <nav className="hidden z-[100] lg:flex justify-between items-center bg-background left-0 right-0 absolute py-5 layoutPadding">
        <div className="w-full max-w-screen-format lg:flex justify-between items-center">
          <h2 className="font-bold text-5xl text-primary">NW</h2>

          <div className="flex justify-evenly gap-6 transition-colors">
            <Link href="/#hero" className={linkClassName}>
              Home
            </Link>
            <Link href="/#about" className={linkClassName}>
              About
            </Link>
            <DropdownMenu>
            <DropdownMenuTrigger className={`${linkClassName} flex items-center gap-1 outline-none z-[200]`}>
              Services
              <ChevronDown className="h-4 w-4 text-white" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-black border-yellow-400/20 min-w-[280px] z-[200]">
              <DropdownMenuItem asChild>
                <Link
                  href="/vinyl-wrap"
                  className="text-white hover:text-yellow-400 hover:bg-yellow-400/10 cursor-pointer"
                >
                  Vinyl Wrap
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/ppf"
                  className="text-white hover:text-yellow-400 hover:bg-yellow-400/10 cursor-pointer"
                  onClick={() => setShowMenu(false)}
                >
                  Paint Protection Film (PPF)
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/ceramic-coating"
                  className="text-white hover:text-yellow-400 hover:bg-yellow-400/10 cursor-pointer"
                >
                  Ceramic Coating
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/architectural-wraps"
                  className="text-white hover:text-yellow-400 hover:bg-yellow-400/10 cursor-pointer"
                >
                  Architectural & Appliance Wraps
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/commercial-wraps"
                  className="text-white hover:text-yellow-400 hover:bg-yellow-400/10 cursor-pointer"
                >
                  Commercial Wraps & Design
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/web-design"
                  className="text-white hover:text-yellow-400 hover:bg-yellow-400/10 cursor-pointer"
                >
                  Business Landing Page Design
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
            <Link href="/#gallery" className={linkClassName}>
              Gallery
            </Link>
            <Link href="/#contact" className={linkClassName}>
              Contact
            </Link>
          </div>

          <Link href="#contact" className="hover:bg-primary/90 transition-colors bg-primary text-primary-foreground font-normal h-fit  py-1.5 px-4 rounded">
            Get a quote
          </Link>
        </div>
      </nav>

      <nav className="flex z-[999] lg:hidden justify-between items-center bg-background left-0 right-0 absolute py-6 layoutPadding">
        <h2 className="font-bold text-5xl">NW</h2>
        <div className="flex items-center gap-3">
          <Link href="/#contact">
          <button className="hover:bg-primary/90 transition-colors bg-primary text-primary-foreground font-normal h-fit  py-1.5 px-4 rounded">
            Get a quote
          </button>
          </Link>
          <HamburgerMenu onClick={() => setShowMenu((bool) => !bool)} />
        </div>
      </nav>
      <MenuBody showMenu={showMenu} setShowMenu={setShowMenu} />
    </>
  );
};
