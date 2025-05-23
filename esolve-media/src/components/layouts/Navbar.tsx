"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-black/70 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-white text-xl font-bold">ESOLVE MEDIA</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="/"
              className={cn(
                "text-white hover-green transition-colors px-3 py-2 text-sm font-medium",
                isActive("/") && "custom-green" // Apply active class
              )}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={cn(
                "text-white hover-green transition-colors px-3 py-2 text-sm font-medium",
                isActive("/services") && "custom-green" // Apply active class
              )}
            >
              Services
            </Link>
            <Link
              href="/packages"
              className={cn(
                "text-white hover-green transition-colors px-3 py-2 text-sm font-medium",
                isActive("/packages") && "custom-green" // Apply active class
              )}
            >
              Packages
            </Link>
            <Link
              href="/contact"
              className={cn(
                "ml-4 inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white px-6 py-2 text-sm font-medium text-black shadow-sm transition-colors hover-bg-green",
                isActive("/contact") && "bg-green text-black" // Apply active class
              )}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-400 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className={cn(
                "text-white hover:text-blue-400 block px-3 py-2 text-base font-medium",
                isActive("/") && "text-blue-400" // Apply active class
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={cn(
                "text-white hover:text-blue-400 block px-3 py-2 text-base font-medium",
                isActive("/services") && "text-blue-400" // Apply active class
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/packages"
              className={cn(
                "text-white hover:text-blue-400 block px-3 py-2 text-base font-medium",
                isActive("/packages") && "text-blue-400" // Apply active class
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Packages
            </Link>
            <Link
              href="/contact"
              className={cn(
                "text-white hover:text-blue-400 block px-3 py-2 text-base font-medium",
                isActive("/contact") && "text-blue-400" // Apply active class
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
