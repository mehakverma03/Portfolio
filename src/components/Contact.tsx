'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowRightIcon,
  SparklesIcon,
  HeartIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline'
import { 
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
  GithubIcon
} from 'lucide-react'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const socialLinks = [
    { name: 'LinkedIn', icon: LinkedinIcon, href: '#', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: TwitterIcon, href: '#', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: InstagramIcon, href: '#', color: 'hover:text-pink-600' },
    { name: 'GitHub', icon: GithubIcon, href: '#', color: 'hover:text-gray-900' },
  ]

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      title: "Email",
      value: "marketing.professional@email.com",
      href: "mailto:marketing.professional@email.com",
      color: "text-google-blue"
    },
    {
      icon: PhoneIcon,
      title: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
      color: "text-google-red"
    },
    {
      icon: MapPinIcon,
      title: "Location",
      value: "Mumbai, India",
      href: "#",
      color: "text-google-green"
    }
  ]

  const googleReasons = [
    {
      title: "Perfect Cultural Fit",
      description: "Shared values of innovation, inclusion, and user-first thinking"
    },
    {
      title: "Ready to Contribute",
      description: "Google-certified with hands-on experience in Google's marketing tools"
    },
    {
      title: "Growth Mindset",
      description: "Passionate about continuous learning and making meaningful impact"
    },
    {
      title: "Data-Driven Approach",
      description: "Strong analytical skills with focus on measurable business outcomes"
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-google-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-google-red/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-google-yellow/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium text-sm mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <RocketLaunchIcon className="w-4 h-4" />
              Let's Connect
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Join
              <br />
              <span className="google-text-gradient">Google's Team</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I'm excited about the opportunity to contribute to Google's marketing excellence 
              and help drive growth for products that impact billions of users worldwide.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            {/* Left Column - Why Google */}
            <motion.div variants={itemVariants}>
              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <HeartIcon className="w-8 h-8 text-google-red" />
                  Why Google Marketing Apprentice?
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Google represents the pinnacle of marketing innovation, where data meets creativity 
                  to create experiences that truly matter. The apprentice program offers the perfect 
                  opportunity to learn from the best while contributing to meaningful projects.
                </p>
              </div>

              <div className="space-y-6">
                {googleReasons.map((reason, index) => (
                  <motion.div
                    key={reason.title}
                    className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${
                        index === 0 ? 'bg-google-blue' :
                        index === 1 ? 'bg-google-red' :
                        index === 2 ? 'bg-google-yellow' :
                        'bg-google-green'
                      }`}></div>
                      {reason.title}
                    </h4>
                    <p className="text-gray-300 text-sm">{reason.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Let's Start the Conversation
                </h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-google-blue focus:border-transparent transition-all duration-300"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-google-blue focus:border-transparent transition-all duration-300"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-google-blue focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-google-blue focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about the Google Marketing Apprentice opportunity..."
                    ></textarea>
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="w-full google-gradient text-white py-4 rounded-lg font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                    <ArrowRightIcon className="w-5 h-5" />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="grid md:grid-cols-3 gap-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`w-12 h-12 ${info.color.replace('text-', 'bg-')}/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <info.icon className={`w-6 h-6 ${info.color}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{info.title}</h4>
                    <p className="text-gray-300 text-sm">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h3 className="text-2xl font-bold mb-8">Connect With Me</h3>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className={`w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 hover:bg-white/20`}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div 
            variants={itemVariants}
            className="text-center p-8 bg-gradient-to-r from-google-blue/10 via-google-red/10 to-google-green/10 rounded-3xl border border-white/10"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white font-medium text-sm mb-4"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <SparklesIcon className="w-4 h-4" />
              Available Immediately
            </motion.div>
            
            <h3 className="text-3xl font-bold mb-4">
              Ready to Make an Impact at <span className="google-text-gradient">Google</span>
            </h3>
            
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              I'm excited to bring my marketing expertise, passion for innovation, and 
              commitment to excellence to Google's marketing team. Let's create something amazing together!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 google-gradient text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-2 justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
                <ArrowRightIcon className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                className="px-8 py-4 bg-white/10 text-white rounded-full font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Call
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}