"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { StaticImageData } from "next/image";

interface GalleryImage {
  src: string | StaticImageData;
  category?: string;
  title?: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  showFilters?: boolean;
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [filter] = useState("All");

  const filteredImages = filter === "All" 
    ? images 
    : images;

  return (
    <div className="w-full">
      <motion.div 
        layout
        className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
      >
        <AnimatePresence mode='popLayout'>
          {filteredImages.map((image, idx) => (
            <motion.div
              layout
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="relative group overflow-hidden rounded-lg break-inside-avoid aspect-4/3"
            >
              <Image
                src={image.src}
                alt={image.title || "Gallery Image"}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
