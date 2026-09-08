import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Phone, MessageCircle, CheckCircle2 } from 'lucide-react'
import { BUSINESS_INFO } from '../data/framesData'

export default function EnquiryModal({ isOpen, onClose, selectedFrame = null }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    deity: '',
    size: '15.6"',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (selectedFrame) {
      setFormData(prev => ({
        ...prev,
        deity: selectedFrame.name || selectedFrame.title || '',
        size: (selectedFrame.sizes && selectedFrame.sizes[0]) || '15.6"',
      }))
    }
    setSubmitted(false)
  }, [selectedFrame, isOpen])

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault()
    const text = `*New Customer Enquiry - MK Digi Frames*
*Name:* ${formData.name || 'Customer'}
*Phone:* ${formData.phone || 'Not provided'}
*Frame/Deity:* ${formData.deity || 'General Enquiry'}
*Preferred Size:* ${formData.size}
*Message:* ${formData.message || 'I would like to know price and delivery details.'}`

    const encodedText = encodeURIComponent(text)
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodedText}`, '_blank')
    setSubmitted(true)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm">
        {/* Backdrop click */}
        <div className="fixed inset-0" onClick={onClose} />

        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-gradient-to-b from-royal-900 to-royal-950 border border-gold/40 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl shadow-gold/20 z-10"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.25 }}
          onClick={e => e.stopPropagation()}
        >
          {/* Top Gold Ornament Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold/0 via-gold to-gold/0" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-gold hover:bg-royal-800 transition-colors"
            aria-label="Close modal"
          >
            <X size={22} />
          </button>

          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto"
              >
                <CheckCircle2 size={36} />
              </motion.div>
              <h3 className="text-2xl font-serif font-bold gold-gradient-text">Thank You for Inquiring!</h3>
              <p className="text-slate-300 text-sm max-w-sm mx-auto">
                Our team at <span className="text-gold font-semibold">MK Digi Frames</span> in Nagavara will contact you shortly with catalog pricing and details.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`tel:+91${BUSINESS_INFO.primaryPhone}`}
                  className="btn-primary text-sm py-2.5"
                >
                  <Phone size={16} /> Call +91 {BUSINESS_INFO.primaryPhone}
                </a>
                <button
                  onClick={onClose}
                  className="btn-secondary text-sm py-2.5"
                >
                  Back to Frames
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-gold font-semibold">
                    MK Digi Frames • Nagavara
                  </span>
                  <h3 id="modal-title" className="text-2xl font-serif font-bold text-white mt-1">
                    Product Enquiry
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    {selectedFrame ? (
                      <>Inquiring for: <span className="text-gold-light font-semibold">{selectedFrame.name || selectedFrame.title}</span></>
                    ) : (
                      'Get custom dimensions, pricing, and video darshan previews.'
                    )}
                  </p>
                </div>
                {selectedFrame?.image && (
                  <div className="w-14 h-14 rounded-xl overflow-hidden border border-gold/40 flex-shrink-0 bg-black/60 p-1 shadow-md">
                    <img src={selectedFrame.image} alt={selectedFrame.name || 'Selected Frame'} className="w-full h-full object-contain rounded" />
                  </div>
                )}
              </div>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full bg-royal-800/80 border border-gold/30 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 9876543210"
                      className="w-full bg-royal-800/80 border border-gold/30 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Frame Size
                    </label>
                    <select
                      name="size"
                      value={formData.size}
                      onChange={handleInputChange}
                      className="w-full bg-royal-800/80 border border-gold/30 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-gold"
                    >
                      <option value="10.1 Inch">10.1" Desktop Frame</option>
                      <option value="15.6 Inch">15.6" Pooja Mandir Frame</option>
                      <option value="21.5 Inch">21.5" Large Wall Frame</option>
                      <option value="32 Inch">32" Grand Altar Display</option>
                      <option value="Custom Size">Custom Size / Setup</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Deity / Model Name
                  </label>
                  <input
                    type="text"
                    name="deity"
                    value={formData.deity}
                    onChange={handleInputChange}
                    placeholder="e.g. Lord Ganesha / Lord Shiva / Tirupati Balaji"
                    className="w-full bg-royal-800/80 border border-gold/30 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Special Requirements (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows={2}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="e.g. Delivery in Bengaluru, specific wooden frame color, audio prayer playlist..."
                    className="w-full bg-royal-800/80 border border-gold/30 rounded-xl px-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold resize-none"
                  />
                </div>

                <div className="pt-2 space-y-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl font-semibold text-sm bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30 transition-all active:scale-95"
                  >
                    <MessageCircle size={18} />
                    Instant Enquiry on WhatsApp
                  </button>

                  <button
                    type="button"
                    onClick={handleFormSubmit}
                    className="w-full py-2.5 px-4 rounded-xl font-medium text-xs text-slate-300 hover:text-white bg-royal-800/50 hover:bg-royal-800 border border-slate-700 transition-colors"
                  >
                    Or Submit Callback Request
                  </button>
                </div>

                <div className="text-center pt-2">
                  <p className="text-[11px] text-slate-400">
                    Prefer calling directly? Reach us at{' '}
                    <a href={`tel:+91${BUSINESS_INFO.primaryPhone}`} className="text-gold font-semibold hover:underline">
                      +91 {BUSINESS_INFO.primaryPhone}
                    </a>{' '}
                    or{' '}
                    <a href={`tel:+91${BUSINESS_INFO.secondaryPhone}`} className="text-gold font-semibold hover:underline">
                      +91 {BUSINESS_INFO.secondaryPhone}
                    </a>
                  </p>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
