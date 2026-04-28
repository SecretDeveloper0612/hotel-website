"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { RoomCard } from "@/components/RoomCard";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Button } from "@/components/ui/button";
import { 
  Hotel, 
  Utensils, 
  PartyPopper, 
  Star, 
  Phone, 
  MapPin, 
  ArrowRight,
  ShieldCheck,
  Award,
  Crown
} from "lucide-react";

export default function HomePage() {
  const services = [
    {
      title: "Superior Lodging",
      description: "Our meticulously designed rooms offer the perfect balance of modern luxury and quiet comfort.",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800",
      icon: <Hotel className="w-8 h-8 text-primary" />
    },
    {
      title: "Signature Dining",
      description: "Experience the finest local and international cuisines prepared by our expert chefs.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
      icon: <Utensils className="w-8 h-8 text-primary" />
    },
    {
      title: "Event Excellence",
      description: "From corporate meetings to grand weddings, we provide flawless execution for all your events.",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800",
      icon: <PartyPopper className="w-8 h-8 text-primary" />
    }
  ];

  const featuredRooms = [
    {
      name: "Grand Suite",
      price: "₹8,500",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=800",
      description: "The ultimate luxury experience with panoramic views and premium services.",
      amenities: ["WiFi", "TV", "Mini Bar"],
      capacity: "2 adults",
      size: "850 sq ft"
    },
    {
      name: "Executive Deluxe",
      price: "₹5,500",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
      description: "Ideal for business travelers seeking comfort and modern functionality.",
      amenities: ["WiFi", "TV", "Desk"],
      capacity: "2 Guests",
      size: "550 sq ft"
    },
    {
      name: "Family Haven",
      price: "₹10,500",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800",
      description: "Spacious interconnected rooms offering comfort for families of all sizes.",
      amenities: ["WiFi", "TV", "Living Area"],
      capacity: "4 Adults",
      size: "1200 sq ft"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      {/* Trust & Quality Section */}
      <section className="bg-slate-50 py-12 border-b">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white flex items-center justify-center border shadow-sm"><ShieldCheck className="text-secondary" /></div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Verified Luxury Standard</span>
               </div>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white flex items-center justify-center border shadow-sm"><Award className="text-secondary" /></div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Award Winning Service</span>
               </div>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white flex items-center justify-center border shadow-sm"><Crown className="text-secondary" /></div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Premium Destination</span>
               </div>
            </div>
         </div>
      </section>

      {/* Professional Intro */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div className="w-full md:w-1/2">
                <div className="relative aspect-square md:aspect-[4/5] overflow-hidden border-[16px] border-slate-50 shadow-2xl">
                    <Image 
                        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200" 
                        alt="The Hotel" 
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
            
            <div className="w-full md:w-1/2 space-y-8">
              <span className="text-secondary font-bold tracking-[0.3em] text-[10px] uppercase">Established Excellence</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary leading-tight">
                Authentic Hospitality <br /> In Bageshwar.
              </h2>
              <p className="text-slate-600 leading-relaxed font-light">
                Saroj Sushma Hotel, Restaurant and Banquett Hall is a premier destination in Bageshwar, offering a perfect blend of modern luxury and traditional hospitality. We maintain the highest standards of service to ensure every stay is exceptional.
              </p>
              <div className="grid grid-cols-2 gap-8 py-6 border-y">
                 <div className="space-y-1">
                    <p className="font-bold text-2xl text-primary">150+</p>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Premium Rooms</p>
                 </div>
                 <div className="space-y-1">
                    <p className="font-bold text-2xl text-primary">24/7</p>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Concierge Service</p>
                 </div>
              </div>
              <Button asChild variant="outline" className="rounded-none px-10 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold uppercase tracking-widest text-xs">
                <Link href="/about" className="flex items-center gap-2">About The Hotel <ArrowRight className="w-3 h-3" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
             <h2 className="font-heading text-4xl font-bold text-primary">Our Specialized <br /> Departments</h2>
             <p className="text-slate-500 max-w-sm text-sm font-light">We pride ourselves on offering specialized services across accommodation, dining, and event management.</p>
          </div>
          
          <div className="grid grid-cols-1 gap-px bg-slate-200 border border-slate-200">
            {services.map((service, idx) => (
              <ServiceCard 
                key={idx}
                title={service.title}
                description={service.description}
                image={service.image}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
             <span className="text-secondary font-bold tracking-[0.3em] text-[10px] uppercase">Elite Accommodations</span>
             <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary">Selected Suites</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredRooms.map((room, idx) => (
              <RoomCard key={idx} {...room} />
            ))}
          </div>
        </div>
      </section>

      {/* Professional Call-to-Action */}
      <section className="py-24 bg-primary text-white">
         <div className="container mx-auto px-6 text-center space-y-10">
            <h2 className="font-heading text-4xl md:text-6xl font-bold max-w-4xl mx-auto">Providing Exceptional Hospitality for Over 15 Years.</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button className="bg-secondary text-primary font-bold px-12 py-8 rounded-none border-none uppercase tracking-widest text-xs">
                    Quick Booking
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-12 py-8 rounded-none font-bold uppercase tracking-widest text-xs">
                    Contact Us
                </Button>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
