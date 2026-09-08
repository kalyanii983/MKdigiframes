import React from 'react'
import { motion } from 'framer-motion'
import { Maximize2, Layers, Frame, Volume2, Gift, ShieldCheck, ArrowRight } from 'lucide-react'
import { SERVICES, BUSINESS_INFO } from '../data/framesData'

const ICON_MAP = {
  Maximize2,
  Layers,
  Frame,
  Volume2,
  Gift,
  ShieldCheck,
}

export default function ServicesSection({ onOpenEnquiry }) {
  return (
    <section id="services" className="section section-divine-mid relative overflow-hidden">
      {/* Sacred pattern overlay */}
      <div className="absolute inset-0 sacred-pattern opacity-30 pointer-events-none" />

      {/* Ambient orbs */}
      <div className="ambient-orb w-[400px] h-[400px] -top-32 right-1/4 bg-gold/10" style={{ animationDuration: '9s' }} />
      <div className="ambient-orb w-[300px] h-[300px] bottom-0 left-10 bg-royal-600/30" style={{ animationDuration: '11s', animationDelay: '3s' }} />
      <div className="ambient-orb w-[250px] h-[250px] top-1/2 right-10 bg-saffron/8" style={{ animationDuration: '8s', animationDelay: '6s' }} />

      {/* Floating particles */}
      <div className="divine-particle w-1.5 h-1.5 bg-gold/50 top-[15%] left-[5%]" style={{ animationDuration: '8s' }} />
      <div className="divine-particle w-1 h-1 bg-saffron/60 top-[65%] right-[10%]" style={{ animationDuration: '7s', animationDelay: '4s' }} />
      <div className="divine-particle w-2 h-2 bg-gold/40 bottom-[20%] left-[45%]" style={{ animationDuration: '10s', animationDelay: '2s' }} />

      {/* Divine separator lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-royal-600/50 to-transparent" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="section-title">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-850 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-wider mb-3">
            What We Offer
          </div>
          <h2>Our Services & Custom Solutions</h2>
          <p>
            From tailor-made pooja room dimensions to multi-deity slideshow playlists, discover how MK Digi Frames caters to your spiritual requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.icon] || Frame
            return (
              <motion.div
                key={service.id}
                className="card-royal p-7 flex flex-col justify-between group border-gold/25 hover:border-gold/60"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3.5 rounded-2xl bg-gradient-to-br from-gold/20 via-royal-700 to-royal-800 text-gold border border-gold/30 group-hover:scale-110 group-hover:shadow-gold-glow transition-all">
                      <Icon size={26} />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-royal-850 text-gold-light border border-gold/20">
                      {service.highlight}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-white mb-2.5 group-hover:text-gold-light transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-gold/15 flex items-center justify-between">
                  <button
                    onClick={() => onOpenEnquiry && onOpenEnquiry({ name: service.title })}
                    className="text-xs font-semibold text-gold group-hover:text-gold-light flex items-center gap-1.5 transition-colors"
                  >
                    Enquire for this service <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Process Bar */}
        <div className="mt-16 card-royal p-8 border-gold/30 bg-gradient-to-r from-royal-900 via-royal-850 to-royal-900">
          <div className="text-center mb-8">
            <h3 className="font-serif font-bold text-2xl text-white">How It Works in 4 Simple Steps</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">From order to divine darshan in your Bengaluru home</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Choose Your Deity', desc: 'Select from our preloaded collection of 100+ Hindu Gods & Goddesses or provide your family photos.' },
              { step: '02', title: 'Pick Size & Finish', desc: 'Select screen size from 10.1" to 43" and frame finish (Teak, Gold leaf, Rosewood, Matte Black).' },
              { step: '03', title: 'Custom Setup & Audio', desc: 'We pre-program your customized daily slideshow, stotras, and auto-timers to your preference.' },
              { step: '04', title: 'Doorstep Delivery', desc: 'Safe delivery and wall-mounting installation support across Bengaluru with 1-year warranty.' },
            ].map((step, idx) => (
              <div key={idx} className="relative bg-royal-950/70 p-5 rounded-2xl border border-gold/20 text-center sm:text-left">
                <span className="font-serif font-black text-3xl text-gold/30 block mb-2">{step.step}</span>
                <h4 className="font-serif font-bold text-white text-base mb-1.5">{step.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
