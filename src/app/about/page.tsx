'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowLeftIcon,
  SparklesIcon,
  AcademicCapIcon,
  LightBulbIcon,
  HeartIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline'

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-pink-200/40 to-blue-200/40 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-200/40 to-teal-200/40 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-yellow-200/30 to-pink-200/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [-50, 50, -50],
            y: [-50, 50, -50]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, 50, 0],
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
            <Link href="/work" className="text-gray-600 hover:text-blue-600 transition-colors">Work</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
          </div>

          <Link 
            href="/contact"
            className="genz-gradient text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 shadow-md"
          >
            Hire Me
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          
          {/* Enhanced Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full text-pink-600 font-medium text-sm mb-8 bg-white/60 border border-pink-200/50 shadow-lg"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 107, 157, 0.1)" }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <SparklesIcon className="w-4 h-4" />
              About Me
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl font-black text-gray-800 mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hey, I'm <span className="genz-text-gradient">Mehak!</span>
            </motion.h1>
            
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-pink-600 transition-colors group"
              >
                <ArrowLeftIcon className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Back to Home</span>
              </Link>
            </motion.div>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Selected Graduate Trainee at <span className="font-semibold text-purple-600">Dentsu</span> (Sep 2025-Feb 2026) and passionate 
              <span className="font-semibold text-pink-600"> PGPM Marketing student</span> at IBS Mumbai with expertise in 
              <span className="font-semibold text-blue-600"> celebrity gifting</span>, content creation, and building authentic 
              brand connections that resonate with audiences.
            </motion.p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            
            {/* Left Column - Story */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h2 
                className="text-3xl font-bold text-gray-800 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                My <span className="genz-text-gradient">Journey</span>
              </motion.h2>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Currently pursuing my <span className="font-semibold text-purple-600">PGPM in Marketing</span> at IBS Mumbai with an impressive 
                  <span className="font-semibold text-pink-600"> 9.36 CGPA</span>, I'm passionate about the intersection of creativity and strategic marketing. 
                  My journey began with a fascination for how brands connect with audiences authentically.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  My experience at <span className="font-semibold text-cyan-600">GLAD U CAME</span> as a Celebrity Gifting Intern was transformative - I secured 
                  <span className="font-semibold text-pink-600"> 100+ celebrity stories</span> for major campaigns including Domino's and KFC, and was recognized 
                  as <span className="font-semibold text-yellow-600">"Best Intern of the Month."</span> This role taught me the power of influencer partnerships 
                  and relationship building in modern marketing.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Beyond academics and internships, I'm actively involved in extracurriculars as 
                  <span className="font-semibold text-blue-600"> Co-head & Social Media Apex</span> of Marketing 360°, 
                  <span className="font-semibold text-green-600"> Video Editor Chief</span> in Branding Team of IBS Mumbai, 
                  and a <span className="font-semibold text-purple-600">UGC Creator</span>. I believe in learning by doing and staying ahead of digital trends.
                </motion.p>
              </div>

              {/* Enhanced Fun Facts */}
              <motion.div 
                className="mt-8 p-6 glass-card rounded-2xl border border-pink-200/50 bg-white/60 hover:border-pink-400/50 hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <HeartIcon className="w-5 h-5 text-pink-500" />
                  Fun Facts About Me
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { icon: "📸", text: "Photography & videography enthusiast" },
                    { icon: "💃", text: "Dancing and modelling in my free time" },
                    { icon: "✈️", text: "Love travelling and exploring new cultures" },
                    { icon: "✍️", text: "Creative writing helps me craft better campaigns" },
                    { icon: "🎬", text: "Expert in Canva, VN Video Editor, InShot, and CapCut" },
                    { icon: "🎨", text: "Passionate about visual storytelling" }
                  ].map((fact, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl hover:from-pink-100 hover:to-purple-100 transition-all duration-300"
                      whileHover={{ x: 5, scale: 1.02 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                    >
                      <span className="text-2xl">{fact.icon}</span>
                      <span className="text-gray-700 text-sm font-medium">{fact.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Skills & Values */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.h2 
                className="text-3xl font-bold text-gray-800 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                What I <span className="genz-text-gradient">Bring</span>
              </motion.h2>
              
              <div className="space-y-6">
                <motion.div 
                  className="p-6 glass-card rounded-2xl border border-blue-200/50 bg-white/60 hover:border-blue-400/50 hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div
                      className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <AcademicCapIcon className="w-6 h-6" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-800">Strategic Thinking</h3>
                  </div>
                  <p className="text-gray-600">
                    With coursework in <span className="font-semibold text-blue-600">Product Management</span>, 
                    <span className="font-semibold text-purple-600"> Marketing Management</span>, and 
                    <span className="font-semibold text-pink-600"> Consumer Behaviour</span>, 
                    I approach every campaign with strategic thinking and data-driven insights.
                  </p>
                </motion.div>

                <motion.div 
                  className="p-6 glass-card rounded-2xl border border-teal-200/50 bg-white/60 hover:border-teal-400/50 hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div
                      className="p-2 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white"
                      whileHover={{ rotate: -10, scale: 1.1 }}
                    >
                      <LightBulbIcon className="w-6 h-6" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-800">Creative Innovation</h3>
                  </div>
                  <p className="text-gray-600">
                    As a <span className="font-semibold text-teal-600">UGC Creator</span> and content specialist, I excel at creating 
                    <span className="font-semibold text-cyan-600"> engaging videos</span>, 
                    <span className="font-semibold text-blue-600"> static posts</span>, and 
                    <span className="font-semibold text-purple-600"> trend-based content</span> that resonates with audiences.
                  </p>
                </motion.div>

                <motion.div 
                  className="p-6 glass-card rounded-2xl border border-orange-200/50 bg-white/60 hover:border-orange-400/50 hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div
                      className="p-2 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 text-white"
                      whileHover={{ rotate: 15, scale: 1.1 }}
                    >
                      <RocketLaunchIcon className="w-6 h-6" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-800">Results-Driven</h3>
                  </div>
                  <p className="text-gray-600">
                    My celebrity gifting campaigns delivered measurable results - 
                    <span className="font-semibold text-pink-600"> 100+ celebrity stories</span>, 
                    <span className="font-semibold text-green-600"> 50% content retention rate</span>, and recognition as 
                    <span className="font-semibold text-yellow-600"> "Best Intern of the Month."</span>
                  </p>
                </motion.div>
              </div>

              {/* Enhanced Current Focus */}
              <motion.div 
                className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-2xl border border-cyan-400/30 hover:border-cyan-400/50 hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <RocketLaunchIcon className="w-5 h-5 text-cyan-600" />
                  Currently Focused On
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { icon: "🏢", text: "Starting Graduate Trainee program at Dentsu (Sep 2025)", color: "text-blue-600" },
                    { icon: "🎓", text: "Completing PGPM in Marketing (Current CGPA: 9.36)", color: "text-purple-600" },
                    { icon: "✍️", text: "Developing copywriting and art direction skills", color: "text-pink-600" },
                    { icon: "📊", text: "Mastering brand strategy and client servicing", color: "text-green-600" },
                    { icon: "🎬", text: "Advanced digital media campaign execution", color: "text-cyan-600" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-white/50 rounded-xl hover:bg-white/70 transition-all duration-300"
                      whileHover={{ x: 5, scale: 1.02 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <span className={`text-gray-700 text-sm font-medium ${item.color}`}>{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Enhanced CTA */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.h2 
              className="text-3xl font-bold text-gray-800 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              Ready to create something <span className="genz-text-gradient">amazing</span> together?
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Let's connect and build something extraordinary! I'm always excited to collaborate on 
              creative projects and innovative marketing campaigns.
            </motion.p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/work"
                  className="genz-gradient text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 justify-center"
                >
                  <SparklesIcon className="w-5 h-5" />
                  Check Out My Work
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/contact"
                  className="glass-card text-gray-700 px-8 py-4 rounded-full font-semibold text-lg border border-pink-300/60 bg-white/80 hover:border-pink-400 hover:text-pink-600 transition-all duration-300 flex items-center gap-3 justify-center"
                >
                  <HeartIcon className="w-5 h-5" />
                  Let's Talk
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
