'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowLeftIcon,
  SparklesIcon,
  BriefcaseIcon,
  CalendarIcon,
  MapPinIcon,
  TrophyIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'

export default function Experience() {
  const experiences = [
    {
      id: 1,
      company: 'DENTSU',
      role: 'Graduate Trainee',
      duration: 'Sep 2025 - Feb 2026',
      location: 'Mumbai, India',
      description: 'Selected for prestigious 6-month Graduate Trainee program at global advertising agency Dentsu.',
      achievements: [
        'Produced short-form content for 7+ major brands',
        'Appeared on-camera to boost brand storytelling and engagement',
        'Managed end-to-end production, delivering 15 video assets monthly',
        'Ideated and scripted marketing concepts with a 10-member creative team'
      ],
      skills: ['Digital Media Campaigns', 'Copywriting', 'Brand Strategy', 'Scripting & Shooting', 'Trend Analysis'],
      color: 'from-purple-500 to-pink-500',
      highlight: 'Elite Program Selection',
      logo: '/dentsu_logo.jpeg'
    },
    {
      id: 2,
      company: 'GLAD U CAME',
      role: 'Celebrity Gifting Intern',
      duration: 'Feb 2025 - May 2025',
      location: 'Mumbai, India',
      description: 'Specialized in celebrity gifting campaigns for major brands including Domino&apos;s and KFC.',
      achievements: [
        'Secured 100+ celebrity stories for Domino&apos;s campaign',
        'Researched 200+ celebrities for targeted outreach',
        'Secured 10 celebrity endorsements for KFC launch',
        'Best Intern of the Month recognition'
      ],
      skills: ['Celebrity Management', 'Campaign Execution', 'Client Relations', 'Sales'],
      color: 'from-cyan-500 to-teal-500',
      highlight: '100+ Celebrity Stories',
      logo: '/gladucame_logo.jpeg'
    },
    {
      id: 3,
      company: 'THE GURUKUL PRACTICE CENTER',
      role: 'Social Media Intern',
      duration: 'Nov 2021 - April 2022',
      location: 'Mumbai, India',
      description: 'Managed social media content creation and strategy with focus on organic growth.',
      achievements: [
        '50% retention rate for organic content',
        'Created 20+ content pieces',
        'Implemented trending content strategies',
        'Managed community engagement'
      ],
      skills: ['Content Creation', 'Social Media Management', 'Trend Analysis'],
      color: 'from-orange-500 to-red-500',
      highlight: '50% Retention Rate',
      logo: '/TheGurukul.jpeg'
    }
  ]

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
            <Link href="/experience" className="text-blue-600 font-semibold">Experience</Link>
            <Link href="/brands" className="text-gray-600 hover:text-blue-600 transition-colors">Brands</Link>
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
        <div className="container mx-auto px-6 max-w-6xl">
          
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full text-blue-600 font-medium text-sm mb-6 bg-white/60 border border-white/30"
              whileHover={{ scale: 1.05 }}
            >
              <BriefcaseIcon className="w-4 h-4" />
              Professional Experience
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-4 leading-tight">
              Where I&apos;ve <span className="genz-text-gradient">Made Impact</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real-world experience building brands, creating viral content, and driving measurable growth
            </p>
          </motion.div>

          {/* Quick Stats Summary */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              { number: "100+", label: "Celebrity Stories" },
              { number: "10+", label: "Brands Managed" },
              { number: "50%", label: "Content Retention" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass-card rounded-xl p-4 text-center bg-white/60 border border-white/30"
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="text-2xl font-bold genz-text-gradient mb-1">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Experience Cards - Compact Layout */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="glass-card rounded-2xl p-6 bg-white/60 border border-white/30 hover:border-blue-400/50 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  
                  {/* Left - Company Info */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div 
                        className="relative w-16 h-16 rounded-xl bg-white shadow-lg border border-gray-200 overflow-hidden"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          fill
                          className="object-contain p-2"
                        />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{exp.role}</h3>
                        <h4 className="text-lg font-semibold genz-text-gradient">{exp.company}</h4>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-gray-600 text-sm">
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPinIcon className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right - Content */}
                  <div className="flex-1 space-y-4">
                    <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                    
                    {/* Highlight Badge */}
                    <div className="inline-block">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${exp.color} text-white`}>
                        {exp.highlight}
                      </span>
                    </div>

                    {/* Key Achievements - Compact */}
                    <div>
                      <h4 className="text-sm font-bold text-gray-800 mb-2 flex items-center gap-2">
                        <TrophyIcon className="w-4 h-4 text-yellow-600" />
                        Key Achievements
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skills - Compact */}
                    <div>
                      <h4 className="text-sm font-bold text-gray-800 mb-2 flex items-center gap-2">
                        <SparklesIcon className="w-4 h-4 text-purple-600" />
                        Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white/70 border border-gray-200 rounded-full text-xs font-medium text-gray-700 hover:border-purple-300 hover:text-purple-600 transition-all"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/work"
                className="genz-gradient text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                See My Work
              </Link>
              
              <Link 
                href="/contact"
                className="glass-card text-gray-700 px-8 py-4 rounded-full font-semibold text-lg border border-gray-300 bg-white/80 hover:border-blue-400 hover:text-blue-600 transition-all duration-300"
              >
                Let&apos;s Connect
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
