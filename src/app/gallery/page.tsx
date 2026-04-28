import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { GalleryGrid } from "@/components/GalleryGrid";

const allPhotos = [
  { src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800", category: "Exterior", title: "Main Building" },
  { src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800", category: "Exterior", title: "Lobby" },
  { src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800", category: "Rooms", title: "Super Deluxe Room" },
  { src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=800", category: "Rooms", title: "Himalayan View Room" },
  { src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800", category: "Rooms", title: "Master Suite" },
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800", category: "Restaurant", title: "Main Dining Hall" },
  { src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800", category: "Restaurant", title: "Bakery Section" },
  { src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&q=80&w=800", category: "Restaurant", title: "Outdoor Seating" },
  { src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800", category: "Banquet", title: "Wedding Hall" },
  { src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80&w=800", category: "Banquet", title: "Conference Setup" },
  { src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800", category: "Exterior", title: "Valley View" },
  { src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=800", category: "Exterior", title: "Night View" },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero 
        title="Visual Journey" 
        subtitle="Explore the elegance and beauty of Saroj Sushma through our lens"
        image="https://images.unsplash.com/photo-1493397212122-2b85def0047b?auto=format&fit=crop&q=80&w=2000"
        height="h-[50vh]"
      />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <p className="text-gold font-bold uppercase tracking-[0.2em] text-sm">Our Gallery</p>
            <h2 className="font-heading text-4xl font-bold text-foreground">Captured Moments</h2>
            <div className="w-24 h-1 bg-gold mx-auto mt-4" />
          </div>
          
          <GalleryGrid images={allPhotos} />
        </div>
      </section>

      {/* Instagram Feed/Callout */}
      <section className="py-20 bg-beige/30 border-y border-beige/50">
        <div className="container mx-auto px-4 text-center">
           <h3 className="font-heading text-2xl font-bold mb-6">Follow our journey on social media</h3>
           <div className="flex justify-center gap-6">
              <a href="#" className="text-maroon font-bold hover:text-gold transition-colors">#SarojSushmaHotel</a>
              <a href="#" className="text-maroon font-bold hover:text-gold transition-colors">#BageshwarDiaries</a>
              <a href="#" className="text-maroon font-bold hover:text-gold transition-colors">#UttarakhandTourism</a>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
