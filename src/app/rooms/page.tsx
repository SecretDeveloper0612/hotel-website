"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { RoomCard } from "@/components/RoomCard";
import { motion } from "framer-motion";
import { 
  Wifi, 
  ConciergeBell, 
  Coffee, 
  Tv, 
  Droplets, 
  Mountain, 
  Sparkles, 
  Wind 
} from "lucide-react";

import img1 from "@/Assets/1.jpeg";
import img3 from "@/Assets/3.jpeg";
import img4 from "@/Assets/4.jpeg";
import img6 from "@/Assets/6.jpeg";

const rooms = [
  {
    name: "Deluxe Single Room",
    image: img1,
    description: "Compact and cozy room perfect for solo travelers or business visitors.",
    amenities: ["WiFi", "TV", "Desk"],
    capacity: "1 Adult",
    size: "250 sq ft"
  },

  {
    name: "Super Deluxe Room",
    image: img3,
    description: "Enhanced space and comfort with premium bedding and larger washrooms.",
    amenities: ["WiFi", "TV", "AC", "Mini Fridge"],
    capacity: "2 Adults",
    size: "450 sq ft"
  },
  {
    name: "Super Deluxe Suite",
    image: img4,
    description: "Extra luxury with a separate living area and premium amenities for a perfect stay.",
    amenities: ["WiFi", "TV", "Mini Bar"],
    capacity: "2+1 Guests",
    size: "500 sq ft"
  },

  {
    name: "Presidential Suite",
    image: img6,
    description: "Our finest accommodation with panoramic views, private dining area, and 24/7 service.",
    amenities: ["WiFi", "TV", "Luxury Bath", "Personal Chef"],
    capacity: "2 Adults",
    size: "1000 sq ft"
  }
];

const amenitiesList = [
  { label: "High Speed WiFi", icon: Wifi },
  { label: "Room Service", icon: ConciergeBell },
  { label: "Coffee Maker", icon: Coffee },
  { label: "LED Smart TV", icon: Tv },
  { label: "Hot & Cold Water", icon: Droplets },
  { label: "Mountain View", icon: Mountain },
  { label: "Daily Cleaning", icon: Sparkles },
  { label: "Air Conditioning", icon: Wind },
];

export default function RoomsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero 
        title="Accommodations" 
        subtitle="Relax in our thoughtfully designed rooms and suites"
        images={[
          "https://images.unsplash.com/photo-1578683010236-d716f9759678?auto=format&fit=crop&q=80&w=2000",
          "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=2000"
        ]}
        height="h-[60vh]"
        ctaText=""
      />

      <section className="py-16 md:py-24 lg:py-32 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             <span className="text-primary/70 font-bold uppercase tracking-[0.3em] text-xs block">Choose Your Space</span>
             <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900">Explore Our Rooms</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {rooms.map((room, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <RoomCard {...room} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities highlight */}
      <section className="py-24 md:py-32 bg-slate-50 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             <span className="text-primary/70 font-bold uppercase tracking-[0.3em] text-xs block">Hotel Amenities</span>
             <h2 className="font-heading text-4xl font-bold text-slate-900">Everything You Need</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {amenitiesList.map((item, idx) => (
              <motion.div 
                key={idx} 
                className="group flex flex-col items-center gap-6 p-8 bg-white rounded-sm shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                  <item.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <span className="font-heading font-bold text-slate-800 text-center">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
