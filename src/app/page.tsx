"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { RoomCard } from "@/components/RoomCard";
import img1 from "@/Assets/1.jpeg";
import img3 from "@/Assets/3.jpeg";
import img6 from "@/Assets/6.jpeg";
import img7 from "@/Assets/7.jpeg";
import img12 from "@/Assets/12.jpeg";
import img20 from "@/Assets/20.jpeg";
import img16 from "@/Assets/16.jpeg";
import img19 from "@/Assets/19.jpeg";

import { Button } from "@/components/ui/button";
import { 
  Hotel, 
  Utensils, 
  PartyPopper, 
  ArrowRight
} from "lucide-react";

export default function HomePage() {
  const parallaxRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  const services = [
    {
      title: "Superior Lodging",
      description: "Our meticulously designed rooms offer the perfect balance of modern luxury and quiet comfort.",
      image: img1,
      icon: <Hotel className="w-8 h-8 text-primary" />
    },
    {
      title: "Signature Dining",
      description: "Experience the finest local and international cuisines prepared by our expert chefs.",
      image: img12,
      icon: <Utensils className="w-8 h-8 text-primary" />
    },
    {
      title: "Event Excellence",
      description: "From corporate meetings to grand weddings, we provide flawless execution for all your events.",
      image: img16,
      icon: <PartyPopper className="w-8 h-8 text-primary" />
    }
  ];

  const featuredRooms = [
    {
      name: "Deluxe Single Room",
      image: img1,
      description: "Compact and cozy room perfect for solo travelers or business visitors.",
      amenities: ["WiFi", "TV", "Desk"],
    },
    {
      name: "Super Deluxe Room",
      image: img3,
      description: "Enhanced space and comfort with premium bedding and larger washrooms.",
      amenities: ["WiFi", "TV", "AC", "Mini Fridge"],
    },
    {
      name: "Presidential Suite",
      image: img6,
      description: "Our finest accommodation with panoramic views, private dining area, and 24/7 service.",
      amenities: ["WiFi", "TV", "Luxury Bath", "Personal Chef"],
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero images={[img20, img12, img7]} />

      {/* Professional Intro - Asymmetric Layout */}
      <section className="py-16 md:py-24 lg:py-40 bg-[#FAFAFA] overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            {/* Asymmetric Image Composition */}
            <div className="w-full lg:w-1/2 relative">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-4/5 aspect-4/5 overflow-hidden rounded-sm shadow-2xl"
              >
                <Image 
                  src={img3} 
                  alt="Hotel Interior" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-12 -right-4 w-3/5 aspect-square overflow-hidden rounded-sm shadow-xl z-20 border-8 border-white"
              >
                <Image 
                  src={img6} 
                  alt="Fine Dining" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
              
              {/* Decorative Element */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#2A3B39]/10 rounded-full blur-2xl -z-10" />
            </div>
            
            {/* Text Content */}
            <div className="w-full lg:w-1/2 space-y-8 mt-16 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-[#4A5053] font-bold tracking-[0.2em] text-[10px] uppercase border-b border-[#4A5053] pb-2 inline-block mb-6">Our Legacy</span>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#2A3B39] leading-[1.1] mb-6">
                  Authentic <br /> <span className="text-[#4A5053]/60 italic font-light">Hospitality</span> In Bageshwar.
                </h2>
                <p className="text-slate-500 leading-relaxed font-light text-lg mb-8">
                  Saroj Sushma Hotel, Restaurant and Banquet Hall is a premier destination in Bageshwar, offering a perfect blend of modern luxury and traditional hospitality. We maintain the highest standards of service to ensure every stay is exceptional and memorable.
                </p>
                
                <div className="grid grid-cols-2 gap-8 py-8 border-y border-slate-200 mb-8">
                   <div className="space-y-2">
                      <p className="font-heading text-4xl text-[#2A3B39] font-bold">150+</p>
                      <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Premium Rooms</p>
                   </div>
                   <div className="space-y-2">
                      <p className="font-heading text-4xl text-[#2A3B39] font-bold">15</p>
                      <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Years of Excellence</p>
                   </div>
                </div>
                
                <Button asChild className="bg-[#4A5053] hover:bg-[#2A3B39] text-white rounded-none px-10 py-7 font-bold uppercase tracking-widest text-xs transition-colors">
                  <Link href="/about" className="flex items-center gap-3">Discover Our Story <ArrowRight className="w-4 h-4" /></Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
             <div className="space-y-4">
               <span className="text-[#4A5053] font-bold tracking-[0.2em] text-[10px] uppercase border-b border-[#4A5053] pb-2 inline-block">Curated Experiences</span>
               <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#2A3B39]">Our Specialized <br /> Departments</h2>
             </div>
             <p className="text-slate-500 max-w-md text-base font-light leading-relaxed">
               We pride ourselves on offering specialized services across accommodation, dining, and event management, designed to cater to your every need.
             </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <ServiceCard 
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  icon={service.icon}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-16 md:py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
             <span className="text-[#4A5053] font-bold tracking-[0.2em] text-[10px] uppercase border-b border-[#4A5053] pb-2 inline-block">Elite Accommodations</span>
             <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#2A3B39]">Selected Suites</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRooms.map((room, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <RoomCard {...room} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Call-to-Action */}
      <section ref={parallaxRef} className="relative py-20 md:py-32 lg:py-48 overflow-hidden bg-slate-900">
         <motion.div 
           className="absolute inset-0 z-0 will-change-transform"
           style={{ y: parallaxY }}
         >
           <Image 
             src={img19}
             alt="Luxury Hotel"
             fill
             sizes="100vw"
             className="object-cover scale-[1.4]"
             quality={60}
           />
         </motion.div>
         <div className="absolute inset-0 bg-linear-to-r from-[#2A3B39]/95 to-[#2A3B39]/70 z-10" />
         <div className="absolute inset-0 bg-black/40 z-10" />
         
         <div className="container relative z-20 mx-auto px-4 md:px-6 text-center space-y-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-white/80 font-bold tracking-[0.3em] text-[10px] uppercase mb-6 block">Ready for an unforgettable stay?</span>
              <h2 className="font-heading text-5xl md:text-7xl font-bold max-w-4xl mx-auto text-white leading-tight mb-12">
                Providing Exceptional Hospitality for Over 15 Years.
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <Button asChild className="bg-white text-[#2A3B39] hover:bg-slate-100 font-bold px-12 py-8 rounded-sm uppercase tracking-widest text-xs transition-all hover:scale-105 shadow-xl">
                      <a href="tel:+917302951299">Quick Booking</a>
                  </Button>
                  <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-[#2A3B39] px-12 py-8 rounded-sm font-bold uppercase tracking-widest text-xs transition-all hover:scale-105 bg-transparent backdrop-blur-sm">
                      <Link href="/contact">Contact Us</Link>
                  </Button>
              </div>
            </motion.div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
