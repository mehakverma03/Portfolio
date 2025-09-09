'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { 
  ArrowRightIcon,
  MapPinIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
import { 
  HeartIcon,
  StarIcon
} from '@heroicons/react/24/solid'

// Typewriter Effect Component
function TypewriterText({ text, delay = 100 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, delay)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, delay])

  return <span>{displayText}</span>
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-pink-200/40 to-blue-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-200/40 to-teal-200/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-yellow-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -80, 0],
              x: [0, 40, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-6 left-6 right-6 z-50">
        <div className="glass-card rounded-2xl px-8 py-4 flex justify-between items-center shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 genz-gradient rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-gray-800 font-bold text-xl">Mehak</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/experience" className="text-gray-700 hover:text-blue-500 transition-colors font-medium">Experience</Link>
            <Link href="/work" className="text-gray-700 hover:text-purple-500 transition-colors font-medium">Work</Link>
            <Link href="/contact" className="text-gray-700 hover:text-teal-500 transition-colors font-medium">Contact</Link>
          </div>

          <Link 
            href="/contact"
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 bright-glow shadow-lg"
          >
            Hire Me
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center pt-24 md:pt-32">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Profile Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative group">
              {/* Profile Image Container */}
              <motion.div 
                className="relative w-80 h-80 mx-auto lg:w-96 lg:h-96"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 genz-gradient rounded-full blur-xl opacity-30 animate-pulse group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative w-full h-full glass-card rounded-full p-3 shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-white to-gray-100 rounded-full flex items-center justify-center overflow-hidden shadow-inner">
                    {/* Profile Image */}
                    <img 
                      src="/profile.jpg" 
                      alt="Mehak Verma - Marketing Professional" 
                      className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        // Fallback to placeholder if image doesn't load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    {/* Fallback placeholder */}
                    <div className="w-full h-full genz-gradient items-center justify-center text-6xl text-white font-bold hidden">
                      M
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating Status with Enhanced Animation */}
              <motion.div 
                className="absolute -top-4 -right-4 glass-card rounded-2xl px-4 py-2 border border-green-400/60 shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(34, 197, 94, 0.1)" }}
              >
                <div className="flex items-center gap-2 text-green-500">
                  <motion.div 
                    className="w-2 h-2 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="text-sm font-semibold">Available</span>
                </div>
              </motion.div>

              {/* Floating Achievement Badges */}
              <motion.div 
                className="absolute -bottom-2 -left-2 glass-card rounded-2xl px-3 py-2 shadow-lg"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-2 text-purple-600">
                  <span className="text-lg">🏆</span>
                  <span className="text-xs font-semibold">Top Performer</span>
                </div>
              </motion.div>

              <motion.div 
                className="absolute top-1/2 -left-6 glass-card rounded-2xl px-3 py-2 shadow-lg"
                animate={{ x: [0, -5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-2 text-pink-600">
                  <span className="text-lg">✨</span>
                  <span className="text-xs font-semibold">Creative</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Info */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {/* Greeting */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-pink-600 font-medium text-sm mb-6 shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <SparklesIcon className="w-4 h-4" />
              Hey there! 👋
            </motion.div>

            {/* Name with Typewriter Effect */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-800 mb-4 leading-tight">
              I'm <span className="genz-text-gradient">
                <TypewriterText text="Mehak" delay={150} />
              </span>
            </h1>

            {/* Dynamic Title with Animation */}
            <motion.h2 
              className="text-2xl md:text-3xl text-gray-600 mb-6 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="inline-block">Creative Marketing Professional</span>
              <motion.span
                className="ml-2 text-pink-500"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✨
              </motion.span>
            </motion.h2>

            {/* Enhanced Description with Personality */}
            <motion.div 
              className="text-lg text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <p className="mb-4">
                <span className="font-semibold text-gray-800">PGPM Marketing Student</span> ✨ 
                <br />
                <span className="font-semibold text-pink-600">Celebrity Gifting Expert</span> who turns moments into memories 💕
              </p>
            <p className="text-base text-gray-600">
              I create content that doesn't just sell products—it tells stories that connect hearts and build communities. 
              <span className="font-medium text-purple-600"> Currently crafting the next viral campaign! 🚀</span>
            </p>
            
            <motion.div 
              className="mt-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link 
                href="/about" 
                className="inline-flex items-center gap-3 px-6 py-3 glass-card rounded-full text-gray-700 hover:text-purple-600 transition-all duration-300 group shadow-lg hover:shadow-xl hover:scale-105 border border-purple-200/50 hover:border-purple-400/50"
              >
                <SparklesIcon className="w-4 h-4" />
                <span className="font-medium">Learn more about my journey</span>
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            </motion.div>

            {/* Quick Stats */}
            <div className="flex justify-center lg:justify-start gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold genz-text-gradient">100+</div>
                <div className="text-gray-600 text-sm font-medium">Celebrity Stories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold genz-text-gradient">20+</div>
                <div className="text-gray-600 text-sm font-medium">Campaigns</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold genz-text-gradient">200+</div>
                <div className="text-gray-600 text-sm font-medium">Celebs Researched</div>
              </div>
            </div>

            {/* Location Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-700">
                <MapPinIcon className="w-5 h-5 text-purple-500" />
                <span className="font-medium">Mumbai, India</span>
              </div>
            </div>

            {/* Social Links with Enhanced Interactivity */}
            <div className="flex justify-center lg:justify-start gap-4 mb-8">
              <motion.a 
                href="https://linkedin.com/in/mehakkvermaa" 
                target="_blank"
                className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-blue-600 hover:text-white hover:bg-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-bold">in</span>
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/mehakkvermaa/" 
                target="_blank"
                className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-pink-600 hover:text-white hover:bg-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.15, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-bold">ig</span>
              </motion.a>
            </div>

            

            {/* CTA Buttons with Enhanced Interactivity */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/work"
                  className="group bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:from-pink-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-3 justify-center bright-glow hover:shadow-3xl"
                >
                  <StarIcon className="w-5 h-5" />
                  <span>View My Work</span>
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/contact"
                  className="group glass-card text-gray-700 px-8 py-4 rounded-full font-semibold text-lg border border-pink-300/60 hover:border-pink-400 hover:bg-pink-50 transition-all duration-300 flex items-center gap-3 justify-center shadow-lg hover:shadow-xl"
                >
                  <HeartIcon className="w-5 h-5 text-pink-500 group-hover:scale-110 transition-transform" />
                  <span>Let's Connect</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Fun Interactive Element - Current Status */}
            <motion.div 
              className="mt-8 text-center lg:text-left"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm text-gray-600 shadow-lg">
                <motion.div 
                  className="w-2 h-2 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span>Currently: Crafting the next viral campaign 🚀</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}