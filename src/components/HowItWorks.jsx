import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function HowItWorks() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const steps = [
    {
      number: '01',
      title: 'Choose Your Design',
      description: 'Browse our beautiful collection of divine designs and select the one that resonates with your spirit.',
      icon: '👀',
      delay: 0,
    },
    {
      number: '02',
      title: 'Contact Us',
      description: 'Call or WhatsApp us to discuss your preferences and place your order with ease.',
      icon: '📞',
      delay: 0.2,
    },
    {
      number: '03',
      title: 'Get Your Frame',
      description: 'Receive your premium digital frame and bring divine blessings to your space.',
      icon: '🎁',
      delay: 0.4,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const stepVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="section bg-white/50">
      <div className="container-custom" ref={ref}>
        {/* Section Title */}
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2>How It Works</h2>
          <p>Three simple steps to bring divine frames to your home</p>
        </motion.div>

        {/* Steps Container */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-maroon via-gold to-maroon" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={stepVariants}
              >
                {/* Step Card */}
                <div className="bg-gradient-to-br from-cream to-ivory rounded-2xl p-8 border-2 border-gold/30 hover:border-gold/60 transition-all duration-300 h-full">
                  {/* Number Circle */}
                  <motion.div
                    className="absolute -top-6 left-8 w-16 h-16 rounded-full bg-gradient-to-br from-maroon to-gold flex items-center justify-center text-white font-serif font-bold text-2xl shadow-lg"
                    animate={{
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        '0 10px 25px rgba(107, 62, 46, 0.3)',
                        '0 15px 35px rgba(212, 175, 55, 0.4)',
                        '0 10px 25px rgba(107, 62, 46, 0.3)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 0.5,
                    }}
                  >
                    {step.number}
                  </motion.div>

                  {/* Content */}
                  <div className="pt-8">
                    {/* Icon */}
                    <motion.div
                      className="text-5xl mb-4"
                      animate={{
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                    >
                      {step.icon}
                    </motion.div>

                    {/* Title */}
                    <h3 className="font-serif font-bold text-2xl text-maroon mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-secondary leading-relaxed">
                      {step.description}
                    </p>

                    {/* Arrow indicator (except last) */}
                    {index < steps.length - 1 && (
                      <motion.div
                        className="hidden md:flex justify-end mt-6 text-gold"
                        animate={{
                          x: [0, 10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: step.delay,
                        }}
                      >
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </motion.div>
                    )}

                    {/* Mobile arrow (below card) */}
                    {index < steps.length - 1 && (
                      <motion.div
                        className="md:hidden text-center mt-6 text-gold text-2xl"
                        animate={{
                          y: [0, 5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: step.delay,
                        }}
                      >
                        ↓
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="ornament-divider mt-16 mb-0" />

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-lg text-secondary mb-6">
            Ready to start your journey?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#frames"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Browse Frames
            </motion.a>

            <motion.a
              href="https://wa.me/919187132211?text=Hello%20MK%20Digital%20Frames%2C%20I%20am%20interested%20in%20your%20digital%20frames.%20Please%20share%20more%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              WhatsApp Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
