import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, MessageCircle, Sparkles, Clock, MapPin, ChevronDown, Send } from 'lucide-react'
import { BUSINESS_INFO } from '../data/framesData'

export default function Navbar({ onOpenEnquiry }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [callDropdownOpen, setCallDropdownOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Frames', href: '#frames', id: 'frames' },
    { name: 'What We Offer', href: '#services', id: 'services' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Enquiry', href: '#enquiry', id: 'enquiry' },
  ]

  // Track scroll position for header compression and active section highlight
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25)

      // Active section spy
      const sections = ['enquiry', 'gallery', 'services', 'frames', 'about', 'home']
      const scrollPos = window.scrollY + 160

      for (const sec of sections) {
        const el = document.getElementById(sec)
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sec)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleNavClick = (e, href) => {
    if (e && e.preventDefault) e.preventDefault()
    setIsOpen(false)
    setCallDropdownOpen(false)

    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId) || document.querySelector(href)

    if (element) {
      setTimeout(() => {
        const header = document.querySelector('header')
        const headerHeight = header ? header.getBoundingClientRect().height : 80
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = Math.max(0, elementPosition - headerHeight - 8)

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })

        // Update URL hash without jumping
        if (window.history && window.history.pushState) {
          window.history.pushState(null, '', href)
        }
      }, 50)
    }
  }

  return (
    <header className="sticky top-0 z-40 w-full select-none">
      {/* 1. Top Luxury Utility Bar */}
      <div className="bg-gradient-to-r from-royal-950 via-royal-900 to-royal-950 border-b border-gold/20 py-1.5 sm:py-2 px-3 sm:px-4 text-xs">
        <div className="container-custom flex flex-wrap justify-between items-center gap-1.5 sm:gap-2">
          {/* Left: Store Status & Location */}
          <div className="flex items-center gap-2 sm:gap-3 text-slate-300">
            <span className="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[10px] sm:text-[11px] text-emerald-300 font-medium whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Open Today (9 AM – 9 PM)
            </span>
            <a
              href="#location"
              onClick={(e) => handleNavClick(e, '#location')}
              className="hidden sm:inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-gold transition-colors"
              title="View showroom location on map"
            >
              <MapPin size={12} className="text-gold" />
              Nagavara, Bengaluru
            </a>
          </div>

          {/* Right: Dual Phone Hotlines & WhatsApp */}
          <div className="flex items-center gap-2 sm:gap-4 text-xs font-sans">
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="hidden md:inline text-gold-light font-medium text-[11px] uppercase tracking-wider">
                Direct Call:
              </span>
              <a
                href={`tel:+91${BUSINESS_INFO.primaryPhone}`}
                className="hover:text-gold text-slate-200 flex items-center gap-1 font-semibold text-[11px] sm:text-xs transition-colors px-1.5 sm:px-2 py-0.5 rounded-md hover:bg-royal-800"
              >
                <Phone size={11} className="text-gold" /> {BUSINESS_INFO.primaryPhone}
              </a>
              <span className="text-gold/40">/</span>
              <a
                href={`tel:+91${BUSINESS_INFO.secondaryPhone}`}
                className="hover:text-gold text-slate-200 flex items-center gap-1 font-semibold text-[11px] sm:text-xs transition-colors px-1.5 sm:px-2 py-0.5 rounded-md hover:bg-royal-800"
              >
                {BUSINESS_INFO.secondaryPhone}
              </a>
            </div>

            <div className="hidden lg:flex items-center gap-2 pl-3 border-l border-gold/20">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 font-semibold text-xs transition-colors"
              >
                <MessageCircle size={13} />
                <span>WhatsApp Live Chat</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main High-End Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 relative ${
          scrolled
            ? 'bg-royal-950/95 backdrop-blur-xl shadow-2xl shadow-black/80 border-b border-gold/30 py-2 sm:py-2.5'
            : 'bg-royal-950/90 backdrop-blur-md border-b border-gold/15 py-2.5 sm:py-3.5'
        }`}
      >
        <div className="container-custom flex justify-between items-center">
          {/* Brand Logo Emblem */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 sm:gap-3.5 group cursor-pointer"
          >
            {/* Ornate Gold Emblem Icon */}
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 flex-shrink-0">
              <div className="absolute -inset-1 bg-gradient-to-br from-gold/40 to-saffron/40 rounded-xl blur-sm opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-royal-900 via-royal-850 to-royal-950 border border-gold/60 p-0.5 shadow-lg flex items-center justify-center">
                <div className="w-full h-full rounded-lg bg-gradient-to-br from-gold/20 via-royal-950 to-gold/10 flex items-center justify-center text-center">
                  <span className="font-serif font-black text-gold text-base sm:text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    🕉
                  </span>
                </div>
              </div>
            </div>

            {/* Brand Title & Tagline */}
            <div>
              <div className="flex items-baseline gap-1 sm:gap-1.5">
                <span className="font-serif font-black text-white text-base sm:text-lg tracking-tight leading-none group-hover:text-gold-light transition-colors">
                  MK
                </span>
                <span className="font-serif font-extrabold gold-gradient-text text-base sm:text-lg tracking-tight leading-none">
                  DIGI FRAMES
                </span>
              </div>
              <div className="flex items-center gap-1 sm:gap-1.5 mt-1">
                <span className="w-1 h-1 rounded-full bg-gold animate-ping" />
                <p className="text-[9px] sm:text-[10px] font-sans font-semibold tracking-wider sm:tracking-widest text-gold-light uppercase leading-none">
                  Divinity in Every Frame
                </p>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-2 rounded-xl text-xs xl:text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-gold bg-gold/10 shadow-sm border border-gold/30'
                      : 'text-slate-300 hover:text-white hover:bg-royal-800/60'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-gold via-gold-light to-gold rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              )
            })}
          </div>

          {/* Desktop Right Action Area */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick Call Dropdown Trigger */}
            <div className="relative">
              <button
                onClick={() => setCallDropdownOpen(prev => !prev)}
                className="px-3.5 py-2 rounded-xl bg-royal-850 hover:bg-royal-800 border border-gold/30 text-gold-light hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
                title="Call Options"
              >
                <Phone size={14} className="text-gold" />
                <span>Call Us</span>
                <ChevronDown size={13} className={`transition-transform duration-200 ${callDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {callDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    className="absolute right-0 top-full mt-2 w-56 bg-royal-950/95 backdrop-blur-xl border border-gold/40 rounded-2xl p-3 shadow-2xl z-50 space-y-2 text-xs"
                  >
                    <div className="text-[10px] uppercase font-semibold text-slate-400 px-1 border-b border-gold/20 pb-1.5">
                      Showroom Hotlines
                    </div>
                    <a
                      href={`tel:+91${BUSINESS_INFO.primaryPhone}`}
                      className="flex items-center justify-between p-2 rounded-xl bg-royal-900 hover:bg-royal-850 text-slate-200 hover:text-gold border border-gold/20 transition-colors"
                      onClick={() => setCallDropdownOpen(false)}
                    >
                      <div>
                        <div className="text-[10px] text-gold font-medium">Primary Line</div>
                        <div className="font-bold text-xs">+91 {BUSINESS_INFO.primaryPhone}</div>
                      </div>
                      <Phone size={12} className="text-gold" />
                    </a>
                    <a
                      href={`tel:+91${BUSINESS_INFO.secondaryPhone}`}
                      className="flex items-center justify-between p-2 rounded-xl bg-royal-900 hover:bg-royal-850 text-slate-200 hover:text-gold border border-gold/20 transition-colors"
                      onClick={() => setCallDropdownOpen(false)}
                    >
                      <div>
                        <div className="text-[10px] text-gold font-medium">Alternative Line</div>
                        <div className="font-bold text-xs">+91 {BUSINESS_INFO.secondaryPhone}</div>
                      </div>
                      <Phone size={12} className="text-gold" />
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* WhatsApp Quick Link */}
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-emerald-600/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-600 hover:text-white transition-all text-xs font-semibold flex items-center gap-1.5 shadow-sm"
              title="Chat on WhatsApp"
            >
              <MessageCircle size={15} />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden p-2 rounded-xl bg-royal-900 text-gold border border-gold/30 hover:bg-royal-800 transition-colors active:scale-95"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* 3. Mobile Navigation Drawer (Absolute Overlay to prevent layout shifting) */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop Dimmer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 top-[88px] bg-black/70 backdrop-blur-sm z-30 lg:hidden"
                onClick={() => setIsOpen(false)}
              />

              {/* Floating Menu Body */}
              <motion.div
                className="absolute top-full left-0 right-0 w-full max-h-[calc(100vh-90px)] overflow-y-auto bg-royal-950/98 backdrop-blur-2xl border-b border-gold/30 shadow-2xl z-40 lg:hidden"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
              >
                <div className="container-custom py-5 flex flex-col gap-1.5">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.id
                    return (
                      <a
                        key={link.id}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={`text-left font-semibold py-3 px-4 rounded-xl transition-all text-sm flex items-center justify-between cursor-pointer ${
                          isActive
                            ? 'bg-gold/15 text-gold border border-gold/30 font-bold'
                            : 'text-slate-200 hover:bg-royal-900 hover:text-gold active:bg-royal-850'
                        }`}
                      >
                        <span className="text-base">{link.name}</span>
                        {isActive ? (
                          <span className="w-2 h-2 rounded-full bg-gold shadow-gold-glow" />
                        ) : (
                          <span className="text-gold/40 text-xs">→</span>
                        )}
                      </a>
                    )
                  })}

                  {/* Mobile Info & Direct Actions Card */}
                  <div className="pt-4 mt-2 border-t border-gold/20 space-y-3">
                    <div className="bg-royal-900/90 p-3.5 rounded-2xl border border-gold/30 space-y-1.5 text-xs">
                      <div className="flex items-center gap-1.5 text-gold font-bold">
                        <MapPin size={13} /> Nagavara Showroom • Bengaluru
                      </div>
                      <div className="text-slate-300 text-[11px] leading-relaxed">
                        #111/12, TCH College Road, Nagavara – 560045
                      </div>
                      <div className="flex items-center gap-1.5 text-emerald-400 text-[11px] pt-0.5">
                        <Clock size={12} /> Open 7 Days: 9:00 AM – 9:00 PM
                      </div>
                    </div>

                    {/* Dual Phone Buttons */}
                    <div className="grid grid-cols-2 gap-2 pt-0.5">
                      <a
                        href={`tel:+91${BUSINESS_INFO.primaryPhone}`}
                        className="btn-secondary text-[11px] sm:text-xs py-2.5 px-2 text-center flex items-center justify-center gap-1.5"
                      >
                        <Phone size={12} /> {BUSINESS_INFO.primaryPhone}
                      </a>
                      <a
                        href={`tel:+91${BUSINESS_INFO.secondaryPhone}`}
                        className="btn-secondary text-[11px] sm:text-xs py-2.5 px-2 text-center flex items-center justify-center gap-1.5"
                      >
                        <Phone size={12} /> {BUSINESS_INFO.secondaryPhone}
                      </a>
                    </div>

                    {/* WhatsApp Action */}
                    <a
                      href={BUSINESS_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl py-3 px-4 text-center text-xs font-semibold flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
                    >
                      <MessageCircle size={16} /> Chat Directly on WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

