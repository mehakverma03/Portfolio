'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { 
  ArrowLeftIcon,
  SparklesIcon,
  EnvelopeIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  HeartIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    projectType: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Send email using our API endpoint
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          subject: formData.subject,
          projectType: formData.projectType,
          message: formData.message,
        }),
      })

      const result = await response.json()

      if (result.success) {
        // Show success animation
        setIsSuccess(true)
        
        // Reset form after success
        setTimeout(() => {
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            projectType: '',
            message: ''
          })
          setIsSuccess(false)
        }, 4000)
      } else {
        throw new Error(result.message || 'Failed to send message')
      }
      
    } catch (error) {
      console.error('Error sending email:', error)
      alert('Sorry, there was an error sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 overflow-hidden">
      {/* Success Animation Overlay */}
      {isSuccess && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="glass-card rounded-3xl p-12 text-center bg-white/90 border border-green-200/50 shadow-2xl"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
          >
            <motion.div
              className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", duration: 0.6 }}
            >
              <CheckCircleIcon className="w-12 h-12 text-white" />
            </motion.div>
            
            <motion.h2
              className="text-3xl font-bold text-gray-800 mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Message Sent! 🎉
            </motion.h2>
            
            <motion.p
              className="text-lg text-gray-600 mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Thank you for reaching out! I&apos;ll get back to you within 24 hours.
            </motion.p>
            
            <motion.div
              className="flex items-center justify-center gap-2 text-green-600"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Email sent to mehakverma3901@gmail.com</span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
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
          {[...Array(20)].map((_, i) => (
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
            <Link href="/brands" className="text-gray-600 hover:text-blue-600 transition-colors">Brands</Link>
            <Link href="/work" className="text-gray-600 hover:text-blue-600 transition-colors">Work</Link>
            <Link href="/contact" className="text-blue-600 font-semibold">Contact</Link>
          </div>

          <div className="genz-gradient text-white px-6 py-2 rounded-full font-semibold shadow-md">
            Let&apos;s Talk!
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-6xl">
          
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
              <ChatBubbleLeftRightIcon className="w-4 h-4" />
              Get In Touch
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl font-black text-gray-800 mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Let&apos;s Create Something <span className="genz-text-gradient">Amazing</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Ready to turn your ideas into <span className="font-semibold text-purple-600">viral campaigns</span>? 
              Drop me a message and let&apos;s make some <span className="font-semibold text-pink-600">marketing magic</span> happen! ✨
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Left - Enhanced Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="glass-card rounded-3xl p-8 border border-pink-200/50 bg-white/60 hover:border-pink-400/50 hover:shadow-2xl transition-all duration-300">
                <motion.h2 
                  className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="p-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <PaperAirplaneIcon className="w-8 h-8" />
                  </motion.div>
                  Send Me a Message
                </motion.h2>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input 
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 glass-card rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 border border-pink-200/50 hover:border-pink-300/50"
                        placeholder="Your first name"
                        required
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input 
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 glass-card rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 border border-pink-200/50 hover:border-pink-300/50"
                        placeholder="Your last name"
                        required
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 glass-card rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 border border-pink-200/50 hover:border-pink-300/50"
                      placeholder="your.email@example.com"
                      required
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 glass-card rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 border border-pink-200/50 hover:border-pink-300/50"
                      placeholder="What's this about?"
                      required
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                    <select 
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 glass-card rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 border border-pink-200/50 hover:border-pink-300/50"
                    >
                      <option value="">Select project type</option>
                      <option value="social-media">Social Media Campaign</option>
                      <option value="brand-strategy">Brand Strategy</option>
                      <option value="content-creation">Content Creation</option>
                      <option value="paid-advertising">Paid Advertising</option>
                      <option value="full-service">Full-Service Marketing</option>
                      <option value="consultation">Consultation</option>
                    </select>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tell me about your project</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 glass-card rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 resize-none border border-pink-200/50 hover:border-pink-300/50"
                      placeholder="I'd love to hear about your project goals, target audience, timeline, and budget. The more details, the better I can help!"
                      required
                    ></textarea>
                  </motion.div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-xl font-semibold text-lg shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'genz-gradient text-white hover:shadow-3xl bright-glow'
                    }`}
                    whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <PaperAirplaneIcon className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Right - Enhanced Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Contact Info */}
              <div className="glass-card rounded-3xl p-8 border border-purple-200/50 bg-white/60 hover:border-purple-400/50 hover:shadow-2xl transition-all duration-300 mb-8">
                <motion.h2 
                  className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="p-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                    whileHover={{ rotate: -10, scale: 1.1 }}
                  >
                    <HeartIcon className="w-8 h-8" />
                  </motion.div>
                  Let&apos;s Connect
                </motion.h2>
                
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-center gap-4 p-4 glass-card rounded-xl border border-blue-200/50 hover:border-blue-400/50 hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02, x: 5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <EnvelopeIcon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600">mehakverma3901@gmail.com</p>
                    </div>
                  </motion.div>


                  <motion.div 
                    className="flex items-center gap-4 p-4 glass-card rounded-xl border border-green-200/50 hover:border-green-400/50 hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02, x: 5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center"
                      whileHover={{ rotate: 15, scale: 1.1 }}
                    >
                      <MapPinIcon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Location</h4>
                      <p className="text-gray-600">Mumbai, India</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Enhanced Social Links */}
              <div className="glass-card rounded-3xl p-8 border border-cyan-200/50 bg-white/60 hover:border-cyan-400/50 hover:shadow-2xl transition-all duration-300 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <SparklesIcon className="w-5 h-5 text-cyan-600" />
                  Follow My Journey
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <motion.a 
                    href="https://linkedin.com/in/mehakkvermaa" 
                    target="_blank"
                    className="p-6 glass-card rounded-xl border border-blue-200/50 hover:border-blue-400/50 text-center transition-all duration-300 group"
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <motion.div 
                      className="w-10 h-10 mx-auto mb-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                      whileHover={{ rotate: 10 }}
                    >
                      <span className="font-bold text-white text-lg">in</span>
                    </motion.div>
                    <p className="text-gray-700 text-sm font-medium">LinkedIn</p>
                  </motion.a>

                  <motion.a 
                    href="https://www.instagram.com/mehakkvermaa/" 
                    target="_blank"
                    className="p-6 glass-card rounded-xl border border-pink-200/50 hover:border-pink-400/50 text-center transition-all duration-300 group"
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <motion.div 
                      className="w-10 h-10 mx-auto mb-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                      whileHover={{ rotate: -10 }}
                    >
                      <span className="font-bold text-white text-lg">ig</span>
                    </motion.div>
                    <p className="text-gray-700 text-sm font-medium">Instagram</p>
                  </motion.a>
                </div>
              </div>

              {/* Enhanced Quick Response */}
              <div className="glass-card rounded-3xl p-8 border border-green-200/50 bg-white/60 hover:border-green-400/50 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div 
                    className="w-3 h-3 bg-green-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <h3 className="text-xl font-bold text-gray-800">Quick Response</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  I typically respond within <span className="font-semibold text-green-600">24 hours</span>. For urgent projects, feel free to call me directly!
                </p>
                <div className="flex items-center gap-2 text-green-600 text-sm">
                  <SparklesIcon className="w-4 h-4" />
                  <span className="font-medium">Currently available for new projects</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Fun CTA */}
          <motion.div 
            className="text-center mt-16 p-8 glass-card rounded-3xl border border-pink-200/50 bg-white/60 hover:border-pink-400/50 hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <motion.h2 
              className="text-3xl font-bold text-gray-800 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Not ready to commit? <span className="genz-text-gradient">No worries!</span> 😊
            </motion.h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Follow me on social media for daily <span className="font-semibold text-purple-600">marketing insights</span>, 
              <span className="font-semibold text-pink-600"> behind-the-scenes content</span>, 
              and the occasional meme that&apos;s actually funny!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/work"
                  className="glass-card text-gray-700 px-8 py-4 rounded-full font-semibold text-lg border border-blue-300/60 hover:border-blue-400 hover:text-blue-600 transition-all duration-300 flex items-center gap-3 justify-center"
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
                  href="/about"
                  className="glass-card text-gray-700 px-8 py-4 rounded-full font-semibold text-lg border border-pink-300/60 hover:border-pink-400 hover:text-pink-600 transition-all duration-300 flex items-center gap-3 justify-center"
                >
                  <HeartIcon className="w-5 h-5" />
                  Learn More About Me
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
