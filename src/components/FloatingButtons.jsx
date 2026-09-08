import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageCircle, ChevronUp, Sparkles, X } from 'lucide-react'
import { BUSINESS_INFO } from '../data/framesData'

export default function FloatingButtons({ onOpenEnquiry }) {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [showCallMenu, setShowCallMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2 sm:gap-3 pointer-events-none">
      {/* Container for interactive elements */}
      <div className="pointer-events-auto flex flex-col items-end gap-2 sm:gap-3">
        {/* Call Popup Menu */}
        <AnimatePresence>
          {showCallMenu && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="bg-royal-900/95 backdrop-blur-md border border-gold/40 rounded-2xl p-3 sm:p-4 shadow-2xl shadow-gold/20 w-60 sm:w-64 text-xs space-y-2.5 sm:space-y-3 mb-1"
            >
              <div className="flex justify-between items-center border-b border-gold/20 pb-2">
                <span className="font-serif font-bold text-white flex items-center gap-1.5">
                  <Phone size={14} className="text-gold" /> Call MK Digi Frames
                </span>
                <button
                  onClick={() => setShowCallMenu(false)}
                  className="text-slate-400 hover:text-white p-1"
                  aria-label="Close call options"
                >
                  <X size={14} />
                </button>
              </div>

              <div className="space-y-2">
                <a
                  href={`tel:+91${BUSINESS_INFO.primaryPhone}`}
                  className="flex items-center justify-between p-2 sm:p-2.5 rounded-xl bg-royal-850 hover:bg-royal-800 text-white border border-gold/20 transition-colors"
                >
                  <div>
                    <div className="text-[10px] text-gold font-semibold uppercase">Hotline 1</div>
                    <div className="font-bold text-xs sm:text-sm">+91 {BUSINESS_INFO.primaryPhone}</div>
                  </div>
                  <span className="text-[11px] text-gold">Call →</span>
                </a>

                <a
                  href={`tel:+91${BUSINESS_INFO.secondaryPhone}`}
                  className="flex items-center justify-between p-2 sm:p-2.5 rounded-xl bg-royal-850 hover:bg-royal-800 text-white border border-gold/20 transition-colors"
                >
                  <div>
                    <div className="text-[10px] text-gold font-semibold uppercase">Hotline 2</div>
                    <div className="font-bold text-xs sm:text-sm">+91 {BUSINESS_INFO.secondaryPhone}</div>
                  </div>
                  <span className="text-[11px] text-gold">Call →</span>
                </a>
              </div>

              <div className="text-[10px] text-slate-400 text-center pt-1">
                Showroom: Nagavara, Bengaluru
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Call Button */}
        <motion.button
          onClick={() => setShowCallMenu(prev => !prev)}
          className="w-11 h-11 sm:w-13 sm:h-13 p-2.5 sm:p-3.5 rounded-full bg-gradient-to-r from-gold via-gold-rich to-amber-700 text-royal-950 font-bold shadow-xl shadow-gold/30 hover:scale-110 active:scale-95 transition-all flex items-center justify-center border border-gold-light/40"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          title="Call MK Digi Frames"
          aria-label="Call MK Digi Frames"
        >
          <Phone size={18} className="sm:w-5 sm:h-5" />
        </motion.button>

        {/* Floating WhatsApp Button */}
        <motion.a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/40 hover:scale-110 active:scale-95 transition-all flex items-center justify-center border border-emerald-400/30"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          title="Chat on WhatsApp"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={22} className="sm:w-6 sm:h-6" />
        </motion.a>

        {/* Scroll To Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-royal-850/90 backdrop-blur-md border border-gold/30 text-gold hover:text-white hover:bg-royal-800 shadow-md flex items-center justify-center transition-all"
              aria-label="Scroll back to top"
              title="Back to top"
            >
              <ChevronUp size={18} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
