"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface HeroProps {
  title?: string;
  subtitle?: string;
  image?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  height?: string;
}

export function Hero({
  title = "Saroj Sushma Hotel",
  subtitle = "Modern Comfort in the Heart of the Himalayas",
  image = "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2000",
  ctaText = "Book Your Stay",
  ctaLink = "/rooms",
  secondaryCtaText = "Our Services",
  secondaryCtaLink = "/restaurant",
  height = "h-[85vh]"
}: HeroProps) {
  return (
    <section className={`relative w-full ${height} overflow-hidden bg-slate-900`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src={image} 
          alt="Luxury Ambience" 
          fill 
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 bg-secondary text-primary-foreground text-[10px] font-bold uppercase tracking-widest mb-6">
              Welcome to Excellence
            </span>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-tight mb-6">
              Elite <br /> Hospitality.
            </h1>
            <p className="font-body text-lg md:text-xl text-white/80 max-w-xl mb-10 font-light leading-relaxed">
              {subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-primary-foreground px-8 py-7 rounded-none border-none font-bold uppercase tracking-widest"
                asChild
              >
                <a href={ctaLink}>{ctaText}</a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-7 rounded-none font-bold uppercase tracking-widest"
                asChild
              >
                <a href={secondaryCtaLink}>{secondaryCtaText}</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute bottom-0 right-12 md:right-24 h-32 w-px bg-white/30 hidden md:block" />
    </section>
  );
}
