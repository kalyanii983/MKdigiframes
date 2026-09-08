import React, { useState, useEffect } from 'react'

// Components
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import FeaturedFrames from './components/FeaturedFrames'
import ServicesSection from './components/ServicesSection'
import GallerySection from './components/GallerySection'
import CustomerEnquirySection from './components/CustomerEnquirySection'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import EnquiryModal from './components/EnquiryModal'

import { BUSINESS_INFO } from './data/framesData'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedFrameForModal, setSelectedFrameForModal] = useState(null)

  useEffect(() => {
    // Set dynamic page title
    document.title = `${BUSINESS_INFO.name} | ${BUSINESS_INFO.tagline} | Bengaluru`

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', BUSINESS_INFO.description)
    }
  }, [])

  const handleOpenEnquiry = (frameData = null) => {
    setSelectedFrameForModal(frameData)
    setIsModalOpen(true)
  }

  const handleCloseEnquiry = () => {
    setIsModalOpen(false)
    setSelectedFrameForModal(null)
  }

  return (
    <div className="min-h-screen bg-royal-950 text-slate-100 selection:bg-gold/30 selection:text-gold-light">
      {/* Top Header / Sticky Navbar */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Banner */}
        <HeroSection onOpenEnquiry={handleOpenEnquiry} />

        {/* 2. About MK Digi Frames */}
        <AboutSection onOpenEnquiry={handleOpenEnquiry} />

        {/* 3. Featured Digital Frames */}
        <FeaturedFrames onOpenEnquiry={handleOpenEnquiry} />

        {/* 4. Services / What We Offer */}
        <ServicesSection onOpenEnquiry={handleOpenEnquiry} />

        {/* 5. Product & Photo Gallery */}
        <GallerySection onOpenEnquiry={handleOpenEnquiry} />

        {/* 6. Customer Enquiry & Showroom Info */}
        <CustomerEnquirySection />
      </main>

      {/* Footer */}
      <Footer onOpenEnquiry={handleOpenEnquiry} />

      {/* Floating Action Menu (Dual Call + WhatsApp + Scroll Top) */}
      <FloatingButtons onOpenEnquiry={handleOpenEnquiry} />

      {/* Global Interactive Enquiry Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={handleCloseEnquiry}
        selectedFrame={selectedFrameForModal}
      />
    </div>
  )
}

export default App
