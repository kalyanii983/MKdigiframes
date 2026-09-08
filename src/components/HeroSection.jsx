import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageCircle, Sparkles, ShieldCheck, Flame, ChevronRight, Eye, RefreshCw } from 'lucide-react'
import { BUSINESS_INFO, FEATURED_FRAMES } from '../data/framesData'

export default function HeroSection({ onOpenEnquiry }) {
  const [activeFrameIndex, setActiveFrameIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  // Auto cycle deities every 4 seconds
  useEffect(() => {
    if (!isAutoPlay) return
    const timer = setInterval(() => {
      setActiveFrameIndex((prev) => (prev + 1) % FEATURED_FRAMES.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [isAutoPlay])

  const currentDeity = FEATURED_FRAMES[activeFrameIndex]

  const handleSelectDeity = (idx) => {
    setActiveFrameIndex(idx)
    setIsAutoPlay(false) // pause auto-play on manual interaction
  }

  return (
    <section
      id="home"
      className="relative min-h-[94vh] flex items-center justify-center overflow-hidden py-12 sm:py-20"
      style={{
        background: `
          radial-gradient(ellipse at 15% 30%, rgba(72,43,166,0.35) 0%, transparent 55%),
          radial-gradient(ellipse at 85% 70%, rgba(212,175,55,0.12) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 90%, rgba(255,119,34,0.12) 0%, transparent 50%),
          radial-gradient(ellipse at 70% 10%, rgba(72,43,166,0.2) 0%, transparent 40%),
          linear-gradient(180deg, #08051a 0%, #0d0826 40%, #130d33 70%, #0d0826 100%)
        `
      }}
    >
      {/* ── Sacred Background Layers ──────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Sacred dot-mandala overlay */}
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage: `radial-gradient(circle, #D4AF37 1px, transparent 1px), radial-gradient(circle, #D4AF37 0.5px, transparent 0.5px)`,
            backgroundSize: '45px 45px, 90px 90px',
            backgroundPosition: '0 0, 22px 22px',
          }}
        />

        {/* Large ambient orbs */}
        <div className="ambient-orb w-[500px] h-[500px] -top-40 -left-40 bg-royal-600/35" style={{ animationDuration: '8s' }} />
        <div className="ambient-orb w-[400px] h-[400px] top-1/3 -right-40 bg-gold/12" style={{ animationDuration: '10s', animationDelay: '3s' }} />
        <div className="ambient-orb w-[350px] h-[350px] -bottom-32 left-1/3 bg-saffron/14" style={{ animationDuration: '12s', animationDelay: '6s' }} />
        <div className="ambient-orb w-[250px] h-[250px] top-20 right-1/4 bg-royal-500/25" style={{ animationDuration: '7s', animationDelay: '1s' }} />

        {/* Floating sacred gold particles */}
        <div className="divine-particle w-2 h-2 bg-gold/60 top-[15%] left-[8%]" style={{ animationDuration: '7s' }} />
        <div className="divine-particle w-1.5 h-1.5 bg-saffron/50 top-[30%] left-[15%]" style={{ animationDuration: '9s', animationDelay: '2s' }} />
        <div className="divine-particle w-1 h-1 bg-gold/80 top-[60%] left-[5%]" style={{ animationDuration: '11s', animationDelay: '4s' }} />
        <div className="divine-particle w-2 h-2 bg-gold/40 top-[10%] right-[10%]" style={{ animationDuration: '8s', animationDelay: '1s' }} />
        <div className="divine-particle w-1.5 h-1.5 bg-saffron/60 top-[45%] right-[8%]" style={{ animationDuration: '6s', animationDelay: '3s' }} />
        <div className="divine-particle w-1 h-1 bg-gold/70 top-[75%] right-[18%]" style={{ animationDuration: '10s', animationDelay: '5s' }} />
        <div className="divine-particle w-2.5 h-2.5 bg-gold/30 top-[50%] left-[50%]" style={{ animationDuration: '14s', animationDelay: '2s' }} />
        <div className="divine-particle w-1 h-1 bg-saffron/40 top-[25%] left-[40%]" style={{ animationDuration: '8s', animationDelay: '7s' }} />

        {/* Horizontal divine light beam at top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        {/* Bottom divine separator */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-royal-600/50 to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headline & Value Proposition */}
          <motion.div
            className="lg:col-span-6 space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Tagline Pill */}
            <motion.div
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-royal-850/90 border border-gold/30 shadow-gold-glow/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles size={14} className="text-gold animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-gold-light tracking-wide font-serif">
                Divinity in Every Frame
              </span>
              <span className="text-royal-600">•</span>
              <span className="text-xs text-slate-300 font-sans">Nagavara, Bengaluru</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="heading-xl text-white leading-tight">
              Bring Sacred <span className="gold-gradient-text">Divine Darshan</span> to Your Home & Pooja Room
            </h1>

            {/* Subtext */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Welcome to <strong className="text-gold font-semibold">MK Digi Frames</strong>. We craft modern, ultra-vivid digital photo frames displaying Hindu Gods and Goddesses with timeless devotion, crystal-clear IPS resolution, and handcrafted wood & gold borders.
            </p>

            {/* Key Value Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
              <div className="bg-royal-900/80 border border-gold/20 rounded-xl p-2.5 text-center">
                <div className="text-gold font-bold text-xs sm:text-sm">Full HD / 4K</div>
                <div className="text-[10px] text-slate-400">IPS Wide Angle</div>
              </div>
              <div className="bg-royal-900/80 border border-gold/20 rounded-xl p-2.5 text-center">
                <div className="text-gold font-bold text-xs sm:text-sm">Multi-Deity</div>
                <div className="text-[10px] text-slate-400">Auto Slideshow</div>
              </div>
              <div className="bg-royal-900/80 border border-gold/20 rounded-xl p-2.5 text-center">
                <div className="text-gold font-bold text-xs sm:text-sm">24/7 Run</div>
                <div className="text-[10px] text-slate-400">Low Power 12W</div>
              </div>
              <div className="bg-royal-900/80 border border-gold/20 rounded-xl p-2.5 text-center">
                <div className="text-gold font-bold text-xs sm:text-sm">Custom Sizes</div>
                <div className="text-[10px] text-slate-400">10.1" to 43"</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start pt-2">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 transition-all active:scale-95"
              >
                <MessageCircle size={18} />
                WhatsApp Enquiry
              </a>

              <a
                href="#frames"
                className="btn-secondary text-xs sm:text-sm py-3 px-6 flex items-center justify-center gap-2"
              >
                Explore Collection
                <ChevronRight size={16} />
              </a>
            </div>

            {/* Phone Hotlines */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-slate-300">
              <span className="text-gold font-semibold flex items-center gap-1.5">
                <Flame size={14} className="text-saffron" /> Direct Call:
              </span>
              <a
                href={`tel:+91${BUSINESS_INFO.primaryPhone}`}
                className="hover:text-gold flex items-center gap-1 bg-royal-850 px-2.5 py-1 rounded-lg border border-gold/20 font-semibold transition-colors"
              >
                <Phone size={11} className="text-gold" /> +91 {BUSINESS_INFO.primaryPhone}
              </a>
              <a
                href={`tel:+91${BUSINESS_INFO.secondaryPhone}`}
                className="hover:text-gold flex items-center gap-1 bg-royal-850 px-2.5 py-1 rounded-lg border border-gold/20 font-semibold transition-colors"
              >
                <Phone size={11} className="text-gold" /> +91 {BUSINESS_INFO.secondaryPhone}
              </a>
            </div>
          </motion.div>

          {/* Right Column: Realistic Digital Frame Hardware Showcase with Real Images */}
          <motion.div
            className="lg:col-span-6 flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md">
              {/* Outer Ambient Glow of the Frame */}
              <div className="absolute -inset-2 bg-gradient-to-r from-gold/30 via-royal-500/40 to-saffron/30 rounded-3xl blur-xl opacity-75 animate-pulse" />

              {/* Digital Frame Hardware Simulation */}
              <div className="digital-frame-bezel-gold relative z-10 shadow-2xl">
                {/* Hardware Bezel Inner Matte */}
                <div className="bg-royal-950 rounded-xl p-2.5 sm:p-3 border-2 border-gold-dark/70 shadow-2xl">
                  {/* Digital Display Screen */}
                  <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-gradient-to-br from-royal-950 to-black border border-gold/40 flex flex-col justify-between shadow-inner">
                    {/* Screen Top Status Bar */}
                    <div className="flex justify-between items-center px-3 pt-2 text-[10px] text-gold/90 uppercase tracking-widest z-10 bg-gradient-to-b from-black/80 to-transparent">
                      <span className="flex items-center gap-1.5 font-semibold">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        Live Digital Darshan
                      </span>
                      <span className="bg-gold/20 px-2 py-0.5 rounded text-[9px] border border-gold/30">
                        IPS 4K HDR
                      </span>
                    </div>

                    {/* Changing Deity Real Photo Display */}
                    <div className="relative flex-1 flex items-center justify-center p-2 sm:p-3 overflow-hidden">
                      {/* Golden radial halo glow behind deity */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-48 h-48 rounded-full bg-gradient-radial from-gold/40 via-saffron/20 to-transparent blur-2xl animate-pulse" />
                      </div>
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentDeity.id}
                          initial={{ opacity: 0, scale: 0.94 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.05 }}
                          transition={{ duration: 0.55 }}
                          className="relative w-full h-full flex flex-col items-center justify-center z-10"
                        >
                          {/* Double-ring glow halo around deity */}
                          <div className="relative">
                            {/* Outer broad glow */}
                            <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-gold/35 via-saffron/25 to-gold/35 blur-2xl opacity-90 animate-pulse" />
                            {/* Inner tight ring */}
                            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-gold/60 via-amber-400/50 to-gold/60 blur-md opacity-80 animate-pulse" style={{ animationDelay: '0.5s' }} />
                            <img
                              src={currentDeity.image}
                              alt={currentDeity.name}
                              className="relative deity-glow-intense max-h-[290px] sm:max-h-[330px] w-auto max-w-full object-contain rounded-md"
                            />
                          </div>

                        </motion.div>
                      </AnimatePresence>
                    </div>


                    {/* Screen Bottom Deity Info Overlay */}
                    <div className="z-10 bg-gradient-to-t from-black via-royal-950/95 to-transparent p-3 pt-4 border-t border-gold/20">
                      <div className="flex items-end justify-between gap-2">
                        <div>
                          <div className="text-[10px] text-gold font-semibold uppercase tracking-wider">
                            {currentDeity.deity} • {currentDeity.frameStyle}
                          </div>
                          <h3 className="font-serif font-bold text-white text-base leading-tight">
                            {currentDeity.name}
                          </h3>
                        </div>
                        <button
                          onClick={() => onOpenEnquiry && onOpenEnquiry(currentDeity)}
                          className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-gold to-gold-dark text-royal-950 font-bold text-xs flex items-center gap-1 transition-all hover:scale-105 shadow-sm flex-shrink-0 cursor-pointer"
                        >
                          <Eye size={12} /> View Frame
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Deity Quick Selector Thumbnails Row */}
              <div className="mt-4 bg-royal-900/90 backdrop-blur-md p-2.5 rounded-2xl border border-gold/30 shadow-lg">
                <div className="flex items-center justify-between mb-1.5 px-1">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1">
                    <Sparkles size={11} className="text-gold" /> Select Deity to Display
                  </span>
                  <button
                    onClick={() => setIsAutoPlay(prev => !prev)}
                    className="text-[10px] text-gold hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
                    title={isAutoPlay ? 'Auto-slideshow active' : 'Auto-slideshow paused'}
                  >
                    <RefreshCw size={10} className={isAutoPlay ? 'animate-spin-slow text-emerald-400' : 'text-slate-400'} />
                    <span>{isAutoPlay ? 'Auto Playing' : 'Paused'}</span>
                  </button>
                </div>

                <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5">
                  {FEATURED_FRAMES.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => handleSelectDeity(idx)}
                      className={`relative aspect-square rounded-lg overflow-hidden border transition-all cursor-pointer group ${
                        activeFrameIndex === idx
                          ? 'border-gold shadow-gold-glow scale-105 ring-1 ring-gold'
                          : 'border-gold/20 opacity-70 hover:opacity-100 hover:border-gold/60'
                      }`}
                      title={item.name}
                    >
                      <img
                        src={item.thumbnail}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {activeFrameIndex === idx && (
                        <span className="absolute bottom-0 inset-x-0 h-1 bg-gold" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
