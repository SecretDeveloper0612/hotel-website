"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  icon: React.ReactNode;
}

export function ServiceCard({ title, description, image, icon }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden h-100 w-full rounded-sm cursor-pointer shadow-lg">
      <Image 
        src={image} 
        alt={title} 
        fill 
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
      
      {/* Overlay that covers the whole card on hover - reduced opacity from 95% to 80% */}
      <div className="absolute inset-0 bg-[#2A3B39]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
        <div className="transform transition-all duration-500 group-hover:-translate-y-2">
          <div className="text-white/80 mb-4 bg-white/10 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 transition-transform duration-500 group-hover:scale-90 origin-left">
            {icon}
          </div>
          <h3 className="font-heading text-3xl font-bold text-white mb-2 leading-tight">
              {title}
          </h3>
          
          {/* Hover State Content - using grid trick to animate height smoothly */}
          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
            <div className="overflow-hidden">
              <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <p className="text-white/80 text-sm leading-relaxed font-light mb-6">
                  {description}
                </p>
                <Link href="#" className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest hover:gap-4 transition-all">
                  Explore Service <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
