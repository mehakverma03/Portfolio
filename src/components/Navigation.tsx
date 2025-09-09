'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Bars3Icon, XMarkIcon, SparklesIcon } from '@heroicons/react/24/outline'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Work', href: '#work' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-2xl shadow-2xl border border-white/20 rounded-2xl' 
          : 'bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="px-6 md:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className={`font-bold text-lg transition-colors ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Mehak
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-white/10 backdrop-blur-xl rounded-full p-1 border border-white/20">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 hover:bg-white/20 ${
                  scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(item.href)?.scrollIntoView({
                    behavior: 'smooth'
                  })
                }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          <motion.button
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(168, 85, 247, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <SparklesIcon className="w-4 h-4" />
            Let's Talk
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            className={`md:hidden p-3 rounded-full transition-all duration-300 ${
              scrolled 
                ? 'text-gray-900 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10 border border-white/20'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-2 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-xl">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-white/20 ${
                  scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
                }`}
                whileHover={{ x: 5 }}
                onClick={(e) => {
                  e.preventDefault()
                  setIsOpen(false)
                  document.querySelector(item.href)?.scrollIntoView({
                    behavior: 'smooth'
                  })
                }}
              >
                {item.name}
              </motion.a>
            ))}
            <div className="pt-2">
              <button
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                onClick={() => {
                  setIsOpen(false)
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <SparklesIcon className="w-4 h-4" />
                Let's Talk
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}