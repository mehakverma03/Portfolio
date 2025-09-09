'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { 
  ArrowUpRightIcon,
  ChartBarIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  EyeIcon,
  HandThumbUpIcon,
  ShareIcon,
  TrophyIcon,
  RocketLaunchIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedProject, setSelectedProject] = useState(0)

  const projects = [
    {
      id: 1,
      title: "EcoTech Brand Launch Campaign",
      category: "Brand Strategy & Digital Launch",
      description: "Comprehensive go-to-market strategy for sustainable technology startup targeting millennials and Gen Z consumers.",
      challenge: "Launch a new eco-friendly tech brand in a saturated market with limited budget but high growth expectations.",
      solution: "Developed integrated digital campaign leveraging influencer partnerships, content marketing, and targeted social media advertising with sustainability-focused messaging.",
      results: [
        { metric: "Brand Awareness", value: "340%", description: "increase in 6 months" },
        { metric: "Lead Generation", value: "2,500+", description: "qualified leads" },
        { metric: "Social Engagement", value: "450%", description: "growth in followers" },
        { metric: "ROI", value: "280%", description: "return on ad spend" }
      ],
      tools: ["Google Ads", "Facebook Ads", "Instagram", "Canva", "Google Analytics", "HubSpot"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "google-green"
    },
    {
      id: 2,
      title: "FinTech Mobile App Growth Campaign",
      category: "Performance Marketing & User Acquisition",
      description: "Data-driven user acquisition campaign for a financial technology mobile application targeting young professionals.",
      challenge: "Acquire high-quality users for a new fintech app while maintaining low customer acquisition cost in competitive market.",
      solution: "Implemented multi-channel performance marketing strategy with A/B tested creatives, lookalike audiences, and conversion optimization.",
      results: [
        { metric: "App Downloads", value: "50K+", description: "in 3 months" },
        { metric: "Cost Per Install", value: "65%", description: "reduction" },
        { metric: "User Retention", value: "78%", description: "30-day retention" },
        { metric: "Revenue Growth", value: "420%", description: "quarter-over-quarter" }
      ],
      tools: ["Google Ads", "Apple Search Ads", "Facebook Ads", "Adjust", "Mixpanel", "Figma"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "google-blue"
    },
    {
      id: 3,
      title: "E-commerce Fashion Rebranding",
      category: "Brand Transformation & Content Strategy",
      description: "Complete brand overhaul and digital transformation for established fashion retailer targeting modern consumers.",
      challenge: "Revitalize aging fashion brand to appeal to younger demographics while retaining loyal customer base.",
      solution: "Created cohesive brand identity with modern visual language, influencer collaborations, and user-generated content campaigns.",
      results: [
        { metric: "Brand Sentiment", value: "85%", description: "positive mentions" },
        { metric: "Website Traffic", value: "220%", description: "organic growth" },
        { metric: "Social Media", value: "180%", description: "engagement increase" },
        { metric: "Sales Growth", value: "165%", description: "year-over-year" }
      ],
      tools: ["Adobe Creative Suite", "Shopify", "Instagram", "TikTok", "Google Analytics", "Hootsuite"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "google-red"
    },
    {
      id: 4,
      title: "B2B SaaS Lead Generation Campaign",
      category: "Account-Based Marketing & Lead Nurturing",
      description: "Strategic ABM campaign for enterprise software company targeting Fortune 500 decision-makers.",
      challenge: "Generate high-quality enterprise leads for complex B2B software solution with long sales cycles.",
      solution: "Developed account-based marketing strategy with personalized content, LinkedIn advertising, and marketing automation workflows.",
      results: [
        { metric: "Qualified Leads", value: "400+", description: "enterprise prospects" },
        { metric: "Pipeline Value", value: "$2.8M", description: "generated" },
        { metric: "Conversion Rate", value: "35%", description: "lead-to-opportunity" },
        { metric: "Sales Cycle", value: "40%", description: "reduction" }
      ],
      tools: ["Salesforce", "HubSpot", "LinkedIn Sales Navigator", "Marketo", "Pardot", "Tableau"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "google-yellow"
    }
  ]

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

  const currentProject = projects[selectedProject]

  return (
    <section className="section-padding bg-white">
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-google-red/10 rounded-full text-google-red font-medium text-sm mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <RocketLaunchIcon className="w-4 h-4" />
              Portfolio Projects
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Marketing
              <br />
              <span className="google-text-gradient">Case Studies</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real-world marketing campaigns that delivered measurable results across various industries, 
              showcasing strategic thinking and execution excellence.
            </p>
          </motion.div>

          {/* Project Navigation */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {projects.map((project, index) => (
                <motion.button
                  key={project.id}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 text-left ${
                    selectedProject === index
                      ? `bg-${project.color} text-white shadow-lg`
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedProject(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-sm font-semibold">{project.title}</div>
                  <div className="text-xs opacity-80">{project.category}</div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Selected Project Details */}
          <motion.div
            key={selectedProject}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-100"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Project Image */}
              <div className="relative">
                <motion.div
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-${currentProject.color}/20 to-transparent`}></div>
                </motion.div>
                
                {/* Floating metrics */}
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-lg border border-gray-100"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="flex items-center gap-2">
                    <TrophyIcon className={`w-6 h-6 text-${currentProject.color}`} />
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Campaign Success</div>
                      <div className="text-xs text-gray-500">Measurable Results</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Project Details */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className={`inline-flex items-center gap-2 px-3 py-1 bg-${currentProject.color}/10 text-${currentProject.color} rounded-full text-sm font-medium mb-4`}>
                    <SparklesIcon className="w-4 h-4" />
                    {currentProject.category}
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {currentProject.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {currentProject.description}
                  </p>

                  {/* Challenge & Solution */}
                  <div className="space-y-4 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Challenge
                      </h4>
                      <p className="text-gray-600 text-sm pl-4">{currentProject.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        Solution
                      </h4>
                      <p className="text-gray-600 text-sm pl-4">{currentProject.solution}</p>
                    </div>
                  </div>

                  {/* Tools Used */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3">Tools & Platforms</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentProject.tools.map((tool, index) => (
                        <span
                          key={tool}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Results Grid */}
            <motion.div
              className="mt-12 pt-8 border-t border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Campaign Results & <span className="google-text-gradient">Impact</span>
              </h4>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {currentProject.results.map((result, index) => (
                  <motion.div
                    key={result.metric}
                    className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover-lift"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`text-3xl font-bold text-${currentProject.color} mb-2`}>
                      {result.value}
                    </div>
                    <div className="font-semibold text-gray-900 text-sm mb-1">
                      {result.metric}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {result.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-8 py-4 google-gradient text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Create Your Next Success Story
              <ArrowUpRightIcon className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}