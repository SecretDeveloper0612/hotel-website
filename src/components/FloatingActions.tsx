"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingActions() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScroll(window.scrollY > 500);
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-8 right-8 z-100 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/917302951299"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-colors"
        title="WhatsApp Us"
      >
        <MessageCircle className="w-8 h-8 fill-white/20" />
      </motion.a>

      {/* Call Button (Mobile Only visible via CSS or logic, but usually helpful for all) */}
      <motion.a
        href="tel:+917302951299"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-primary/90 transition-colors"
        title="Call Us"
      >
        <Phone className="w-7 h-7 fill-white/20" />
      </motion.a>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="w-14 h-14 bg-slate-800 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-slate-700 transition-colors"
            title="Scroll to Top"
          >
            <ChevronUp className="w-8 h-8" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
