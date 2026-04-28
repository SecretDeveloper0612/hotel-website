import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero 
        title="Get in Touch" 
        subtitle="We're here to assist you with your bookings and inquiries"
        image="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80&w=2000"
        height="h-[50vh]"
      />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div className="space-y-12">
               <div className="space-y-4">
                  <p className="text-gold font-bold uppercase tracking-[0.2em] text-sm">Contact Us</p>
                  <h2 className="font-heading text-4xl font-bold text-foreground">Reach Out to Us</h2>
                  <p className="text-gray-600">Have questions about our rooms, restaurant, or banquet services? Fill out the form or use our contact details below. We look forward to hearing from you.</p>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-6">
                     <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-beige rounded-full flex items-center justify-center shrink-0">
                           <MapPin className="text-maroon w-6 h-6" />
                        </div>
                        <div>
                           <h4 className="font-bold text-lg">Address</h4>
                           <p className="text-sm text-gray-500">Tehsil Road, Kaphalkhet, Bageshwar, Uttarakhand 263642, India</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-beige rounded-full flex items-center justify-center shrink-0">
                           <Phone className="text-maroon w-6 h-6" />
                        </div>
                        <div>
                           <h4 className="font-bold text-lg">Phone</h4>
                           <p className="text-sm text-gray-500">+91 00000 00000</p>
                           <p className="text-sm text-gray-500">+91 11111 11111</p>
                        </div>
                     </div>
                  </div>

                  <div className="space-y-6">
                     <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-beige rounded-full flex items-center justify-center shrink-0">
                           <Mail className="text-maroon w-6 h-6" />
                        </div>
                        <div>
                           <h4 className="font-bold text-lg">Email</h4>
                           <p className="text-sm text-gray-500">info@sarojsushma.com</p>
                           <p className="text-sm text-gray-500">booking@sarojsushma.com</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-beige rounded-full flex items-center justify-center shrink-0">
                           <Clock className="text-maroon w-6 h-6" />
                        </div>
                        <div>
                           <h4 className="font-bold text-lg">Reception</h4>
                           <p className="text-sm text-gray-500">Available 24/7</p>
                           <p className="text-sm text-gray-500">Check-in: 12:00 PM</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Map Placeholder */}
               <div className="aspect-video w-full bg-gray-100 rounded-2xl overflow-hidden relative border border-gray-200">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                     <MapPin className="w-12 h-12 mb-2" />
                     <p className="font-medium">Google Maps Integration Here</p>
                  </div>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.913!2d79.77!3d29.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDUxJzAwLjAiTiA3OcKwNDYnMTIuMCJF!5e0!3m2!1sen!2sin!4v123456789" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    className="opacity-60"
                  ></iframe>
               </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 h-fit">
               <h3 className="font-heading text-3xl font-bold mb-8">Send Us a Message</h3>
               <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Full Name</label>
                        <Input placeholder="John Doe" className="bg-gray-50 border-none rounded-none focus-visible:ring-gold" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Phone Number</label>
                        <Input placeholder="+91 00000 00000" className="bg-gray-50 border-none rounded-none focus-visible:ring-gold" />
                     </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-sm font-bold text-gray-700">Email Address</label>
                     <Input type="email" placeholder="john@example.com" className="bg-gray-50 border-none rounded-none focus-visible:ring-gold" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-sm font-bold text-gray-700">Subject</label>
                     <Input placeholder="Room Inquiry" className="bg-gray-50 border-none rounded-none focus-visible:ring-gold" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-sm font-bold text-gray-700">Message</label>
                     <Textarea placeholder="How can we help you?" rows={5} className="bg-gray-50 border-none rounded-none focus-visible:ring-gold resize-none" />
                  </div>
                  <Button className="w-full bg-maroon hover:bg-maroon/90 text-white font-bold py-7 rounded-none text-lg">
                     <Send className="w-5 h-5 mr-2" /> Send Message
                  </Button>
               </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
