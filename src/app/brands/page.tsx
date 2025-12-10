'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { 
  ArrowLeftIcon,
  SparklesIcon,
  BuildingStorefrontIcon,
  StarIcon,
  XMarkIcon,
  PlayIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'

export default function Brands() {
  const [selectedBrand, setSelectedBrand] = useState<typeof brands[0] | null>(null)
  const [currentReelIndex, setCurrentReelIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (!mounted) return
    const body = document.body
    if (selectedBrand) {
      body.classList.add('overflow-hidden')
    } else {
      body.classList.remove('overflow-hidden')
    }
    return () => body.classList.remove('overflow-hidden')
  }, [selectedBrand, mounted])

  // Reset reel index when brand changes
  useEffect(() => {
    if (selectedBrand) {
      setCurrentReelIndex(0)
    }
  }, [selectedBrand])

  // Keyboard navigation for reels
  useEffect(() => {
    if (!selectedBrand) return

    const handleKeyPress = (e: KeyboardEvent) => {
      const reels = (selectedBrand as any).reelUrls || (selectedBrand.reelUrl ? [selectedBrand.reelUrl] : [])
      if (reels.length <= 1) return

      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        setCurrentReelIndex((prev) => (prev === 0 ? reels.length - 1 : prev - 1))
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        setCurrentReelIndex((prev) => (prev === reels.length - 1 ? 0 : prev + 1))
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [selectedBrand, currentReelIndex])

  // Helper function to compute embed URL
  const computeEmbed = (url: string): string | null => {
    try {
      const u = new URL(url)
      if (u.hostname.includes('instagram.com')) {
        const parts = u.pathname.split('/').filter(Boolean)
        if (parts.length >= 2) {
          const type = parts[0] // reel | p | tv
          const code = parts[1]
          return `https://www.instagram.com/${type}/${code}/embed`
        }
      }
      if (u.hostname.includes('youtube.com') || u.hostname.includes('youtu.be')) {
        let videoId = ''
        if (u.hostname.includes('youtu.be')) {
          videoId = u.pathname.slice(1)
        } else {
          videoId = u.searchParams.get('v') || ''
        }
        if (videoId) {
          return `https://www.youtube.com/embed/${videoId}`
        }
      }
      return null
    } catch {
      return null
    }
  }
  const brands = [
    {
      id: 1,
      name: 'Sugar Free',
      category: 'Health & Wellness',
      description: 'Leading sugar-free brand in India, trusted by millions for healthier lifestyle choices.',
      color: 'from-green-500 to-emerald-500',
      highlight: 'Health Leader',
      logo: '/brands/sugar-free-logo.png',
      status: 'completed' as const,
      reelUrl: 'https://www.instagram.com/reel/DPgxmAtCKbe/',
      reelUrls: [
        'https://www.instagram.com/reel/DPgxmAtCKbe/',
        'https://www.instagram.com/reel/DPlsEkvCKny/',
        'https://www.instagram.com/reel/DP1RkFBEjo6/',
        'https://www.instagram.com/reel/DQOAif1FSId/',
        'https://www.instagram.com/reel/DQb-YdMiJda/',
        'https://www.instagram.com/reel/DQeUdy0EmYE/',
        'https://www.instagram.com/reel/DREKgMpjKhB/',
        'https://www.instagram.com/reel/DRj0IO7Egeo/',
        'https://www.instagram.com/reel/DR4lgEdiBV_/',
        'https://www.instagram.com/reel/DSFakznCBC7/'
      ],
      workDone: [
        'Created 10+ engaging Instagram reels for Sugar Free brand',
        'Developed brand storytelling campaigns through short-form content',
        'Managed end-to-end production, delivering high-quality video assets',
        'Appeared on-camera to boost brand storytelling and engagement',
        'Ideated and scripted marketing concepts for viral content'
      ]
    },
    {
      id: 2,
      name: 'Bajaj Finance',
      category: 'Financial Services',
      description: 'One of India\'s most trusted financial services companies, serving millions of customers.',
      color: 'from-blue-500 to-cyan-500',
      highlight: 'Financial Leader',
      logo: '/brands/Bajaj general insurance.jpeg',
      status: 'completed' as const,
      reelUrl: 'https://www.instagram.com/reel/DSE2vO3k8YG/',
      reelUrls: [
        'https://www.instagram.com/reel/DSE2vO3k8YG/',
        'https://www.instagram.com/reel/DRmb7IKk-hn/',
        'https://www.instagram.com/reel/DRhV8qHE_yg/',
        'https://www.instagram.com/reel/DQQh4sgCEty/'
      ],
      workDone: [
        'Created 4+ engaging Instagram reels for Bajaj Insurance brand',
        'Developed brand storytelling campaigns through short-form content',
        'Managed end-to-end production, delivering high-quality video assets',
        'Appeared on-camera to boost brand storytelling and engagement',
        'Ideated and scripted marketing concepts for viral content'
      ]
    },
    {
      id: 3,
      name: 'Complan',
      category: 'Health & Nutrition',
      description: 'Premium nutrition brand helping children and adults achieve their growth and health goals.',
      color: 'from-orange-500 to-red-500',
      highlight: 'Nutrition Expert',
      logo: '/brands/complan.jpeg',
      status: 'upcoming' as const,
      reelUrl: '', // Add reel/video URL here
      workDone: [
        'Created engaging short-form content',
        'Developed brand storytelling campaigns',
        'Managed content production pipeline'
      ]
    },
    {
      id: 4,
      name: 'Eva for Woman',
      category: 'Personal Care',
      description: 'Dedicated to empowering women through quality personal care products.',
      color: 'from-pink-500 to-rose-500',
      highlight: 'Women\'s Brand',
      logo: '/brands/EVA.jpeg',
      status: 'completed' as const,
      reelUrl: 'https://www.instagram.com/reel/DPIfAtiD7nR/',
      reelUrls: [
        'https://www.instagram.com/reel/DPIfAtiD7nR/',
        'https://www.instagram.com/reel/DO-0e6wj6GR/',
        'https://www.instagram.com/reel/DO29RNYjyD1/'
      ],
      workDone: [
        'Created 3+ engaging Instagram reels for Eva for Woman brand',
        'Developed brand storytelling campaigns through short-form content',
        'Managed end-to-end production, delivering high-quality video assets',
        'Appeared on-camera to boost brand storytelling and engagement',
        'Ideated and scripted marketing concepts for viral content'
      ]
    },
    {
      id: 5,
      name: 'Skore',
      category: 'Personal Care',
      description: 'Modern personal care brand focused on quality and innovation.',
      color: 'from-purple-500 to-indigo-500',
      highlight: 'Modern Care',
      logo: '/brands/skore.jpeg',
      status: 'completed' as const,
      reelUrl: 'https://www.instagram.com/reel/DRXYDPljIyv/',
      reelUrls: [
        'https://www.instagram.com/reel/DRXYDPljIyv/',
        'https://www.instagram.com/reel/DRSMmFZAXcO/',
        'https://www.instagram.com/reel/DQ9pptJEhuv/',
        'https://www.instagram.com/reel/DQ66I4vjMW_/',
        'https://www.instagram.com/reel/DQuJmCODH7Q/',
        'https://www.instagram.com/reel/DP_bEXekiJy/',
        'https://www.instagram.com/reel/DPnthJSEoUA/'
      ],
      workDone: [
        'Created 7+ engaging Instagram reels for Skore brand',
        'Developed brand storytelling campaigns through short-form content',
        'Managed end-to-end production, delivering high-quality video assets',
        'Appeared on-camera to boost brand storytelling and engagement',
        'Ideated and scripted marketing concepts for viral content'
      ]
    },
    {
      id: 7,
      name: 'Lotus',
      category: 'Dairy',
      description: 'Premium dairy brand known for quality and freshness.',
      color: 'from-teal-500 to-cyan-500',
      highlight: 'Premium Quality',
      logo: '/brands/Lotus.jpeg',
      status: 'completed' as const,
      reelUrl: 'https://www.instagram.com/reel/DSFO081AkSf/',
      reelUrls: [
        'https://www.instagram.com/reel/DSFO081AkSf/',
        'https://www.instagram.com/reel/DRzMHCbgtM-/',
        'https://www.instagram.com/reel/DQ_GfqAgpr6/',
        'https://www.instagram.com/reel/DQbL7MIggG9/',
        'https://www.instagram.com/reel/DQTUS-ogrQY/',
        'https://www.instagram.com/reel/DP6X8wKgnh3/',
        'https://www.instagram.com/reel/DPQcgvPAhbM/',
        'https://www.instagram.com/reel/DO8ckuBDzSL/'
      ],
      workDone: [
        'Created 8+ engaging Instagram reels for Lotus brand',
        'Developed brand storytelling campaigns through short-form content',
        'Managed end-to-end production, delivering high-quality video assets',
        'Appeared on-camera to boost brand storytelling and engagement',
        'Ideated and scripted marketing concepts for viral content'
      ]
    },
    {
      id: 8,
      name: 'Cetaphil Baby',
      category: 'Baby Care',
      description: 'Gentle and trusted baby care products designed for delicate skin.',
      color: 'from-blue-500 to-cyan-500',
      highlight: 'Baby Care Expert',
      logo: '/brands/Cetaphil Baby.jpeg',
      status: 'upcoming' as const,
      reelUrl: '', // Add reel/video URL here
      workDone: [
        'Created engaging short-form content',
        'Developed brand storytelling campaigns',
        'Managed content production pipeline'
      ]
    },
    {
      id: 9,
      name: 'BGMI',
      category: 'Gaming',
      description: 'Battlegrounds Mobile India - India\'s most popular mobile battle royale game.',
      color: 'from-orange-500 to-red-500',
      highlight: 'Gaming Brand',
      logo: '/brands/BGMI.jpeg',
      status: 'upcoming' as const,
      reelUrl: '', // Add reel/video URL here
      workDone: [
        'Created engaging short-form content',
        'Developed brand storytelling campaigns',
        'Managed content production pipeline'
      ]
    }
  ]

  // Separate brands by status and sort alphabetically
  const completedBrands = brands
    .filter((brand) => (brand as any).status === 'completed')
    .sort((a, b) => a.name.localeCompare(b.name))
  const upcomingBrands = brands
    .filter((brand) => (brand as any).status === 'upcoming')
    .sort((a, b) => a.name.localeCompare(b.name))

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-pink-200/40 to-blue-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-200/40 to-teal-200/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-yellow-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-6 left-6 right-6 z-50">
        <div className="glass-card rounded-2xl px-8 py-4 flex justify-between items-center backdrop-blur-xl bg-white/80 border border-white/20 shadow-xl">
          <Link href="/" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors">
            <ArrowLeftIcon className="w-5 h-5" />
            <span className="font-semibold">Back Home</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/experience" className="text-gray-600 hover:text-blue-600 transition-colors">Experience</Link>
            <Link href="/brands" className="text-blue-600 font-semibold">Brands</Link>
            <Link href="/work" className="text-gray-600 hover:text-blue-600 transition-colors">Work</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
          </div>

          <Link 
            href="/contact"
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 bright-glow shadow-lg"
          >
            Hire Me
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full text-blue-600 font-medium text-sm mb-8 bg-white/60 border border-white/30"
              whileHover={{ scale: 1.05 }}
            >
              <BuildingStorefrontIcon className="w-4 h-4" />
              Major Clients
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-black text-gray-800 mb-6 leading-tight">
              Brands I&apos;ve <span className="genz-text-gradient">Worked With</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From health &amp; wellness to financial services, I&apos;ve had the privilege of working with 
              some of India&apos;s most trusted and innovative brands ✨
            </p>
          </motion.div>

          {/* Completed Brands Section */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Completed</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-green-500 via-blue-500 to-transparent"></div>
              <span className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                {completedBrands.length} Brands
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {completedBrands.map((brand, index) => (
              <motion.div
                key={brand.id}
                className="group relative overflow-hidden rounded-3xl glass-card border border-white/10 hover:border-blue-400/50 transition-all duration-500 cursor-pointer bg-white/60"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  y: -10,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                }}
                onClick={() => setSelectedBrand(brand)}
              >
                {/* Brand Header with Gradient */}
                <div className={`relative h-40 bg-gradient-to-r ${brand.color} p-6 flex items-center justify-between`}>
                  <div className="flex items-center gap-4 flex-1">
                    {/* Brand Logo */}
                    <motion.div 
                      className="relative w-16 h-16 rounded-xl bg-white shadow-lg border border-white/30 overflow-hidden flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {brand.logo ? (
                        <Image
                          src={brand.logo}
                          alt={`${brand.name} logo`}
                          fill
                          className="object-contain p-2"
                          onError={(e) => {
                            // Fallback to brand initial if logo doesn't exist
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent && !parent.querySelector('.logo-fallback')) {
                              const fallback = document.createElement('div');
                              fallback.className = 'logo-fallback w-full h-full flex items-center justify-center text-gray-600 font-bold text-lg';
                              fallback.textContent = brand.name.charAt(0);
                              parent.appendChild(fallback);
                            }
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-600 font-bold text-lg">
                          {brand.name.charAt(0)}
                        </div>
                      )}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{brand.name}</h3>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-xl rounded-full text-white text-xs font-medium border border-white/30">
                        {brand.category}
                      </span>
                    </div>
                  </div>
                  <motion.div
                    className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <StarIcon className="w-6 h-6 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">{brand.description}</p>
                  
                  {/* Highlight Badge */}
                  <div className="inline-block">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${brand.color} text-white`}>
                      {brand.highlight}
                    </span>
                  </div>
                </div>

                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${brand.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl`}></div>
              </motion.div>
            ))}
            </div>
          </motion.div>

          {/* Divider */}
          <div className="my-16">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>

          {/* Upcoming/Ongoing Brands Section */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Upcoming / Ongoing</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-orange-500 via-pink-500 to-transparent"></div>
              <span className="px-4 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                {upcomingBrands.length} Brands
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingBrands.map((brand, index) => (
              <motion.div
                key={brand.id}
                className="group relative overflow-hidden rounded-3xl glass-card border border-white/10 hover:border-blue-400/50 transition-all duration-500 cursor-pointer bg-white/60"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  y: -10,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                }}
                onClick={() => setSelectedBrand(brand)}
              >
                {/* Brand Header with Gradient */}
                <div className={`relative h-40 bg-gradient-to-r ${brand.color} p-6 flex items-center justify-between`}>
                  <div className="flex items-center gap-4 flex-1">
                    {/* Brand Logo */}
                    <motion.div 
                      className="relative w-16 h-16 rounded-xl bg-white shadow-lg border border-white/30 overflow-hidden flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {brand.logo ? (
                        <Image
                          src={brand.logo}
                          alt={`${brand.name} logo`}
                          fill
                          className="object-contain p-2"
                          onError={(e) => {
                            // Fallback to brand initial if logo doesn't exist
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent && !parent.querySelector('.logo-fallback')) {
                              const fallback = document.createElement('div');
                              fallback.className = 'logo-fallback w-full h-full flex items-center justify-center text-gray-600 font-bold text-lg';
                              fallback.textContent = brand.name.charAt(0);
                              parent.appendChild(fallback);
                            }
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-600 font-bold text-lg">
                          {brand.name.charAt(0)}
                        </div>
                      )}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{brand.name}</h3>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-xl rounded-full text-white text-xs font-medium border border-white/30">
                        {brand.category}
                      </span>
                    </div>
                  </div>
                  <motion.div
                    className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <StarIcon className="w-6 h-6 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">{brand.description}</p>
                  
                  {/* Highlight Badge */}
                  <div className="inline-block">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${brand.color} text-white`}>
                      {brand.highlight}
                    </span>
                  </div>
                </div>

                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${brand.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl`}></div>
              </motion.div>
            ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div 
            className="text-center mt-16 p-8 glass-morphism rounded-3xl border border-blue-400/20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Want to see your brand here? Let&apos;s collaborate! 🚀
            </h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              I&apos;m always excited to work with innovative brands and create campaigns that make a real impact. 
              Whether it&apos;s a viral campaign or a complete brand strategy, let&apos;s make it happen!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 neon-glow"
              >
                Start a Project
              </Link>
              
              <Link 
                href="/work"
                className="glass-morphism text-gray-700 px-8 py-4 rounded-full font-semibold text-lg border border-blue-400/50 hover:border-blue-400 transition-all duration-300"
              >
                View My Work
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Brand Detail Modal */}
      {mounted && selectedBrand && createPortal(
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
          <motion.div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedBrand(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedBrand(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg border border-gray-200"
            >
              <XMarkIcon className="w-6 h-6 text-gray-700" />
            </button>

            {/* Split Layout */}
            <div className="grid md:grid-cols-2 gap-0 max-h-[90vh]">
              {/* Left Side - Reel/Video */}
              <div className={`relative bg-gradient-to-br ${selectedBrand.color} p-4 flex items-center justify-center overflow-hidden`} style={{ maxHeight: '90vh', minHeight: '500px' }}>
                {(() => {
                  const reels = (selectedBrand as any).reelUrls || (selectedBrand.reelUrl ? [selectedBrand.reelUrl] : [])
                  const currentReel = reels[currentReelIndex]
                  const hasMultipleReels = reels.length > 1
                  
                  if (!currentReel) {
                    return (
                      <div className="text-center text-white">
                        <motion.div
                          className="w-20 h-20 mx-auto mb-4 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <PlayIcon className="w-10 h-10 ml-1" />
                        </motion.div>
                        <p className="text-lg font-medium">Add reel/video URL</p>
                        <p className="text-sm opacity-80 mt-2">Update reelUrl in brand data</p>
                      </div>
                    )
                  }

                  return (
                    <>
                      {/* Navigation Arrows */}
                      {hasMultipleReels && (
                        <>
                          {/* Left Arrow */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              setCurrentReelIndex((prev) => (prev === 0 ? reels.length - 1 : prev - 1))
                            }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg border border-gray-200 hover:scale-110"
                          >
                            <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
                          </button>
                          
                          {/* Right Arrow */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              setCurrentReelIndex((prev) => (prev === reels.length - 1 ? 0 : prev + 1))
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg border border-gray-200 hover:scale-110"
                          >
                            <ChevronRightIcon className="w-6 h-6 text-gray-700" />
                          </button>
                        </>
                      )}

                      {/* Reel Counter */}
                      {hasMultipleReels && (
                        <div className="absolute top-4 left-4 z-20 px-3 py-1.5 bg-black/50 backdrop-blur-xl rounded-full text-white text-sm font-medium border border-white/20">
                          {currentReelIndex + 1} / {reels.length}
                        </div>
                      )}

                      {/* Reel/Video Display */}
                      <div className="w-full h-full flex items-center justify-center" style={{ maxHeight: 'calc(90vh - 80px)', padding: '8px' }}>
                        {computeEmbed(currentReel) ? (
                          <div className="w-full h-full flex items-center justify-center" style={{ maxHeight: '100%' }}>
                            <iframe
                              key={currentReelIndex}
                              src={computeEmbed(currentReel) || ''}
                              className="rounded-2xl"
                              style={{ 
                                width: 'auto',
                                height: '100%',
                                maxWidth: '100%',
                                maxHeight: '100%',
                                aspectRatio: '9/16',
                                border: 'none',
                                display: 'block'
                              }}
                              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                              allowFullScreen
                            />
                          </div>
                        ) : (
                          <video
                            key={currentReelIndex}
                            src={currentReel}
                            className="w-full h-full rounded-2xl object-contain"
                            style={{ maxHeight: '100%' }}
                            controls
                            autoPlay
                            loop
                          />
                        )}
                      </div>
                    </>
                  )
                })()}
              </div>

              {/* Right Side - Work Done */}
              <div className="p-8 md:p-10 bg-white overflow-y-auto" style={{ maxHeight: '90vh' }}>
                <div className="flex items-center gap-4 mb-6">
                  {selectedBrand.logo && (
                    <div className="relative w-16 h-16 rounded-xl bg-gray-100 overflow-hidden flex-shrink-0">
                      <Image
                        src={selectedBrand.logo}
                        alt={`${selectedBrand.name} logo`}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                  )}
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-1">{selectedBrand.name}</h2>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${selectedBrand.color} text-white`}>
                      {selectedBrand.category}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <SparklesIcon className="w-5 h-5 text-blue-600" />
                    What I Did
                  </h3>
                  <ul className="space-y-3">
                    {selectedBrand.workDone.map((work, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-3 text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedBrand.color} mt-2 flex-shrink-0`}></div>
                        <span className="text-base leading-relaxed">{work}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed">{selectedBrand.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>,
        document.body
      )}
    </main>
  )
}

