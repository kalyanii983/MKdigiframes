import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageCircle, Phone, Sparkles, ZoomIn, Eye } from 'lucide-react'
import { GALLERY_ITEMS, BUSINESS_INFO } from '../data/framesData'

const CATEGORIES = [
  'All',
  'Shiva',
  'Krishna & Vishnu',
  'Devi/Maa',
  'Ganesha',
  'Guru & Saints',
  'Shiva & Murugan',
  'Multi-Deity Setups',
]

export default function GallerySection({ onOpenEnquiry }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedItem, setSelectedItem] = useState(null)

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory)

  return (
    <section id="gallery" className="section section-divine-dark relative overflow-hidden">
      {/* Sacred pattern overlay */}
      <div className="absolute inset-0 sacred-pattern opacity-25 pointer-events-none" />

      {/* Ambient orbs */}
      <div className="ambient-orb w-[450px] h-[450px] top-1/2 right-10 bg-royal-600/20" style={{ animationDuration: '10s' }} />
      <div className="ambient-orb w-[300px] h-[300px] -top-20 left-1/4 bg-gold/8" style={{ animationDuration: '8s', animationDelay: '2s' }} />
      <div className="ambient-orb w-[250px] h-[250px] bottom-10 left-10 bg-saffron/8" style={{ animationDuration: '12s', animationDelay: '4s' }} />

      {/* Floating particles */}
      <div className="divine-particle w-1.5 h-1.5 bg-gold/55 top-[12%] right-[8%]" style={{ animationDuration: '7s' }} />
      <div className="divine-particle w-1 h-1 bg-saffron/50 top-[40%] left-[6%]" style={{ animationDuration: '9s', animationDelay: '3s' }} />
      <div className="divine-particle w-2 h-2 bg-gold/35 bottom-[25%] right-[25%]" style={{ animationDuration: '11s', animationDelay: '6s' }} />
      <div className="divine-particle w-1 h-1 bg-gold/60 top-[70%] left-[30%]" style={{ animationDuration: '8s', animationDelay: '1s' }} />

      {/* Divine separator lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-royal-600/40 to-transparent" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="section-title">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-850 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-wider mb-3">
            Visual Darshan
          </div>
          <h2>Product Gallery & Installations</h2>
          <p>
            Explore our high-definition divine digital frames and temple darshan photography. Click any frame to inspect details or enquire on WhatsApp.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-gold via-gold-medium to-gold-dark text-royal-950 shadow-gold-glow scale-105'
                  : 'bg-royal-900/80 text-slate-300 border border-gold/20 hover:border-gold/50 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedItem(item)}
                className="digital-frame-bezel cursor-pointer group hover:border-gold transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Canvas Area with Real Image */}
                <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-royal-950 to-black border border-gold/25 flex items-center justify-center p-2 text-center group-hover:border-gold/60 transition-colors">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-royal-950/80 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                    <span className="p-3 rounded-full bg-gold text-royal-950 shadow-gold-glow mb-2">
                      <ZoomIn size={20} />
                    </span>
                    <span className="text-xs font-serif font-bold text-white text-center">
                      Click to Preview
                    </span>
                    <span className="text-[11px] text-gold mt-1">{item.size}</span>
                  </div>

                  {/* Frame style badge */}
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm border border-gold/30 text-[9px] uppercase tracking-wider text-gold-light">
                    {item.style}
                  </div>
                </div>

                {/* Caption info */}
                <div className="pt-3 px-1">
                  <h4 className="font-serif font-bold text-sm text-white group-hover:text-gold transition-colors line-clamp-1">
                    {item.title}
                  </h4>
                  <div className="flex justify-between items-center mt-1 text-[11px] text-slate-400">
                    <span>{item.category}</span>
                    <span className="text-gold font-medium">{item.size}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Gallery CTA */}
        <div className="mt-14 text-center">
          <p className="text-sm text-slate-300 mb-4">
            Need a custom deity darshan not shown in the gallery?
          </p>
          <button
            onClick={() => onOpenEnquiry && onOpenEnquiry(null)}
            className="btn-primary text-xs py-3 px-6 mx-auto cursor-pointer"
          >
            <Sparkles size={16} /> Request Custom Deity Frame
          </button>
        </div>
      </div>

      {/* Lightbox / Zoom Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="relative max-w-lg w-full bg-gradient-to-b from-royal-900 to-royal-950 border border-gold/50 rounded-3xl p-6 sm:p-8 shadow-2xl z-10"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-gold hover:bg-royal-800 transition-colors cursor-pointer"
                aria-label="Close preview"
              >
                <X size={22} />
              </button>

              {/* Bezel frame in modal with real image */}
              <div className="digital-frame-bezel-gold mb-5">
                <div className="aspect-[4/5] sm:aspect-square bg-royal-950 rounded-xl flex items-center justify-center p-3 border border-gold/30 overflow-hidden">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="max-h-[380px] w-auto max-w-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.9)] rounded"
                  />
                </div>
              </div>

              {/* Details */}
              <div className="text-center space-y-2 mb-6">
                <span className="text-xs uppercase tracking-widest text-gold font-semibold">
                  {selectedItem.category} • {selectedItem.style}
                </span>
                <h3 className="font-serif font-bold text-2xl text-white">
                  {selectedItem.title}
                </h3>
                <p className="text-xs text-slate-300">
                  Display Specification: <strong className="text-gold-light">{selectedItem.size}</strong> with 178° IPS wide viewing angle, auto-slideshow, and optional devotional audio.
                </p>
              </div>

              {/* Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20MK%20Digi%20Frames%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(
                    selectedItem.title
                  )}%20(${encodeURIComponent(selectedItem.size)}).%20Please%20share%20pricing.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <MessageCircle size={16} /> WhatsApp Price
                </a>

                <button
                  onClick={() => {
                    const item = selectedItem
                    setSelectedItem(null)
                    onOpenEnquiry && onOpenEnquiry(item)
                  }}
                  className="w-full btn-primary text-xs py-3 cursor-pointer"
                >
                  <Eye size={16} /> Book / Custom Size
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
