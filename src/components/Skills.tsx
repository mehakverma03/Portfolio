'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { 
  ChartBarIcon,
  MegaphoneIcon,
  PaintBrushIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  LightBulbIcon,
  PresentationChartLineIcon,
  ComputerDesktopIcon
} from '@heroicons/react/24/outline'

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeCategory, setActiveCategory] = useState('digital')

  const skillCategories = {
    digital: {
      title: "Digital Marketing",
      icon: GlobeAltIcon,
      color: "google-blue",
      skills: [
        { name: "Google Ads", level: 90, description: "Search, Display, Video campaigns" },
        { name: "SEO/SEM", level: 85, description: "Organic & paid search optimization" },
        { name: "Social Media Marketing", level: 88, description: "Facebook, Instagram, LinkedIn, Twitter" },
        { name: "Email Marketing", level: 82, description: "Automation, segmentation, personalization" },
        { name: "Content Marketing", level: 87, description: "Blog, video, infographic content" },
        { name: "Marketing Automation", level: 80, description: "HubSpot, Marketo, Salesforce" }
      ]
    },
    analytics: {
      title: "Analytics & Data",
      icon: ChartBarIcon,
      color: "google-red",
      skills: [
        { name: "Google Analytics", level: 92, description: "GA4, conversion tracking, attribution" },
        { name: "Data Visualization", level: 85, description: "Tableau, Google Data Studio" },
        { name: "A/B Testing", level: 88, description: "Experiment design and analysis" },
        { name: "Performance Marketing", level: 90, description: "ROI optimization, KPI tracking" },
        { name: "Market Research", level: 83, description: "Consumer insights, competitive analysis" },
        { name: "SQL & Excel", level: 78, description: "Data analysis and reporting" }
      ]
    },
    creative: {
      title: "Creative & Brand",
      icon: PaintBrushIcon,
      color: "google-yellow",
      skills: [
        { name: "Brand Strategy", level: 89, description: "Positioning, messaging, identity" },
        { name: "Creative Direction", level: 86, description: "Campaign concepts, visual storytelling" },
        { name: "Copywriting", level: 91, description: "Ad copy, content writing, storytelling" },
        { name: "Design Tools", level: 75, description: "Canva, Adobe Creative Suite basics" },
        { name: "Video Marketing", level: 80, description: "YouTube, TikTok, Instagram Reels" },
        { name: "Influencer Marketing", level: 84, description: "Partnership strategy, campaign management" }
      ]
    },
    strategy: {
      title: "Strategy & Leadership",
      icon: LightBulbIcon,
      color: "google-green",
      skills: [
        { name: "Marketing Strategy", level: 93, description: "Go-to-market, positioning, planning" },
        { name: "Project Management", level: 87, description: "Agile, cross-functional collaboration" },
        { name: "Budget Management", level: 82, description: "Resource allocation, ROI optimization" },
        { name: "Team Leadership", level: 85, description: "Mentoring, stakeholder management" },
        { name: "Presentation Skills", level: 90, description: "Executive reporting, storytelling" },
        { name: "Customer Journey Mapping", level: 88, description: "Touchpoint optimization, UX" }
      ]
    }
  }

  const certifications = [
    { name: "Google Ads Certified", provider: "Google", icon: "🎯" },
    { name: "Google Analytics Certified", provider: "Google", icon: "📊" },
    { name: "Facebook Blueprint", provider: "Meta", icon: "📱" },
    { name: "HubSpot Content Marketing", provider: "HubSpot", icon: "✍️" },
    { name: "PGP Marketing", provider: "Premier Institute", icon: "🎓" },
    { name: "Digital Marketing Institute", provider: "DMI", icon: "💻" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const SkillBar = ({ skill, delay = 0 }: { skill: any, delay?: number }) => (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-semibold text-gray-900">{skill.name}</h4>
        <span className="text-sm text-gray-600">{skill.level}%</span>
      </div>
      <p className="text-sm text-gray-500 mb-2">{skill.description}</p>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          className={`h-2 rounded-full bg-gradient-to-r ${
            activeCategory === 'digital' ? 'from-google-blue to-blue-400' :
            activeCategory === 'analytics' ? 'from-google-red to-red-400' :
            activeCategory === 'creative' ? 'from-google-yellow to-yellow-400' :
            'from-google-green to-green-400'
          }`}
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  )

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-google-green/10 rounded-full text-google-green font-medium text-sm mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <PresentationChartLineIcon className="w-4 h-4" />
              Skills & Expertise
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Marketing
              <br />
              <span className="google-text-gradient">Competencies</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive skill set spanning digital marketing, data analytics, creative strategy, 
              and leadership – perfectly aligned with Google's marketing excellence standards.
            </p>
          </motion.div>

          {/* Skills Categories */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {Object.entries(skillCategories).map(([key, category]) => (
                <motion.button
                  key={key}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === key
                      ? `bg-${category.color} text-white shadow-lg`
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
                  onClick={() => setActiveCategory(key)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <category.icon className="w-5 h-5" />
                  {category.title}
                </motion.button>
              ))}
            </div>

            {/* Skills Grid */}
            <motion.div 
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid lg:grid-cols-2 gap-8">
                {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} delay={index * 0.1} />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Certifications & <span className="google-text-gradient">Credentials</span>
              </h3>
              <p className="text-gray-600">
                Continuous learning and professional development in marketing excellence
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover-lift group"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                    {cert.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">{cert.name}</h4>
                  <p className="text-gray-500 text-xs">{cert.provider}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Google-specific Skills Highlight */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 p-8 bg-gradient-to-r from-google-blue/5 via-google-red/5 to-google-green/5 rounded-3xl border border-google-blue/10"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                <span className="google-text-gradient">Google-Ready</span> Marketing Skills
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                My expertise directly aligns with Google's marketing tools and methodologies, 
                making me ready to contribute from day one.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-google-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ComputerDesktopIcon className="w-8 h-8 text-google-blue" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Google Ads Expertise</h4>
                  <p className="text-gray-600 text-sm">Advanced knowledge of Google's advertising ecosystem</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-google-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ChartBarIcon className="w-8 h-8 text-google-red" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Analytics Proficiency</h4>
                  <p className="text-gray-600 text-sm">Deep understanding of Google Analytics and data insights</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-google-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <LightBulbIcon className="w-8 h-8 text-google-green" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Innovation Mindset</h4>
                  <p className="text-gray-600 text-sm">Always exploring new marketing technologies and trends</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}