import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { RoomCard } from "@/components/RoomCard";

const rooms = [
  {
    name: "Deluxe Single Room",
    price: "₹2,500 / night",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=800",
    description: "Compact and cozy room perfect for solo travelers or business visitors.",
    amenities: ["WiFi", "TV", "Desk"],
    capacity: "1 Adult",
    size: "250 sq ft"
  },
  {
    name: "Deluxe Himalayan Room",
    price: "₹3,500 / night",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=800",
    description: "Spacious room with a private balcony offering stunning views of the valley.",
    amenities: ["WiFi", "TV", "Coffee Maker"],
    capacity: "2 Adults",
    size: "350 sq ft"
  },
  {
    name: "Super Deluxe Room",
    price: "₹4,500 / night",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800",
    description: "Enhanced space and comfort with premium bedding and larger washrooms.",
    amenities: ["WiFi", "TV", "AC", "Mini Fridge"],
    capacity: "2 Adults",
    size: "450 sq ft"
  },
  {
    name: "Super Deluxe Suite",
    price: "₹5,500 / night",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
    description: "Extra luxury with a separate living area and premium amenities for a perfect stay.",
    amenities: ["WiFi", "TV", "Mini Bar"],
    capacity: "2+1 Guests",
    size: "500 sq ft"
  },
  {
    name: "Family Heritage Suite",
    price: "₹7,500 / night",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800",
    description: "Two interconnected bedrooms, ideal for families seeking comfort and togetherness.",
    amenities: ["WiFi", "TV", "Kitchenette"],
    capacity: "4 Adults",
    size: "750 sq ft"
  },
  {
    name: "Presidential Suite",
    price: "₹9,500 / night",
    image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=80&w=800",
    description: "Our finest accommodation with panoramic views, private dining area, and 24/7 service.",
    amenities: ["WiFi", "TV", "Luxury Bath", "Personal Chef"],
    capacity: "2 Adults",
    size: "1000 sq ft"
  }
];

export default function RoomsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero 
        title="Accommodations" 
        subtitle="Relax in our thoughtfully designed rooms and suites"
        image="https://images.unsplash.com/photo-1578683010236-d716f9759678?auto=format&fit=crop&q=80&w=2000"
        height="h-[50vh]"
        ctaText="View Offers"
      />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
             <p className="text-gold font-bold uppercase tracking-[0.2em] text-sm">Choose Your Space</p>
             <h2 className="font-heading text-4xl font-bold text-foreground">Explore Our Rooms</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {rooms.map((room, idx) => (
              <RoomCard key={idx} {...room} />
            ))}
          </div>
        </div>
      </section>

      {/* Amenities highlight */}
      <section className="py-20 bg-beige/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "High Speed WiFi", icon: "📶" },
              { label: "Room Service", icon: "🛎️" },
              { label: "Coffee Maker", icon: "☕" },
              { label: "LED Smart TV", icon: "📺" },
              { label: "Hot & Cold Water", icon: "🚿" },
              { label: "Mountain View", icon: "🏔️" },
              { label: "Daily Cleaning", icon: "🧹" },
              { label: "Air Conditioning", icon: "❄️" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                <span className="text-4xl">{item.icon}</span>
                <span className="font-medium text-gray-700">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
