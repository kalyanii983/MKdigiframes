import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Heart, Sparkles, MapPin, CheckCircle, Flame } from 'lucide-react'
import { BUSINESS_INFO } from '../data/framesData'

export default function AboutSection({ onOpenEnquiry }) {
  const highlights = [
    {
      title: 'Devotion Meets Modern Tech',
      desc: 'We combine traditional sacred iconography with cutting-edge IPS digital displays for crisp, life-like darshan 24 hours a day.',
      icon: Sparkles,
    },
    {
      title: 'Handcrafted Premium Framing',
      desc: 'Every frame is hand-assembled using genuine teakwood, rosewood, or antique gold leaf bezels to harmoniously complement your pooja altar.',
      icon: Heart,
    },
    {
      title: '100% Quality & 1-Year Warranty',
      desc: 'Engineered for safe, low-power continuous operation with thorough quality testing before delivery across Bengaluru and Karnataka.',
      icon: ShieldCheck,
    },
  ]

  return (
    <section id="about" className="section section-divine-mid relative overflow-hidden">
      {/* Sacred pattern overlay */}
      <div className="absolute inset-0 sacred-pattern opacity-30 pointer-events-none" />

      {/* Ambient orbs */}
      <div className="ambient-orb w-[350px] h-[350px] top-1/2 -left-20 bg-gold/8" style={{ animationDuration: '10s' }} />
      <div className="ambient-orb w-[300px] h-[300px] top-10 right-10 bg-royal-600/30" style={{ animationDuration: '8s', animationDelay: '2s' }} />
      <div className="ambient-orb w-[200px] h-[200px] bottom-10 left-1/2 bg-saffron/10" style={{ animationDuration: '12s', animationDelay: '5s' }} />

      {/* Floating particles */}
      <div className="divine-particle w-1.5 h-1.5 bg-gold/50 top-[20%] left-[10%]" style={{ animationDuration: '8s' }} />
      <div className="divine-particle w-1 h-1 bg-saffron/50 top-[60%] right-[12%]" style={{ animationDuration: '10s', animationDelay: '3s' }} />
      <div className="divine-particle w-2 h-2 bg-gold/30 bottom-[20%] left-[30%]" style={{ animationDuration: '9s', animationDelay: '1s' }} />

      {/* Top and bottom divine lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-royal-600/40 to-transparent" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="section-title">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-850 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-wider mb-3">
            About MK Digi Frames
          </div>
          <h2>Divinity in Every Frame</h2>
          <p>
            Rooted in devotion, crafted with precision. Discover how MK Digi Frames brings timeless spiritual grace into modern homes.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: About Text & Story */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="heading-md text-white">
              Bringing Sacred Temple Darshan Straight into Your Sacred Space
            </h3>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              Located at <strong className="text-gold font-medium">Nagavara, Bengaluru</strong>, <strong className="text-white">MK Digi Frames</strong> was born from a deep devotion to make sacred imagery accessible, dynamic, and everlasting. While traditional printed frames fade or collect dust over the years, our modern digital photo frames display radiant, high-definition depictions of beloved Hindu deities that never lose their brilliance.
            </p>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              Whether you wish to wake up to the auspicious sight of <span className="text-gold-light font-medium">Lord Ganesha</span>, seek meditative peace with <span className="text-gold-light font-medium">Mahadev Shiva</span>, invite abundance through <span className="text-gold-light font-medium">Goddess Lakshmi</span>, or rotate daily alankaram of <span className="text-gold-light font-medium">Tirupati Balaji</span>, MK Digi Frames offers complete personalization for your home mandir, living room, office, or spiritual gift.
            </p>

            {/* Checkpoints */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {[
                'Showroom at TCH College Road, Nagavara',
                'Multiple display sizes from 10.1" to 43"',
                'Preloaded with 100+ HD Deities & Mantras',
                'Local Bengaluru doorstep setup assistance',
                'Dedicated customer care & 1-year warranty',
                'Ideal for Housewarming & Wedding Gifting',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle size={16} className="text-gold flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={() => onOpenEnquiry && onOpenEnquiry(null)}
                className="btn-primary w-full sm:w-auto justify-center text-sm py-3 px-6"
              >
                Inquire With Our Specialists
              </button>

              <a
                href="#contact"
                className="btn-secondary w-full sm:w-auto justify-center text-sm py-3 px-6"
              >
                <MapPin size={16} className="text-gold" />
                Visit Nagavara Store
              </a>
            </div>
          </motion.div>

          {/* Right: Feature Value Cards */}
          <motion.div
            className="lg:col-span-5 space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {highlights.map((item, index) => {
              const Icon = item.icon

              // Each card gets a unique divine color identity
              const cardStyles = [
                {
                  // Card 1: Royal Purple → Gold (Tech & Devotion)
                  bg: 'from-royal-800/70 via-royal-850/80 to-royal-900/90',
                  borderIdle: 'border-royal-600/50',
                  borderHover: 'hover:border-gold/70',
                  iconBg: 'from-gold/30 via-amber-500/20 to-royal-700/80',
                  iconBorder: 'border-gold/50',
                  iconColor: 'text-gold',
                  topBar: 'from-royal-600 via-gold to-royal-600',
                  glow: '0 0 30px rgba(72,43,166,0.4), 0 0 60px rgba(212,175,55,0.15)',
                  glowHover: '0 0 50px rgba(212,175,55,0.3), 0 0 100px rgba(72,43,166,0.2)',
                },
                {
                  // Card 2: Saffron → Gold (Handcrafted)
                  bg: 'from-amber-950/60 via-royal-900/85 to-royal-850/90',
                  borderIdle: 'border-saffron/30',
                  borderHover: 'hover:border-gold/70',
                  iconBg: 'from-saffron/30 via-amber-600/20 to-royal-800/80',
                  iconBorder: 'border-saffron/50',
                  iconColor: 'text-saffron-light',
                  topBar: 'from-saffron/80 via-gold to-saffron/80',
                  glow: '0 0 30px rgba(255,119,34,0.2), 0 0 60px rgba(212,175,55,0.1)',
                  glowHover: '0 0 50px rgba(255,119,34,0.35), 0 0 100px rgba(212,175,55,0.2)',
                },
                {
                  // Card 3: Emerald → Gold (Quality & Trust)
                  bg: 'from-emerald-950/50 via-royal-900/85 to-royal-850/90',
                  borderIdle: 'border-emerald-700/40',
                  borderHover: 'hover:border-gold/70',
                  iconBg: 'from-emerald-600/30 via-teal-700/20 to-royal-800/80',
                  iconBorder: 'border-emerald-500/50',
                  iconColor: 'text-emerald-400',
                  topBar: 'from-emerald-600/80 via-gold to-emerald-600/80',
                  glow: '0 0 30px rgba(16,185,129,0.15), 0 0 60px rgba(212,175,55,0.1)',
                  glowHover: '0 0 50px rgba(16,185,129,0.25), 0 0 100px rgba(212,175,55,0.2)',
                },
              ]
              const s = cardStyles[index]

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  whileHover={{ y: -4 }}
                  className={`relative group rounded-2xl border ${s.borderIdle} ${s.borderHover} transition-all duration-500 overflow-hidden cursor-default`}
                  style={{ boxShadow: s.glow }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = s.glowHover}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = s.glow}
                >
                  {/* Gradient card background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${s.bg}`} />

                  {/* Sacred dot texture inside card */}
                  <div
                    className="absolute inset-0 opacity-[0.04] pointer-events-none"
                    style={{
                      backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                    }}
                  />

                  {/* Animated top accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${s.topBar} opacity-80 group-hover:opacity-100 transition-opacity duration-300`} />

                  {/* Shimmer sweep on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: 'linear-gradient(105deg, transparent 40%, rgba(212,175,55,0.06) 50%, transparent 60%)',
                    }}
                  />

                  {/* Card content */}
                  <div className="relative z-10 p-5 sm:p-6 flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                    {/* Icon badge with glow */}
                    <div
                      className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${s.iconBg} border ${s.iconBorder} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      style={{ boxShadow: 'inset 0 0 12px rgba(0,0,0,0.5)' }}
                    >
                      <Icon size={24} className={`sm:w-[26px] sm:h-[26px] ${s.iconColor}`} />
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif font-bold text-base sm:text-lg text-white mb-2 group-hover:text-gold-light transition-colors duration-300 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Bottom right decorative OM / divine accent */}
                  <div className="absolute bottom-3 right-4 text-2xl opacity-[0.07] group-hover:opacity-[0.12] transition-opacity duration-500 pointer-events-none select-none font-serif">
                    🕉
                  </div>
                </motion.div>
              )
            })}

            {/* Address callout box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative rounded-2xl border border-gold/35 hover:border-gold/65 transition-all duration-300 overflow-hidden group"
              style={{ boxShadow: '0 0 25px rgba(212,175,55,0.12)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-royal-850/90 via-royal-800/80 to-royal-850/90" />
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
              <div className="relative z-10 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs gap-4 sm:gap-3">
                <div>
                  <div className="text-gold font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5 mb-1.5 sm:mb-1">
                    <MapPin size={12} className="text-gold" /> Showroom Address
                  </div>
                  <div className="text-slate-200 font-medium leading-relaxed sm:leading-normal">{BUSINESS_INFO.address.full}</div>
                </div>
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto justify-center flex-shrink-0 px-4 py-2.5 sm:py-2 rounded-xl bg-gradient-to-r from-gold/20 to-gold/10 text-gold hover:from-gold hover:to-gold-dark hover:text-royal-950 font-semibold transition-all duration-300 border border-gold/40 hover:border-gold whitespace-nowrap"
                >
                  Directions →
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Ornament divider */}
        <div className="ornament-divider mt-16" />
      </div>
    </section>
  )
}
