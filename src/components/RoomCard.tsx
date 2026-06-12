"use client";

import React from "react";
import Image from "next/image";
import { Users, Maximize2, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface RoomCardProps {
  name: string;
  image: string | any;
  description: string;
  amenities: string[];
}

export function RoomCard({ name, image, description }: RoomCardProps) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer">
      <div className="relative aspect-4/3 overflow-hidden">
        <Image 
          src={image} 
          alt={name} 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <div className="bg-white text-[#2A3B39] px-4 py-2 text-xs font-bold rounded-full shadow-lg opacity-0 pointer-events-none">
            Hidden Space
          </div>
          <button className="w-10 h-10 bg-[#2A3B39] text-white rounded-full flex items-center justify-center hover:bg-[#4A5053] transition-colors">
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <h3 className="font-heading text-2xl font-bold text-[#2A3B39] mb-3">{name}</h3>
        <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-2">
          {description}
        </p>
        <a 
          href={`https://wa.me/917302951299?text=Hi,%20I%20would%20like%20to%20inquire%20about%20booking%20the%20${encodeURIComponent(name)}.`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block w-full text-center bg-[#2A3B39] text-white py-3 rounded-md font-bold text-sm uppercase tracking-wider hover:bg-[#1a2523] transition-colors"
        >
          Book Now
        </a>
      </div>
    </div>
  );
}
