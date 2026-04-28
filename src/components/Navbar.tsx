"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "About", href: "/about" },
  { name: "Rooms", href: "/rooms" },
  { name: "Restaurant", href: "/restaurant" },
  { name: "Banquet", href: "/banquet" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-white border-slate-200 py-3 shadow-sm"
          : "bg-black/20 border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3">
             <div className="w-10 h-10 bg-primary flex items-center justify-center font-bold text-white text-xl">SS</div>
             <div className="flex flex-col">
                <span className={cn(
                "font-heading text-xl font-bold uppercase tracking-tighter leading-none transition-colors",
                scrolled ? "text-primary" : "text-white"
                )}>
                Saroj Sushma
                </span>
                <span className={cn(
                "text-[9px] uppercase tracking-widest font-medium mt-1",
                scrolled ? "text-secondary" : "text-white/60"
                )}>
                Hotel & Restaurant
                </span>
             </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-xs font-bold uppercase tracking-widest transition-colors",
                  pathname === item.href
                    ? scrolled ? "text-secondary" : "text-white font-black border-b-2 border-white pb-1"
                    : scrolled ? "text-primary/70 hover:text-primary" : "text-white/70 hover:text-white"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 font-bold text-xs uppercase tracking-widest">
              Quick Booking
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn("lg:hidden p-2", scrolled ? "text-primary" : "text-white")}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-bold uppercase tracking-widest border-b border-slate-50 pb-4",
                    pathname === item.href ? "text-secondary" : "text-slate-600"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="w-full bg-primary text-white py-6 rounded-none font-bold uppercase tracking-widest">
                Book A Room
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
