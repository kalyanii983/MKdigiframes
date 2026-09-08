import React from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin, MessageCircle, Clock, Send, Sparkles } from 'lucide-react'
import { BUSINESS_INFO } from '../data/framesData'

export default function ContactSection({ onOpenEnquiry }) {
  const contactCards = [
    {
      icon: Phone,
      title: 'Primary Hotline',
      subtitle: '+91 81232 57878',
      desc: 'Call for instant pricing, custom sizing & product availability',
      link: `tel:+91${BUSINESS_INFO.primaryPhone}`,
      actionText: 'Click to Call 8123257878',
      highlight: 'Immediate Response',
    },
    {
      icon: Phone,
      title: 'Secondary Support Line',
      subtitle: '+91 91871 32211',
      desc: 'Alternative hotline for technical support and order tracking',
      link: `tel:+91${BUSINESS_INFO.secondaryPhone}`,
      actionText: 'Click to Call 9187132211',
      highlight: 'Direct Line',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Official Chat',
      subtitle: '+91 81232 57878',
      desc: 'Receive live high-resolution videos and photo catalogs of frames',
      link: BUSINESS_INFO.whatsappUrl,
      actionText: 'Chat on WhatsApp',
      highlight: 'Photos & Videos',
      isWhatsApp: true,
    },
    {
      icon: MapPin,
      title: 'Nagavara Showroom',
      subtitle: 'Nagavara, Bengaluru',
      desc: '#111/12, TCH College Road, Nagavara, Bengaluru – 560045',
      link: BUSINESS_INFO.mapsUrl,
      actionText: 'View on Google Maps',
      highlight: 'Open All 7 Days',
    },
  ]

  return (
    <section id="contact" className="section bg-royal-950 relative overflow-hidden">
      {/* Background illumination */}
      <div className="absolute -top-20 left-10 w-96 h-96 bg-royal-600/15 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="section-title">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-850 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-wider mb-3">
            Contact MK Digi Frames
          </div>
          <h2>Connect With Our Devotional Team</h2>
          <p>
            Whether you want a customized pooja room digital frame, have bulk spiritual gifting inquiries, or wish to visit our Nagavara showroom, we are here to assist you.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactCards.map((card, index) => {
            const Icon = card.icon
            return (
              <motion.a
                key={index}
                href={card.link}
                target={card.link.startsWith('http') ? '_blank' : '_self'}
                rel={card.link.startsWith('http') ? 'noopener noreferrer' : ''}
                className="card-royal p-6 flex flex-col justify-between border-gold/25 hover:border-gold/60 group cursor-pointer transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-2xl border transition-all ${
                      card.isWhatsApp
                        ? 'bg-emerald-600/20 text-emerald-400 border-emerald-500/40 group-hover:bg-emerald-600 group-hover:text-white'
                        : 'bg-royal-800 text-gold border-gold/30 group-hover:scale-110 group-hover:shadow-gold-glow'
                    }`}>
                      <Icon size={22} />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-royal-850 text-gold-light border border-gold/20">
                      {card.highlight}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-white mb-1 group-hover:text-gold-light transition-colors">
                    {card.title}
                  </h3>

                  <div className="text-gold font-semibold text-sm mb-2">
                    {card.subtitle}
                  </div>

                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-gold/15 text-xs font-semibold text-gold-light group-hover:text-white flex items-center justify-between transition-colors">
                  <span>{card.actionText}</span>
                  <span>→</span>
                </div>
              </motion.a>
            )
          })}
        </div>

        {/* Central Call to Action Banner */}
        <div className="card-royal p-8 sm:p-10 border-gold/40 text-center max-w-4xl mx-auto bg-gradient-to-r from-royal-900 via-royal-850 to-royal-900 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold uppercase tracking-wider">
              <Sparkles size={14} /> Quick Assistance Across Bengaluru
            </span>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
              Ready to Welcome Divinity into Your Home?
            </h3>
            <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
              Call us directly, chat on WhatsApp, or request an instant catalog quotation. We provide custom sizing, doorstep installation, and continuous after-sales support.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => onOpenEnquiry && onOpenEnquiry(null)}
                className="btn-primary text-sm py-3 px-7"
              >
                Open Enquiry Form
              </button>
              <a
                href={`tel:+91${BUSINESS_INFO.primaryPhone}`}
                className="btn-secondary text-sm py-3 px-7"
              >
                <Phone size={16} className="text-gold" />
                Call +91 {BUSINESS_INFO.primaryPhone}
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm flex items-center gap-2 transition-all shadow-md"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
