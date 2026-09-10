import React from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin, Clock } from 'lucide-react'
import { BUSINESS_INFO } from '../data/framesData'

export default function Footer({ onOpenEnquiry }) {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId)
    if (element) {
      const navOffset = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer className="bg-royal-950 text-slate-300 border-t border-gold/30 relative overflow-hidden">
      {/* Top golden accent shimmer line */}
      <div className="h-1 bg-gradient-to-r from-gold/0 via-gold to-gold/0" />

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Col 1: Brand & Tagline (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl border border-gold/60 shadow-gold-glow overflow-hidden flex-shrink-0">
                <img
                  src="/images/logo.jpeg"
                  alt="MK Digi Frames Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-white">
                  MK <span className="gold-gradient-text">Digi Frames</span>
                </h3>
                <p className="text-xs text-gold font-medium tracking-wider uppercase">
                  Divinity in Every Frame
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Crafting modern, ultra-high-definition digital photo frames featuring Hindu Gods and Goddesses. Designed to enrich your pooja room, home, and workspace with timeless spiritual devotion.
            </p>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-white text-base border-b border-gold/30 pb-2">
              Navigation
            </h4>
            <div className="space-y-2 text-xs sm:text-sm">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About MK Digi Frames', href: '#about' },
                { name: 'Digital Frames', href: '#frames' },
                { name: 'What We Offer', href: '#services' },
                { name: 'Photo Gallery', href: '#gallery' },
                { name: 'Customer Enquiry', href: '#enquiry' },
                { name: 'Contact Us', href: '#contact' },
              ].map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-slate-400 hover:text-gold transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Deity Collections & Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-white text-base border-b border-gold/30 pb-2">
              Deities & Offerings
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-slate-400">
              <p className="hover:text-gold transition-colors cursor-pointer" onClick={() => scrollToSection('#frames')}>
                • Lord Ganesha Digital Frames
              </p>
              <p className="hover:text-gold transition-colors cursor-pointer" onClick={() => scrollToSection('#frames')}>
                • Lord Shiva Cosmic Darshan
              </p>
              <p className="hover:text-gold transition-colors cursor-pointer" onClick={() => scrollToSection('#frames')}>
                • Goddess Lakshmi Prosperity
              </p>
              <p className="hover:text-gold transition-colors cursor-pointer" onClick={() => scrollToSection('#frames')}>
                • Radha Krishna Divine Flute
              </p>
              <p className="hover:text-gold transition-colors cursor-pointer" onClick={() => scrollToSection('#frames')}>
                • Lord Venkateswara Balaji
              </p>
              <p className="hover:text-gold transition-colors cursor-pointer" onClick={() => scrollToSection('#frames')}>
                • Hanuman Ji & Durga Maa
              </p>
              <p className="hover:text-gold transition-colors cursor-pointer" onClick={() => scrollToSection('#services')}>
                • Custom Built-in Pooja Mandir Setups
              </p>
              <p className="hover:text-gold transition-colors cursor-pointer" onClick={() => scrollToSection('#services')}>
                • Spiritual Wedding & Griha Pravesh Gifting
              </p>
            </div>
          </div>

          {/* Col 4: Showroom & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-white text-base border-b border-gold/30 pb-2">
              Showroom & Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-slate-300 hover:text-gold transition-colors group"
                title="Get Google Maps directions"
              >
                <MapPin size={16} className="text-gold flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="leading-relaxed underline-offset-2 group-hover:underline">
                  {BUSINESS_INFO.address.full}
                </span>
              </a>

              <div className="flex items-start gap-2.5 text-slate-300">
                <Phone size={16} className="text-gold flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href={`tel:+91${BUSINESS_INFO.primaryPhone}`} className="hover:text-gold transition-colors font-medium">
                    +91 {BUSINESS_INFO.primaryPhone}
                  </a>
                  <a href={`tel:+91${BUSINESS_INFO.secondaryPhone}`} className="hover:text-gold transition-colors font-medium">
                    +91 {BUSINESS_INFO.secondaryPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-slate-300">
                <Clock size={16} className="text-gold flex-shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.timings}</span>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry(null)}
                  className="btn-primary w-full text-xs py-2.5"
                >
                  Request Callback
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-gold/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} <strong className="text-white">MK Digi Frames</strong>. All Rights Reserved.
          </div>
          <div className="flex items-center gap-1.5 text-gold-light font-serif">
            <span>Divinity in Every Frame</span>
            <span>•</span>
            <span>Bengaluru</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
