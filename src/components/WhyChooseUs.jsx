import React from 'react'
import { motion } from 'framer-motion'
import { Tv, Zap, ShieldCheck, HeartHandshake, Eye, Award } from 'lucide-react'
import { WHY_CHOOSE_US, BUSINESS_INFO } from '../data/framesData'

const WHY_ICONS = [Tv, Zap, HeartHandshake, Award]

export default function WhyChooseUs({ onOpenEnquiry }) {
  return (
    <section id="why-us" className="section bg-gradient-to-b from-royal-950 via-royal-900 to-royal-950 relative overflow-hidden">
      {/* Radial lighting */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-royal-600/20 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="section-title">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-850 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-wider mb-3">
            The MK Digi Frames Difference
          </div>
          <h2>Why Devotees Choose MK Digi Frames</h2>
          <p>
            Experience superior visual fidelity, long-lasting hardware, and thoughtful devotional features crafted right here in Bengaluru.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = WHY_ICONS[index] || ShieldCheck
            return (
              <motion.div
                key={index}
                className="card-royal p-6 flex flex-col justify-between border-gold/25 hover:border-gold/60 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-royal-800 text-gold border border-gold/30 group-hover:scale-110 group-hover:shadow-gold-glow transition-all">
                      <Icon size={24} />
                    </div>
                    <span className="text-xs font-serif font-bold text-gold px-2.5 py-1 rounded-full bg-royal-950 border border-gold/20">
                      {item.stat}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-white mb-2 group-hover:text-gold-light transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gold/15 flex items-center gap-1 text-[11px] text-gold font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
                  Premium Quality Standard
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Highlight Trust Bar */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-royal-900 via-royal-850 to-royal-900 border border-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-serif font-bold text-lg text-white">Experience Live Darshan at Our Nagavara Showroom</h4>
            <p className="text-xs text-slate-300 mt-0.5">Visit us to see various screen sizes, wood carvings, and audio clarity in person.</p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href={`tel:+91${BUSINESS_INFO.primaryPhone}`}
              className="btn-primary text-xs py-2.5 px-5"
            >
              Call Us: {BUSINESS_INFO.primaryPhone}
            </a>
            <a
              href="#location"
              className="btn-secondary text-xs py-2.5 px-5"
            >
              Store Location
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
