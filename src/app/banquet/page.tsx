import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Users, PartyPopper, Calendar, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BanquetPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero 
        title="Grand Celebrations" 
        subtitle="Transforming your special moments into everlasting memories in our elegant hall"
        image="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=2000"
        height="h-[60vh]"
        ctaText="Plan Your Event"
      />

      {/* Hall Details */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
             <div className="lg:w-1/2 space-y-8">
                <p className="text-gold font-bold uppercase tracking-[0.2em] text-sm">Elegant Venues</p>
                <h2 className="font-heading text-4xl font-bold text-foreground leading-tight">The Perfect Setting for Every Occasion</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Our banquet hall is one of the largest and most sophisticated venues in Bageshwar. With modern decor, advanced lighting systems, and flexible seating arrangements, we cater to everything from intimate birthday parties to grand weddings and high-profile corporate conferences.
                </p>
                <div className="grid grid-cols-2 gap-8 py-4">
                   <div className="flex flex-col gap-2 p-6 bg-beige/40 rounded-xl">
                      <Users className="w-8 h-8 text-maroon" />
                      <h4 className="font-bold text-xl">500+ Guests</h4>
                      <p className="text-sm text-gray-500">Maximum Capacity</p>
                   </div>
                   <div className="flex flex-col gap-2 p-6 bg-beige/40 rounded-xl">
                      <PartyPopper className="w-8 h-8 text-maroon" />
                      <h4 className="font-bold text-xl">Custom Decor</h4>
                      <p className="text-sm text-gray-500">Themed Arrangements</p>
                   </div>
                </div>
                <Button className="bg-maroon hover:bg-maroon/90 text-white rounded-none px-10 py-6">
                  Check Availability
                </Button>
             </div>
             <div className="lg:w-1/2 relative">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl z-10">
                   <Image src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80&w=1200" alt="Banquet Setup" fill className="object-cover" />
                </div>
                <div className="absolute -top-10 -left-10 w-full h-full border-2 border-gold rounded-2xl -z-10" />
             </div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-24 bg-maroon text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
             <p className="text-gold font-bold uppercase tracking-[0.2em] text-sm">What We Do</p>
             <h2 className="font-heading text-4xl font-bold">Host Your Perfect Event</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { title: "Weddings", icon: "💍", desc: "Traditional or modern setups with gourmet catering." },
               { title: "Corporate Events", icon: "💼", desc: "Professional environment with AV support." },
               { title: "Birthday Parties", icon: "🎂", desc: "Fun-filled themes and delicious cakes." },
               { title: "Engagement", icon: "🥂", desc: "Intimate and elegant rings ceremonies." },
             ].map((type, idx) => (
                <div key={idx} className="p-10 border border-white/10 rounded-2xl hover:bg-white/5 transition-all text-center group">
                   <span className="text-6xl mb-6 block transform group-hover:scale-110 transition-transform">{type.icon}</span>
                   <h4 className="font-bold text-xl mb-3">{type.title}</h4>
                   <p className="text-sm text-white/60 leading-relaxed">{type.desc}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Capacity Info */}
      <section className="py-24 bg-beige/10">
        <div className="container mx-auto px-4">
           <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">
              <div className="bg-gold p-8 text-center">
                 <h3 className="font-heading text-3xl font-bold text-maroon">Venue Specifications</h3>
              </div>
              <div className="p-8 md:p-12 overflow-x-auto">
                 <table className="w-full text-left">
                    <thead>
                       <tr className="border-b-2 border-gray-100">
                          <th className="py-4 text-maroon font-bold uppercase tracking-widest text-sm">Seating Style</th>
                          <th className="py-4 text-maroon font-bold uppercase tracking-widest text-sm text-right">Capacity</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                       {[
                         { style: "Theater Style", cap: "500 Guests" },
                         { style: "Round Table Dinner", cap: "350 Guests" },
                         { style: "Cluster Setup", cap: "300 Guests" },
                         { style: "Formal Boardroom", cap: "100 Guests" },
                         { style: "Floating Crowd", cap: "700 Guests" },
                       ].map((row, idx) => (
                         <tr key={idx} className="hover:bg-gray-50 transition-colors">
                            <td className="py-6 font-medium">{row.style}</td>
                            <td className="py-6 text-right font-bold text-gray-700">{row.cap}</td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="py-24 text-center">
         <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-maroon rounded-3xl p-12 text-white space-y-8">
               <h3 className="font-heading text-4xl font-bold">Ready to Start Planning?</h3>
               <p className="text-white/70">Connect with our event experts to get a customized quote for your special day.</p>
               <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button size="lg" className="bg-gold hover:bg-white hover:text-maroon text-maroon font-bold rounded-none px-8">
                    Contact Event Manager
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-maroon rounded-none px-8">
                    Download Brochure
                  </Button>
               </div>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
