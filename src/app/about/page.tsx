import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { CheckCircle2, History, Target, Eye, Users, MapPin, Utensils } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero 
        title="Our Story & Hospitality" 
        subtitle="Bringing years of excellence and care to your stay in Bageshwar"
        image="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2000"
        height="h-[60vh]"
      />

      {/* Introduction */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-6">
              <p className="text-gold font-bold uppercase tracking-[0.2em] text-sm">Welcome to Excellence</p>
              <h2 className="font-heading text-4xl font-bold text-foreground leading-tight">
                A Legacy of Hospitality in the Heart of Uttarakhand
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Saroj Sushma Hotel, Restaurant and Banquett Hall stands as a beacon of luxury and comfort in Bageshwar. For over 15 years, we have been dedicated to providing our guests with an experience that goes beyond just a stay – it's a journey into the heart of Kumaoni hospitality.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you're visiting for a quiet retreat, a business meeting, or a grand celebration, our team is committed to making every moment special. Our facilities are designed to cater to the diverse needs of modern travelers while retaining the warmth of traditional service.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                {[
                  "30+ Luxury Rooms",
                  "Fine Dining Restaurant",
                  "Grand Banquet Hall",
                  "Mountain Views",
                  "Premium Amenities",
                  "24/7 Security"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                    <span className="text-sm font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-xl">
                  <Image src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800" alt="Hotel Interior" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-xl">
                  <Image src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=800" alt="Serving Guests" fill className="object-cover" />
                </div>
                <div className="aspect-square relative rounded-2xl overflow-hidden shadow-xl border-4 border-gold/10">
                  <Image src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800" alt="Restaurant" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-maroon text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6 p-8 bg-white/5 rounded-3xl border border-white/10">
              <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-heading text-3xl font-bold">Our Mission</h3>
              <p className="text-white/70 leading-relaxed">
                To provide an exceptional guest experience through personalized service, premium facilities, and a commitment to authenticity, ensuring that every visitor leaves with cherished memories of Bageshwar.
              </p>
            </div>
            <div className="space-y-6 p-8 bg-white/5 rounded-3xl border border-white/10">
              <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center mb-4">
                <Eye className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-heading text-3xl font-bold">Our Vision</h3>
              <p className="text-white/70 leading-relaxed">
                To be the most preferred hospitality destination in Bageshwar, recognized for our excellence in service, innovation in dining, and brilliance in event management, while positively contributing to the local community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-beige/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold font-bold uppercase tracking-[0.2em] text-sm mb-12">The Difference</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: History, title: "15+ Years", desc: "Experience in hospitality" },
              { icon: MapPin, title: "Prime Location", desc: "Easy access to major spots" },
              { icon: Utensils, title: "Top Cuisine", desc: "Authentic Kumaoni flavors" },
              { icon: Users, title: "Expert Staff", desc: "Professional and polite" },
            ].map((feature, idx) => (
              <div key={idx} className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-white shadow-lg rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-maroon" />
                </div>
                <h4 className="font-bold text-xl">{feature.title}</h4>
                <p className="text-sm text-gray-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
