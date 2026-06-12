"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md py-4" 
          : "bg-linear-to-b from-black/80 to-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className={cn(
              "w-12 h-12 flex items-center justify-center font-bold text-xl transition-colors duration-500 rounded-sm",
              scrolled ? "bg-primary text-white" : "bg-white text-primary"
            )}>
              SS
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "font-heading text-xl font-bold uppercase tracking-widest leading-none transition-colors duration-500",
                scrolled ? "text-primary" : "text-white"
              )}>
                Saroj Sushma
              </span>
              <span className={cn(
                "text-[10px] uppercase tracking-[0.2em] font-medium mt-1 transition-colors duration-500",
                scrolled ? "text-primary/70" : "text-white/80"
              )}>
                Hotel & Restaurant
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative text-xs font-bold uppercase tracking-widest transition-colors py-2",
                    scrolled 
                      ? (isActive ? "text-primary" : "text-gray-500 hover:text-primary")
                      : (isActive ? "text-white" : "text-white/70 hover:text-white")
                  )}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className={cn(
                        "absolute bottom-0 left-0 right-0 h-0.5",
                        scrolled ? "bg-primary" : "bg-white"
                      )}
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
            <Button 
              className={cn(
                "rounded-none px-8 py-6 h-auto font-bold text-xs uppercase tracking-widest ml-4 transition-all duration-500 hover:scale-105",
                scrolled 
                  ? "bg-primary hover:bg-primary/90 text-white" 
                  : "bg-white hover:bg-white/90 text-primary"
              )}
            >
              Quick Booking
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "lg:hidden p-2 transition-colors",
              scrolled ? "text-primary" : "text-white"
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-white z-60 md:hidden flex flex-col"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-[80vw] max-w-sm bg-white z-70 shadow-2xl lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-4 md:px-6 py-6 border-b border-gray-100">
                <span className="font-heading font-bold uppercase tracking-widest text-primary text-xl">
                  Menu
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 p-2 text-slate-900 z-70 hover:text-primary transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-xl font-heading font-bold uppercase tracking-widest border-b border-gray-100 pb-4 transition-colors",
                      pathname === item.href ? "text-primary" : "text-gray-600 hover:text-primary"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6 rounded-none font-bold uppercase tracking-widest text-lg">
                  Book A Room
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
