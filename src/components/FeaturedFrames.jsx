import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Eye, Check, X, ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react'
import { FEATURED_FRAMES, BUSINESS_INFO } from '../data/framesData'

// ─── Lightbox Modal ───────────────────────────────────────────────────────────
function LightboxModal({ frame, onClose }) {
  const mainImage = { src: frame.image, label: frame.name }
  const extras = frame.relatedImages || []
  const images = [mainImage, ...extras]
  const [activeIdx, setActiveIdx] = useState(0)

  const prev = useCallback(() => setActiveIdx(i => (i - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setActiveIdx(i => (i + 1) % images.length), [images.length])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999] flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/90 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Modal container */}
        <motion.div
          className="relative z-10 w-full max-w-5xl mx-4 flex flex-col max-h-[92vh]"
          initial={{ scale: 0.92, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-royal-950/95 border border-gold/30 rounded-t-2xl">
            <div>
              <h3 className="font-serif font-bold text-white text-base sm:text-lg">{frame.name}</h3>
              <p className="text-[11px] text-gold font-medium tracking-wide">{images[activeIdx].label}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-400 bg-royal-850 border border-gold/20 px-2.5 py-1 rounded-full">
                {activeIdx + 1} / {images.length}
              </span>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-royal-850 border border-gold/30 text-slate-300 hover:text-white hover:border-gold hover:bg-gold/20 transition-all"
                aria-label="Close gallery"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Main Image Area */}
          <div
            className="relative bg-royal-950 border-x border-gold/20 flex items-center justify-center overflow-hidden"
            style={{ minHeight: '380px', maxHeight: '55vh' }}
          >
            {/* Golden ambient glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-64 h-64 rounded-full bg-gold/10 blur-3xl" />
            </div>

            <AnimatePresence mode="wait">
              <motion.img
                key={activeIdx}
                src={images[activeIdx].src}
                alt={images[activeIdx].label}
                className="relative max-w-full object-contain drop-shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                style={{ maxHeight: '55vh' }}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.25 }}
                draggable={false}
              />
            </AnimatePresence>

            {/* Prev / Next arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 border border-gold/30 text-gold hover:bg-gold hover:text-royal-950 transition-all shadow-lg backdrop-blur-sm"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 border border-gold/30 text-gold hover:bg-gold hover:text-royal-950 transition-all shadow-lg backdrop-blur-sm"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>

          {/* Thumbnail Strip */}
          {images.length > 1 && (
            <div className="bg-royal-950/95 border-x border-b border-gold/20 px-4 py-3 overflow-x-auto">
              <div className="flex gap-2 w-max mx-auto">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all duration-200 ${
                      idx === activeIdx
                        ? 'border-gold shadow-[0_0_12px_rgba(212,175,55,0.6)] scale-105'
                        : 'border-gold/20 opacity-60 hover:opacity-90 hover:border-gold/50'
                    }`}
                    aria-label={`View ${img.label}`}
                  >
                    <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Footer Actions */}
          <div className="flex flex-wrap gap-2 px-4 py-3 bg-royal-950/95 border border-t-0 border-gold/30 rounded-b-2xl justify-between items-center">
            <p className="text-[11px] text-slate-400 hidden sm:block">
              ← → arrow keys to navigate &bull; Esc to close
            </p>
            <div className="flex gap-2 ml-auto">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20MK%20Digi%20Frames%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(frame.name)}%20digital%20photo%20frame.%20Please%20share%20price%20and%20details.`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 rounded-xl bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600 hover:text-white border border-emerald-500/40 text-xs font-semibold flex items-center gap-1.5 transition-all"
              >
                <MessageCircle size={13} /> WhatsApp Price
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function FeaturedFrames({ onOpenEnquiry }) {
  const [lightboxFrame, setLightboxFrame] = useState(null)

  return (
    <section id="frames" className="section section-divine-dark relative overflow-hidden">
      {/* Sacred pattern overlay */}
      <div className="absolute inset-0 sacred-pattern opacity-25 pointer-events-none" />

      {/* Ambient orbs */}
      <div className="ambient-orb w-[400px] h-[400px] top-1/4 right-0 bg-royal-600/25" style={{ animationDuration: '9s' }} />
      <div className="ambient-orb w-[300px] h-[300px] bottom-1/4 -left-20 bg-gold/8" style={{ animationDuration: '11s', animationDelay: '4s' }} />
      <div className="ambient-orb w-[250px] h-[250px] top-10 left-1/4 bg-saffron/8" style={{ animationDuration: '7s', animationDelay: '2s' }} />

      {/* Floating particles */}
      <div className="divine-particle w-1.5 h-1.5 bg-gold/60 top-[10%] right-[15%]" style={{ animationDuration: '7s' }} />
      <div className="divine-particle w-1 h-1 bg-saffron/50 top-[50%] left-[8%]" style={{ animationDuration: '9s', animationDelay: '2s' }} />
      <div className="divine-particle w-2 h-2 bg-gold/35 bottom-[15%] right-[20%]" style={{ animationDuration: '11s', animationDelay: '5s' }} />

      {/* Divine separator lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-royal-600/50 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="section-title">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-850 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-wider mb-3">
            God &amp; Goddess Collection
          </div>
          <h2>Featured Digital Photo Frames</h2>
          <p>
            Explore our most cherished divine editions. Each frame is designed with crystal IPS panels, custom wood/gold craftsmanship, and sacred audio chants.
          </p>
        </div>

        {/* Frames Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_FRAMES.map((frame, index) => {
            const imgCount = frame.relatedImages ? frame.relatedImages.length : 1
            const hasMultiple = imgCount > 1
            return (
              <motion.div
                key={frame.id}
                className="digital-frame-bezel group flex flex-col justify-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
              >
                {/* Top Frame Display Area */}
                <div>
                  <div
                    className={`relative aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-br ${frame.bgGradient} border border-gold/20 flex flex-col items-center justify-between p-5 text-center shadow-inner cursor-pointer`}
                    onClick={() => setLightboxFrame(frame)}
                    role="button"
                    aria-label={`View all ${frame.deity} images`}
                  >
                    {/* Badge */}
                    <div className="w-full flex justify-between items-center text-[10px] text-gold uppercase tracking-wider">
                      <span className="bg-black/60 px-2 py-0.5 rounded-full backdrop-blur-sm border border-gold/30">
                        {frame.resolution}
                      </span>
                      {frame.popular && (
                        <span className="bg-gradient-to-r from-saffron to-amber-600 text-white font-bold px-2 py-0.5 rounded-full shadow-sm">
                          Popular
                        </span>
                      )}
                    </div>

                    {/* Deity Real Photo Display */}
                    <div className="my-auto w-full h-44 flex items-center justify-center p-1 transform group-hover:scale-105 transition-transform duration-300 relative">
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-gold/30 via-saffron/20 to-gold/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      {frame.image ? (
                        <div className="relative z-10">
                          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-gold/40 via-saffron/30 to-gold/40 blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-400" />
                          <img
                            src={frame.image}
                            alt={frame.name}
                            className="relative max-h-full w-auto max-w-full object-contain filter drop-shadow-[0_0_20px_rgba(212,175,55,0.7)] brightness-110 contrast-105 rounded"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <div className="text-7xl drop-shadow-[0_8px_16px_rgba(0,0,0,0.7)]">
                          {frame.icon}
                        </div>
                      )}
                    </div>

                    {/* Bottom overlay in screen */}
                    <div className="w-full bg-black/60 backdrop-blur-sm rounded-lg p-2 text-[11px] text-slate-300 border border-white/10">
                      {frame.frameStyle}
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 rounded-xl pointer-events-none">
                      <div className="bg-gold/90 text-royal-950 rounded-full p-2.5 shadow-lg">
                        <ImageIcon size={20} />
                      </div>
                      <span className="text-white text-xs font-semibold tracking-wide">
                        {hasMultiple ? `View All ${imgCount} Images` : 'View Image'}
                      </span>
                    </div>

                    {/* Image count badge */}
                    {hasMultiple && (
                      <div className="absolute top-2 left-2 flex items-center gap-1 bg-black/70 backdrop-blur-sm border border-gold/40 text-gold text-[10px] font-bold px-2 py-0.5 rounded-full">
                        <ImageIcon size={10} /> {imgCount} photos
                      </div>
                    )}
                  </div>

                  {/* Card Content & Details */}
                  <div className="pt-4 pb-2 px-1">
                    <h3 className="font-serif font-bold text-lg text-white group-hover:text-gold-light transition-colors">
                      {frame.name}
                    </h3>
                    <p className="text-xs text-gold font-medium mt-0.5">
                      {frame.tagline}
                    </p>
                    <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                      {frame.desc}
                    </p>

                    {/* Available Sizes Pills */}
                    <div className="mt-3 pt-3 border-t border-gold/15">
                      <div className="text-[10px] uppercase tracking-wider text-slate-400 mb-1.5">
                        Available Sizes:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {frame.sizes.map((size, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] px-2 py-0.5 rounded-md bg-royal-850 text-gold-light border border-gold/25 font-medium"
                          >
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Feature Highlights */}
                    <div className="mt-3 space-y-1">
                      {frame.features.slice(0, 2).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-300">
                          <Check size={12} className="text-gold flex-shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 mt-2 border-t border-gold/15 space-y-2">
                  <button
                    onClick={() => setLightboxFrame(frame)}
                    className="w-full btn-primary text-xs py-2.5"
                  >
                    <Eye size={14} />
                    {hasMultiple ? `View All ${imgCount} Images` : 'View Frame'}
                  </button>

                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20MK%20Digi%20Frames%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(
                      frame.name
                    )}%20digital%20photo%20frame.%20Please%20share%20price%20and%20details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 rounded-xl bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600 hover:text-white border border-emerald-500/40 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
                  >
                    <MessageCircle size={14} /> WhatsApp Price
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 card-royal p-6 sm:p-8 text-center max-w-3xl mx-auto border-gold/40">
          <h3 className="font-serif font-bold text-xl text-white mb-2">
            Looking for a Specific God, Goddess, or Custom Photo Setup?
          </h3>
          <p className="text-sm text-slate-300 mb-6">
            We customize digital frames with any Hindu deity, temple darshan, or family ancestral photos according to your exact pooja room dimensions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry(null)}
              className="btn-primary text-sm py-2.5 px-6"
            >
              Request Custom Frame Design
            </button>
            <a
              href={`tel:+91${BUSINESS_INFO.primaryPhone}`}
              className="btn-secondary text-sm py-2.5 px-6"
            >
              Call Specialist: +91 {BUSINESS_INFO.primaryPhone}
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxFrame && (
        <LightboxModal
          frame={lightboxFrame}
          onClose={() => setLightboxFrame(null)}
        />
      )}
    </section>
  )
}


