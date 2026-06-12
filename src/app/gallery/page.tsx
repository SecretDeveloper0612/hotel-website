import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { GalleryGrid } from "@/components/GalleryGrid";

import img7 from "@/Assets/7.jpeg";
import img8 from "@/Assets/8.jpeg";
import img9 from "@/Assets/9.jpeg";
import img10 from "@/Assets/10.jpeg";
import img11 from "@/Assets/11.jpeg";
import img12 from "@/Assets/12.jpeg";
import img13 from "@/Assets/13.jpeg";
import img14 from "@/Assets/14.jpeg";
import img15 from "@/Assets/15.jpeg";
import img16 from "@/Assets/16.jpeg";
import img17 from "@/Assets/17.jpeg";
import img18 from "@/Assets/18.jpeg";
import img19 from "@/Assets/19.jpeg";
import img20 from "@/Assets/20.jpeg";
import img21 from "@/Assets/21.jpeg";
import img22 from "@/Assets/22.jpeg";

const allPhotos = [
  { src: img7 },
  { src: img8 },
  { src: img9 },
  { src: img10 },
  { src: img11 },
  { src: img12 },
  { src: img13 },
  { src: img14 },
  { src: img15 },
  { src: img16 },
  { src: img17 },
  { src: img18 },
  { src: img19 },
  { src: img20 },
  { src: img21 },
  { src: img22 },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero 
        title="Visual Journey" 
        subtitle="Explore the elegance and beauty of Saroj Sushma through our lens"
        image={img9}
        height="h-[50vh]"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
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
