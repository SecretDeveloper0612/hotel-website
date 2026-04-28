import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Utensils, Clock, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  { name: "Kumaoni Thali", desc: "Authentic local flavors including Bhatt ki Churkani, Gahat Dal, and Mandua Roti.", price: "₹450" },
  { name: "Paneer Butter Masala", desc: "Creamy paneer cooked in a rich tomato and butter gravy.", price: "₹350" },
  { name: "Mountain Herbs Chicken", desc: "Tender chicken marinated with local mountain herbs and spices.", price: "₹480" },
  { name: "Veg Hakka Noodles", desc: "Classic stir-fried noodles with fresh garden vegetables.", price: "₹280" },
  { name: "Gulab Jamun", desc: "Soft, syrup-soaked milk balls - a classic Indian dessert.", price: "₹120" },
  { name: "Cold Coffee with Ice Cream", desc: "Refreshing blended coffee topped with vanilla scoops.", price: "₹180" },
];

export default function RestaurantPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero 
        title="Epicurean Journey" 
        subtitle="Savor the finest cuisines prepared with local ingredients and global techniques"
        image="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000"
        height="h-[60vh]"
        ctaText="View Menu"
      />

      {/* Experience Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative">
               <div className="aspect-square relative rounded-full overflow-hidden border-[15px] border-beige shadow-2xl">
                  <Image src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1000" alt="Plated Food" fill className="object-cover" />
               </div>
               <div className="absolute -bottom-8 -right-8 bg-gold p-8 rounded-2xl shadow-xl transform rotate-3">
                  <Star className="text-white w-12 h-12 mb-2 fill-white" />
                  <p className="font-bold text-white uppercase tracking-widest text-xs">Rated #1 in</p>
                  <p className="font-heading text-xl font-bold text-white">Bageshwar Dining</p>
               </div>
            </div>
            <div className="lg:w-1/2 space-y-8">
               <p className="text-gold font-bold uppercase tracking-[0.2em] text-sm">Fine Dining</p>
               <h2 className="font-heading text-4xl font-bold text-foreground leading-tight">Authentic Flavors, <br />Modern Ambiance</h2>
               <p className="text-gray-600 leading-relaxed text-lg">
                 Our restaurant offers an eclectic menu that celebrates both regional Kumaoni traditions and international favorites. Every dish is a masterpiece, crafted using farm-fresh local produce and authentic spices.
               </p>
               <div className="flex flex-wrap gap-8 py-4">
                  <div className="flex items-center gap-3">
                     <Clock className="w-6 h-6 text-maroon" />
                     <div>
                        <p className="font-bold">Opening Hours</p>
                        <p className="text-sm text-gray-500">7:00 AM - 11:00 PM</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-3">
                     <Utensils className="w-6 h-6 text-maroon" />
                     <div>
                        <p className="font-bold">Cuisine Type</p>
                        <p className="text-sm text-gray-500">Kumaoni, Indian, Chinese</p>
                     </div>
                  </div>
               </div>
               <Button className="bg-maroon hover:bg-maroon/90 text-white rounded-none px-10 py-6">
                 Reserve a Table
               </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="py-24 bg-beige/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <p className="text-gold font-bold uppercase tracking-[0.2em] text-sm">Signature Dishes</p>
            <h2 className="font-heading text-4xl font-bold text-foreground">Menu Highlights</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 max-w-5xl mx-auto">
            {menuItems.map((item, idx) => (
              <div key={idx} className="flex justify-between items-start group">
                <div className="space-y-1">
                  <h4 className="font-bold text-lg group-hover:text-maroon transition-colors">{item.name}</h4>
                  <p className="text-sm text-gray-500 italic pr-8">{item.desc}</p>
                </div>
                <span className="font-bold text-maroon">{item.price}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white rounded-none px-10 border-2">
              Downlod Full Menu (PDF)
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 aspect-[16/9] relative rounded-2xl overflow-hidden shadow-lg">
                <Image src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200" alt="Interior" fill className="object-cover" />
              </div>
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-lg">
                <Image src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800" alt="Bar" fill className="object-cover" />
              </div>
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-lg">
                <Image src="https://images.unsplash.com/photo-1550966841-3ee8b965c717?auto=format&fit=crop&q=80&w=800" alt="Chef at work" fill className="object-cover" />
              </div>
              <div className="md:col-span-2 aspect-[16/9] relative rounded-2xl overflow-hidden shadow-lg">
                <Image src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&q=80&w=1200" alt="Table setup" fill className="object-cover" />
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
