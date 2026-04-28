"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface GalleryImage {
  src: string;
  category: string;
  title: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  showFilters?: boolean;
}

export function GalleryGrid({ images, showFilters = true }: GalleryGridProps) {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...Array.from(new Set(images.map((img) => img.category)))];

  const filteredImages = filter === "All" 
    ? images 
    : images.filter((img) => img.category === filter);

  return (
    <div className="w-full">
      {showFilters && (
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-6 py-2 rounded-full border transition-all duration-300 text-sm font-medium uppercase tracking-widest",
                filter === cat
                  ? "bg-maroon border-maroon text-white"
                  : "bg-transparent border-gray-200 text-gray-500 hover:border-gold hover:text-gold"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <motion.div 
        layout
        className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
      >
        <AnimatePresence mode='popLayout'>
          {filteredImages.map((image, index) => (
            <motion.div
              layout
              key={image.src}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="relative group overflow-hidden rounded-lg break-inside-avoid"
            >
              <Image
                src={image.src}
                alt={image.title}
                width={800}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-maroon/60 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-gold text-xs uppercase tracking-widest mb-1">{image.category}</span>
                <h4 className="text-white font-heading text-lg font-bold">{image.title}</h4>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
