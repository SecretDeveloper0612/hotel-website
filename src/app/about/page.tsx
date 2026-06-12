"use client";

import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { CheckCircle2, History, Target, Eye, Users, MapPin, Utensils } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero 
        title="Our Story & Heritage" 
        subtitle="Bringing years of excellence and care to your stay in Bageshwar"
        image="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2000"
        height="h-[70vh]"
      />

      {/* Introduction */}
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
              <div>
                <span className="text-primary/70 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Welcome to Excellence</span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 leading-[1.1]">
                  A Legacy of Hospitality in the Heart of Uttarakhand
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg">
                <p>
                  Saroj Sushma Hotel, Restaurant and Banquet Hall stands as a beacon of luxury and comfort in Bageshwar. For over 15 years, we have been dedicated to providing our guests with an experience that goes beyond just a stay – it&apos;s a journey into the heart of Kumaoni hospitality.
                </p>
                <p>
                  Whether you&apos;re visiting for a quiet retreat, a business meeting, or a grand celebration, our team is committed to making every moment special. Our facilities are designed to cater to the diverse needs of modern travelers while retaining the warmth of traditional service.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-y-6 gap-x-4 pt-4 border-t border-gray-100">
                {[
                  "30+ Luxury Rooms",
                  "Fine Dining Restaurant",
                  "Grand Banquet Hall",
                  "Mountain Views",
                  "Premium Amenities",
                  "24/7 Security"
                ].map((item, idx) => (
                  <motion.div 
                    key={item} 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-medium text-slate-700 uppercase tracking-wide">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2 relative h-150 w-full rounded-sm overflow-hidden shadow-2xl group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200" 
                alt="Hotel Interior" 
                fill 
                sizes="(max-width: 1024px) 100vw, 50vw" 
                className="object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-32" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            <motion.div 
              className="space-y-8 p-10 lg:p-14 bg-white/5 backdrop-blur-md rounded-sm border border-white/10 hover:bg-white/10 transition-colors duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-3xl font-bold text-white tracking-wide">Our Mission</h3>
              <p className="text-white/70 leading-relaxed font-light text-lg">
                To provide an exceptional guest experience through personalized service, premium facilities, and a commitment to authenticity, ensuring that every visitor leaves with cherished memories of Bageshwar.
              </p>
            </motion.div>

            <motion.div 
              className="space-y-8 p-10 lg:p-14 bg-white/5 backdrop-blur-md rounded-sm border border-white/10 hover:bg-white/10 transition-colors duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-3xl font-bold text-white tracking-wide">Our Vision</h3>
              <p className="text-white/70 leading-relaxed font-light text-lg">
                To be the most preferred hospitality destination in Bageshwar, recognized for our excellence in service, innovation in dining, and brilliance in event management, while positively contributing to our local community.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 lg:py-32 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary/70 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">The Difference</span>
            <h2 className="font-heading text-4xl font-bold text-slate-900 mb-16">Why Choose Us</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: History, title: "15+ Years", desc: "Experience in luxury hospitality" },
              { icon: MapPin, title: "Prime Location", desc: "Easy access to major city spots" },
              { icon: Utensils, title: "Top Cuisine", desc: "Authentic Kumaoni & global flavors" },
              { icon: Users, title: "Expert Staff", desc: "Professional, polite, and dedicated" },
            ].map((feature, idx) => (
              <motion.div 
                key={idx} 
                className="group p-8 bg-white rounded-sm shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="mx-auto w-16 h-16 mb-6 bg-slate-50 group-hover:bg-primary transition-colors duration-500 rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <h4 className="font-heading font-bold text-xl text-slate-900 mb-3">{feature.title}</h4>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
