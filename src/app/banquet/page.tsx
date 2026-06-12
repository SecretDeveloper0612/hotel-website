"use client";

import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Users, PartyPopper, Briefcase, Heart, Gift, Wine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import banquetImg from "@/Assets/16.jpeg";
import heroImg from "@/Assets/22.jpeg";

export default function BanquetPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero 
        title="Grand Celebrations" 
        subtitle="Transforming your special moments into everlasting memories in our elegant hall"
        image={heroImg}
        height="h-[70vh]"
        ctaText="Plan Your Event"
        ctaLink="#contact"
      />

      {/* Hall Details */}
      <section className="py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
             <motion.div 
               className="lg:w-1/2 space-y-8"
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
             >
                <span className="text-primary/70 font-bold uppercase tracking-[0.3em] text-xs block">Elegant Venues</span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 leading-[1.1]">The Perfect Setting for Every Occasion</h2>
                <p className="text-gray-600 leading-relaxed text-lg font-light">
                  Our banquet hall is one of the largest and most sophisticated venues in Bageshwar. With modern decor, advanced lighting systems, and flexible seating arrangements, we cater to everything from intimate gatherings to grand weddings and high-profile corporate conferences.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-8 py-6 border-y border-gray-100">
                   <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center shrink-0">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                         <p className="font-bold text-slate-900">1200+ Guests</p>
                         <p className="text-sm text-gray-500 font-light">Maximum Capacity</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center shrink-0">
                        <PartyPopper className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                         <p className="font-bold text-slate-900">Custom Decor</p>
                         <p className="text-sm text-gray-500 font-light">Themed Arrangements</p>
                      </div>
                   </div>
                </div>
                
                {/* <Button className="bg-primary hover:bg-primary/90 text-white rounded-sm px-10 py-6 font-bold uppercase tracking-widest text-xs transition-transform hover:scale-105 shadow-xl">
                  Check Availability
                </Button> */}
             </motion.div>
             
             <motion.div 
               className="lg:w-1/2 relative h-125 w-full rounded-sm overflow-hidden shadow-2xl group"
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
             >
                <Image 
                  src={banquetImg} 
                  alt="Banquet Setup" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 50vw" 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
             </motion.div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 md:py-24 lg:py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-32" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            className="text-center mb-16 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             <span className="text-white/70 font-bold uppercase tracking-[0.3em] text-xs block">What We Do</span>
             <h2 className="font-heading text-4xl md:text-5xl font-bold">Host Your Perfect Event</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { title: "Weddings", icon: Heart, desc: "Traditional or modern setups with gourmet catering." },
               { title: "Corporate", icon: Briefcase, desc: "Professional environment with AV support." },
               { title: "Birthdays", icon: Gift, desc: "Fun-filled themes and delicious catering." },
               { title: "Celebrations", icon: Wine, desc: "Intimate and elegant engagement or anniversary events." },
             ].map((type, idx) => (
                <motion.div 
                  key={idx} 
                  className="p-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-sm hover:bg-white/10 transition-colors duration-500 text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                   <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                     <type.icon className="w-8 h-8 text-white" />
                   </div>
                   <h4 className="font-heading font-bold text-xl mb-3 tracking-wide">{type.title}</h4>
                   <p className="text-sm text-white/70 leading-relaxed font-light">{type.desc}</p>
                </motion.div>
             ))}
          </div>
        </div>
      </section>



      {/* Inquiry CTA */}
      <section id="contact" className="py-16 md:py-24 lg:py-32 bg-white text-center">
         <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              className="max-w-4xl mx-auto bg-primary rounded-sm p-14 md:p-20 text-white shadow-2xl relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
               
               <div className="relative z-10 space-y-8">
                 <h3 className="font-heading text-4xl md:text-5xl font-bold leading-tight">Ready to Start Planning?</h3>
                 <p className="text-white/80 font-light text-lg max-w-2xl mx-auto">Connect with our event experts to get a customized quote and arrange a venue tour for your special day.</p>
                 <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
                    <Button size="lg" className="bg-white hover:bg-slate-100 text-primary font-bold uppercase tracking-widest text-xs rounded-sm px-10 py-7 transition-transform hover:scale-105 shadow-xl">
                      Contact Event Manager
                    </Button>
                    <Button size="lg" className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 uppercase tracking-widest text-xs rounded-sm px-10 py-7 transition-all">
                      Download Brochure
                    </Button>
                 </div>
               </div>
            </motion.div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
