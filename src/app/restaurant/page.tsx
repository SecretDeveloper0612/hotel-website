"use client";

import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Utensils, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";



export default function RestaurantPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero 
        title="Epicurean Journey" 
        subtitle="Savor the finest cuisines prepared with local ingredients and global techniques"
        image="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000"
        height="h-[70vh]"
        ctaText="View Menu"
        ctaLink="#menu"
      />

      {/* Experience Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <motion.div 
              className="w-full lg:w-1/2 relative max-w-sm sm:max-w-md mx-auto lg:max-w-none mb-12 lg:mb-0"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
            >
               <div className="aspect-square relative rounded-full overflow-hidden border-8 border-slate-50 shadow-2xl group">
                  <Image src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1000" alt="Plated Food" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
               </div>
               
               {/* Badge Fixed: Changed from undefined bg-gold to bg-primary for contrast */}
               <motion.div 
                 className="absolute -bottom-6 right-0 sm:-right-4 md:-bottom-8 md:-right-8 bg-primary p-5 md:p-8 rounded-sm shadow-2xl z-10"
                 initial={{ opacity: 0, rotate: -10, y: 20 }}
                 whileInView={{ opacity: 1, rotate: 3, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: 0.3 }}
               >
                  <Star className="text-white w-8 h-8 md:w-12 md:h-12 mb-2 md:mb-3 fill-white" />
                  <p className="font-bold text-white/90 uppercase tracking-widest md:tracking-[0.2em] text-[10px] md:text-xs mb-1">Rated #1 in</p>
                  <p className="font-heading text-lg md:text-xl font-bold text-white leading-tight">Bageshwar Dining</p>
               </motion.div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2 space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
               <span className="text-primary/70 font-bold uppercase tracking-[0.3em] text-xs block">Fine Dining Experience</span>
               <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 leading-[1.1]">
                 Authentic Flavors, <br />Modern Ambiance
               </h2>
               <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg">
                 <p>
                   Our restaurant offers an eclectic menu that celebrates both regional Kumaoni traditions and international favorites. Every dish is a masterpiece, crafted using farm-fresh local produce and authentic spices.
                 </p>
               </div>
               
               <div className="flex flex-col sm:flex-row gap-8 py-6 border-y border-gray-100">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center shrink-0">
                       <Clock className="w-5 h-5 text-primary" />
                     </div>
                     <div>
                        <p className="font-bold text-slate-900">Opening Hours</p>
                        <p className="text-sm text-gray-500 font-light">7:00 AM - 11:00 PM</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center shrink-0">
                       <Utensils className="w-5 h-5 text-primary" />
                     </div>
                     <div>
                        <p className="font-bold text-slate-900">Cuisine Type</p>
                        <p className="text-sm text-gray-500 font-light">Kumaoni, Indian, Global</p>
                     </div>
                  </div>
               </div>
               <Button className="bg-primary hover:bg-primary/90 text-white rounded-sm px-10 py-6 font-bold uppercase tracking-widest text-xs transition-transform hover:scale-105 shadow-xl">
                 Reserve a Table
               </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section id="menu" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/50 skew-x-12 translate-x-32" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-20 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary/70 font-bold uppercase tracking-[0.3em] text-xs block">Signature Dishes</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900">Menu Highlights</h2>
          </motion.div>
          
          <div className="max-w-4xl mx-auto flex justify-center mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full relative rounded-xl overflow-hidden shadow-2xl border-4 border-slate-100"
            >
              <Image 
                src="/images/WhatsApp Image 2026-06-18 at 16.52.07.jpeg" 
                alt="Hotel Saroj Sushma Menu" 
                width={1200}
                height={1600}
                className="w-full h-auto object-contain"
                unoptimized
              />
            </motion.div>
          </div>
          

        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
           <motion.div 
             className="text-center mb-16 space-y-4"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
           >
             <span className="text-primary/70 font-bold uppercase tracking-[0.3em] text-xs block">Visual Tour</span>
             <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900">The Atmosphere</h2>
           </motion.div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 md:h-150">
              <motion.div 
                className="md:col-span-2 md:row-span-2 relative h-75 md:h-full rounded-sm overflow-hidden shadow-lg group"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Image 
                  src="/images/WhatsApp Image 2026-06-18 at 16.52.17.jpeg" 
                  alt="Restaurant main view" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 66vw" 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
              </motion.div>

              <motion.div 
                className="md:col-span-1 md:row-span-1 relative h-62.5 md:h-full rounded-sm overflow-hidden shadow-lg group"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image 
                  src="/images/WhatsApp Image 2026-06-18 at 16.52.50 (1).jpeg" 
                  alt="Restaurant details" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw" 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
              </motion.div>

              <motion.div 
                className="md:col-span-1 md:row-span-1 relative h-62.5 md:h-full rounded-sm overflow-hidden shadow-lg group"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Image 
                  src="/images/WhatsApp Image 2026-06-18 at 16.52.16.jpeg" 
                  alt="Dining experience" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw" 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
              </motion.div>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
