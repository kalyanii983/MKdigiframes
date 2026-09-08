import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Navigation, Clock, Phone, ExternalLink, Compass } from 'lucide-react'
import { BUSINESS_INFO } from '../data/framesData'

export default function LocationMapSection() {
  return (
    <section id="location" className="section bg-gradient-to-b from-royal-950 via-royal-900 to-royal-950 relative overflow-hidden">
      {/* Background illumination */}
      <div className="absolute -bottom-20 right-0 w-96 h-96 bg-gold/10 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="section-title">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-850 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-wider mb-3">
            Store Location & Showroom
          </div>
          <h2>Visit Our Bengaluru Showroom</h2>
          <p>
            Experience the divine visual clarity in person. See all digital frame dimensions, carved wood and metallic gold borders, and audio sound quality before purchasing.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Left Column: Address & Store Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="card-royal p-6 sm:p-8 border-gold/30 space-y-6 flex-1">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gold to-amber-700 text-royal-950 flex items-center justify-center font-bold text-xl shadow-gold-glow">
                  📍
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-white">MK Digi Frames</h3>
                  <p className="text-xs text-gold font-medium">Nagavara, Bengaluru</p>
                </div>
              </div>

              {/* Exact Address */}
              <div className="space-y-4 pt-2 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-gold flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-0.5">
                      Store Address
                    </div>
                    <div className="text-white font-medium leading-relaxed">
                      #111/12, TCH College Road,<br />
                      Nagavara, Bengaluru – 560045,<br />
                      Karnataka, India
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Compass size={20} className="text-gold flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-0.5">
                      Landmark
                    </div>
                    <div className="text-slate-300">
                      TCH College Road, Nagavara (Near Manyata Tech Park / Outer Ring Road)
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={20} className="text-gold flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-0.5">
                      Showroom Hours
                    </div>
                    <div className="text-slate-300">
                      Monday to Sunday: 9:00 AM – 9:00 PM<br />
                      <span className="text-emerald-400 font-medium text-xs">Open all 7 days for live demos</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={20} className="text-gold flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-0.5">
                      Call Before Visiting
                    </div>
                    <div className="flex flex-col gap-1">
                      <a href={`tel:+91${BUSINESS_INFO.primaryPhone}`} className="text-gold font-semibold hover:underline">
                        +91 {BUSINESS_INFO.primaryPhone}
                      </a>
                      <a href={`tel:+91${BUSINESS_INFO.secondaryPhone}`} className="text-gold font-semibold hover:underline">
                        +91 {BUSINESS_INFO.secondaryPhone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Get Directions Button */}
              <div className="pt-4 border-t border-gold/20">
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-xs py-3.5 flex items-center justify-center gap-2"
                >
                  <Navigation size={16} />
                  Get Google Maps Directions
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed */}
          <div className="lg:col-span-7">
            <div className="card-royal p-2 sm:p-3 border-gold/40 h-full min-h-[380px] lg:min-h-[460px] flex flex-col rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative w-full h-full min-h-[360px] rounded-2xl overflow-hidden bg-royal-950 border border-gold/20">
                <iframe
                  title="MK Digi Frames Location - Nagavara Bengaluru"
                  src="https://maps.google.com/maps?q=111/12+TCH+College+Road,+Nagavara,+Bengaluru,+Karnataka+560045&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '380px', filter: 'contrast(1.05) saturate(1.1)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Map Floating Indicator Overlay */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-royal-950/95 backdrop-blur-md p-3.5 rounded-xl border border-gold/30 shadow-xl text-xs space-y-1">
                  <div className="flex items-center gap-1.5 text-gold font-bold">
                    <MapPin size={14} /> MK Digi Frames Showroom
                  </div>
                  <div className="text-slate-300 text-[11px] leading-tight">
                    #111/12, TCH College Road, Nagavara, Bengaluru – 560045
                  </div>
                  <a
                    href={BUSINESS_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[11px] text-gold-light hover:underline font-semibold pt-1"
                  >
                    Open in Google Maps App →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
