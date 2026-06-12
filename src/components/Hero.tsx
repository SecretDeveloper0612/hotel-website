"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface HeroProps {
  title?: string;
  subtitle?: string;
  image?: string | StaticImageData;
  images?: (string | StaticImageData)[];
  height?: string;
  ctaText?: string;
  ctaLink?: string;
}

const defaultImages = [
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=2000",
];

export function Hero({
  title = "Saroj Sushma",
  subtitle = "Experience the perfect blend of modern luxury and serene elegance.",
  image,
  images,
  height = "h-[100vh]",
  ctaText = "Explore Rooms",
  ctaLink = "/rooms"
}: HeroProps) {
  // Use images array if provided, otherwise use single image, otherwise default array
  const displayImages = images?.length ? images : (image ? [image] : defaultImages);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (displayImages.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayImages.length);
    }, 6000); // Change image every 6 seconds
    
    return () => clearInterval(interval);
  }, [displayImages.length]);

  return (
    <section className={`relative w-full ${height} overflow-hidden bg-slate-900`}>
      {/* Background Image Slideshow with Ken Burns Effect */}
      <AnimatePresence>
        <motion.div 
          key={currentIndex}
          className="absolute inset-0 will-change-transform z-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ 
            opacity: { duration: 0.8, ease: "easeInOut" },
            scale: { duration: 10, ease: "easeOut" } 
          }}
        >
          <Image 
            src={displayImages[currentIndex]} 
            alt="Luxury Ambience" 
            fill 
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </AnimatePresence>

      {/* Main Content */}
      <div className="container relative z-10 mx-auto px-4 md:px-6 h-full flex flex-col justify-center pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <span className="inline-block text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] mb-4 md:mb-6 border-b border-white/30 pb-2">
              Welcome to Excellence
            </span>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-white font-bold mb-6 md:mb-8 tracking-tighter leading-tight md:leading-none" dangerouslySetInnerHTML={{ __html: title.includes('<') ? title : title }} />
            <p className="font-body text-lg md:text-xl text-white/90 max-w-xl mb-12 font-light leading-relaxed">
              {subtitle}
            </p>
            {ctaText && (
              <Button asChild className="bg-white text-slate-900 hover:bg-white/90 rounded-none px-8 py-6 h-auto font-bold text-sm uppercase tracking-widest transition-transform hover:scale-105 shadow-2xl">
                <Link href={ctaLink}>{ctaText}</Link>
              </Button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
