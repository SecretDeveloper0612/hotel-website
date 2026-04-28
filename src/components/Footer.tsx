"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 border-b border-slate-800 pb-20">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 bg-secondary flex items-center justify-center font-bold text-primary text-lg">SS</div>
               <h2 className="font-heading text-xl font-bold uppercase tracking-tight">Saroj Sushma</h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              Providing professional hospitality and premium accommodation in Bageshwar. Dedicated to excellence in guest service for over 15 years.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <Link key={i} href="#" className="text-slate-500 hover:text-secondary transition-colors">
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="space-y-6">
            <h3 className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-secondary">Hotel Details</h3>
            <ul className="space-y-3">
              {["About Us", "Our Rooms", "Restaurant", "Banquet Hall"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(" ", "-")}`} className="text-slate-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest leading-loose">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h3 className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-secondary">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-slate-400 text-xs font-medium leading-relaxed">Tehsil Road, Kaphalkhet, Bageshwar, Uttarakhand 263642, India</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-slate-400 text-xs font-medium">+91 00000 00000</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-slate-400 text-xs font-medium">info@sarojsushma.com</span>
              </li>
            </ul>
          </div>

          {/* Corporate Column */}
          <div className="space-y-6">
            <h3 className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-secondary">Newsletter</h3>
            <p className="text-slate-400 text-xs font-light">Join our professional mailing list for corporate updates and seasonal offers.</p>
            <div className="flex">
                <input 
                  type="email" 
                  placeholder="Business Email" 
                  className="w-full bg-slate-800 border-none px-4 py-3 text-xs focus:ring-1 focus:ring-secondary text-white"
                />
                <button className="bg-secondary text-primary px-4 font-bold text-xs uppercase">Join</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-500">
          <p>© 2024 Saroj Sushma Hotel. All Professional Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
