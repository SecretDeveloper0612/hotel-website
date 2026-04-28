"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Coffee, Wifi, Tv, Users, Maximize2, ArrowRight, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface RoomCardProps {
  name: string;
  price: string;
  image: string;
  description: string;
  amenities: string[];
  capacity: string;
  size: string;
}

export function RoomCard({ name, price, image, description, amenities, capacity, size }: RoomCardProps) {
  return (
    <div className="group bg-white border border-slate-200 overflow-hidden">
      <div className="relative aspect-video overflow-hidden">
        <Image 
          src={image} 
          alt={name} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-primary text-white px-3 py-1 text-[10px] font-bold rounded-none uppercase tracking-widest border-none">
            {price} / Day
          </Badge>
        </div>
      </div>

      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
            <h3 className="font-heading text-xl font-bold text-primary group-hover:text-secondary transition-colors">{name}</h3>
            <div className="flex gap-1 text-secondary">
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
            </div>
        </div>
        
        <p className="text-slate-500 text-sm mb-6 leading-relaxed line-clamp-2">
          {description}
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-8 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                <Users className="w-3 h-3" /> {capacity}
            </div>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                <Maximize2 className="w-3 h-3" /> {size}
            </div>
        </div>
        
        <button className="w-full py-4 border border-slate-200 hover:border-primary hover:bg-primary hover:text-white transition-all text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2">
            View Room Details <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
