import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function CategoriesSection() {
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

  const categories = [
    { name: 'Ganesha', emoji: '🐘', color: '#FBD874' },
    { name: 'Shiva', emoji: '🕉️', color: '#9F7AEA' },
    { name: 'Vishnu', emoji: '🔱', color: '#4299E1' },
    { name: 'Lakshmi', emoji: '👑', color: '#F687B3' },
    { name: 'Durga', emoji: '⚔️', color: '#ED8936' },
    { name: 'Krishna', emoji: '🎺', color: '#667EEA' },
    { name: 'Hanuman', emoji: '💪', color: '#F56565' },
    { name: 'Venkateswara', emoji: '⛩️', color: '#ECC94B' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
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
          <h2>Explore Categories</h2>
          <p>Find your favorite deity and divine artwork</p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              className="group relative"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Circle Card */}
              <div className="relative w-full aspect-square">
                {/* Background circle */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-br opacity-80 flex items-center justify-center cursor-pointer shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${category.color}, ${category.color}40)`,
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: `0 20px 40px ${category.color}60`,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Emoji */}
                  <motion.div
                    className="text-6xl"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      repeatDelay: 0.5,
                    }}
                  >
                    {category.emoji}
                  </motion.div>

                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle, ${category.color}40 0%, transparent 70%)`,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Label */}
                <motion.div
                  className="absolute -bottom-8 left-0 right-0 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-semibold text-maroon">{category.name}</p>
                </motion.div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="ornament-divider mt-16 mb-0" />

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-lg text-secondary mb-6">
            Want to see more designs in any category?
          </p>

          <motion.a
            href="https://wa.me/919187132211?text=Hello%20MK%20Digital%20Frames%2C%20I%20would%20like%20to%20explore%20more%20designs%20in%20a%20specific%20category."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Browse All Designs
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
