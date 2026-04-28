"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

export function ServiceCard({ title, description, image, icon }: ServiceCardProps) {
  return (
    <div className="group relative bg-white border border-slate-100 flex flex-col md:flex-row h-auto md:h-[300px]">
      <div className="w-full md:w-1/2 relative h-[250px] md:h-full overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white group-hover:bg-slate-50 transition-colors duration-500">
        <div className="mb-6 opacity-40 group-hover:opacity-100 transition-opacity">
          {icon}
        </div>
        <h3 className="font-heading text-2xl font-bold mb-4 text-primary">
            {title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed font-light">
          {description}
        </p>
      </div>
    </div>
  );
}
