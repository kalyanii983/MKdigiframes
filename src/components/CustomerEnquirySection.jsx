import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Phone, Send, CheckCircle2, Clock, MapPin, Sparkles } from 'lucide-react'
import { BUSINESS_INFO } from '../data/framesData'

export default function CustomerEnquirySection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    deity: '',
    size: '15.6 Inch',
    city: 'Bengaluru',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault()
    const text = `*New Customer Enquiry - MK Digi Frames*
*Name:* ${formData.name || 'Customer'}
*Phone:* ${formData.phone}
*Deity/Collection:* ${formData.deity || 'Divine Collection'}
*Frame Size:* ${formData.size}
*City/Area:* ${formData.city}
*Message:* ${formData.message || 'Please send pricing and delivery details.'}`

    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank')
    setIsSubmitted(true)
  }

  const handleCallbackSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <section id="enquiry" className="section bg-royal-950 relative overflow-hidden">
      {/* Background Radial Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-royal-700/20 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="section-title">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-850 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-wider mb-3">
            Customer Enquiries & Orders
          </div>
          <h2>Bring Divinity to Your Home Today</h2>
          <p>
            Have questions about frame sizes, deity collections, or custom mandir designs? Fill out the form below or chat directly with our specialists.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          {/* Left: Quick Contact Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card-royal p-6 sm:p-8 border-gold/30 space-y-6">
              <h3 className="font-serif font-bold text-2xl text-white flex items-center gap-2">
                <Sparkles size={22} className="text-gold" />
                Quick Connect
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Connect with our showroom team at <span className="text-gold font-semibold">MK Digi Frames</span> for instant catalog pricing, videos of frame darshan, and custom dimensions.
              </p>

              {/* Hotlines */}
              <div className="space-y-3 pt-2">
                <div className="text-xs text-gold uppercase tracking-wider font-semibold">Direct Call Lines:</div>
                <a
                  href={`tel:+91${BUSINESS_INFO.primaryPhone}`}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-royal-850 hover:bg-royal-800 border border-gold/25 text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gold/15 text-gold group-hover:scale-110 transition-transform">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400">Primary Hotline</div>
                      <div className="font-semibold text-sm">+91 {BUSINESS_INFO.primaryPhone}</div>
                    </div>
                  </div>
                  <span className="text-xs text-gold font-medium">Call Now →</span>
                </a>

                <a
                  href={`tel:+91${BUSINESS_INFO.secondaryPhone}`}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-royal-850 hover:bg-royal-800 border border-gold/25 text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gold/15 text-gold group-hover:scale-110 transition-transform">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400">Secondary Hotline</div>
                      <div className="font-semibold text-sm">+91 {BUSINESS_INFO.secondaryPhone}</div>
                    </div>
                  </div>
                  <span className="text-xs text-gold font-medium">Call Now →</span>
                </a>
              </div>

              {/* Showroom Timing & Address */}
              <div className="pt-3 border-t border-gold/20 space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <MapPin size={16} className="text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Store Address:</strong><br />
                    {BUSINESS_INFO.address.full}
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock size={16} className="text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Timings:</strong><br />
                    {BUSINESS_INFO.timings}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="card-royal p-6 sm:p-8 border-gold/35 relative">
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

              {isSubmitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-white">Enquiry Received!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to <span className="text-gold font-semibold">MK Digi Frames</span>. Our team in Nagavara will contact you within 30 minutes with complete frame pricing, photos, and delivery details.
                  </p>
                  <div className="pt-4 flex flex-wrap gap-3 justify-center">
                    <a
                      href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-xs py-2.5 px-5"
                    >
                      <MessageCircle size={16} /> Open WhatsApp Chat
                    </a>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="btn-secondary text-xs py-2.5 px-5"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                  <div className="mb-4">
                    <h3 className="font-serif font-bold text-xl text-white">Customer Enquiry Form</h3>
                    <p className="text-xs text-slate-400 mt-0.5">Fill out your details to receive instant digital frame catalog & quotation.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full bg-royal-850 border border-gold/30 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 9876543210"
                        className="w-full bg-royal-850 border border-gold/30 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Preferred Deity / God
                      </label>
                      <input
                        type="text"
                        name="deity"
                        value={formData.deity}
                        onChange={handleChange}
                        placeholder="e.g. Lord Ganesha / Tirupati Balaji"
                        className="w-full bg-royal-850 border border-gold/30 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Frame Size
                      </label>
                      <select
                        name="size"
                        value={formData.size}
                        onChange={handleChange}
                        className="w-full bg-royal-850 border border-gold/30 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-gold"
                      >
                        <option value="10.1 Inch">10.1" Desktop Frame</option>
                        <option value="15.6 Inch">15.6" Pooja Mandir Size</option>
                        <option value="21.5 Inch">21.5" Large Wall Mount</option>
                        <option value="32 Inch">32" Grand Altar Display</option>
                        <option value="Custom Size">Custom Built-in Setup</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      City / Area
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="e.g. Nagavara, Bengaluru / Other"
                      className="w-full bg-royal-850 border border-gold/30 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Your Message or Requirements
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your pooja room, preferred wooden frame color, stotras audio, or delivery timeline..."
                      className="w-full bg-royal-850 border border-gold/30 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold resize-none"
                    />
                  </div>

                  <div className="pt-2 space-y-3">
                    <button
                      type="submit"
                      className="w-full py-3 px-6 rounded-xl font-semibold text-sm bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 transition-all active:scale-95"
                    >
                      <MessageCircle size={18} />
                      Send Instant Enquiry via WhatsApp
                    </button>

                    <button
                      type="button"
                      onClick={handleCallbackSubmit}
                      className="w-full btn-secondary text-xs py-2.5"
                    >
                      <Send size={14} /> Request Phone Callback
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
