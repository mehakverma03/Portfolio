'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  BriefcaseIcon,
  CalendarIcon,
  TrophyIcon,
  ChartBarIcon,
  LightBulbIcon,
  UsersIcon,
  SparklesIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline'

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      id: 1,
      company: 'TechCorp Solutions',
      role: 'Digital Marketing Intern',
      duration: 'Jun 2024 - Aug 2024',
      location: 'Mumbai, India',
      type: 'Internship',
      description: 'Led social media campaigns that increased brand engagement by 250% and managed content creation for 5+ brand accounts.',
      achievements: [
        'Generated 2M+ impressions across social platforms',
        'Created 50+ viral content pieces',
        'Increased follower growth by 180%',
        'Managed ₹2L+ ad spend with 4.2x ROAS'
      ],
      skills: ['Social Media Marketing', 'Content Creation', 'Analytics', 'Paid Advertising'],
      color: 'from-purple-500 to-pink-500',
      icon: BriefcaseIcon
    },
    {
      id: 2,
      company: 'Creative Agency Pro',
      role: 'Marketing Strategy Intern',
      duration: 'Jan 2024 - May 2024',
      location: 'Delhi, India',
      type: 'Internship',
      description: 'Developed comprehensive marketing strategies for startups and established brands, focusing on digital transformation and growth.',
      achievements: [
        'Crafted strategies for 8+ client brands',
        'Improved client conversion rates by 65%',
        'Led market research for new product launches',
        'Presented to C-level executives'
      ],
      skills: ['Strategy Planning', 'Market Research', 'Brand Development', 'Client Relations'],
      color: 'from-blue-500 to-cyan-500',
      icon: LightBulbIcon
    },
    {
      id: 3,
      company: 'StartupHub Accelerator',
      role: 'Growth Marketing Intern',
      duration: 'Aug 2023 - Dec 2023',
      location: 'Bangalore, India',
      type: 'Internship',
      description: 'Worked with early-stage startups to develop and execute growth marketing strategies, focusing on user acquisition and retention.',
      achievements: [
        'Helped 3 startups achieve 300% user growth',
        'Optimized conversion funnels improving rates by 45%',
        'Managed email campaigns with 25% open rates',
        'Created viral TikTok content with 1M+ views'
      ],
      skills: ['Growth Hacking', 'User Acquisition', 'Email Marketing', 'Viral Content'],
      color: 'from-green-500 to-teal-500',
      icon: ChartBarIcon
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-pink-100/50 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.div 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full border border-purple-200 text-purple-700 font-medium text-sm mb-8"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(168, 85, 247, 0.15)" }}
            >
              <BriefcaseIcon className="w-4 h-4" />
              Professional Experience
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Where I've
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Made Impact
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real-world experience building brands, creating viral content, 
              and driving measurable growth across diverse industries
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-200 via-pink-200 to-blue-200 hidden md:block"></div>

            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-white border-4 border-purple-300 rounded-full hidden md:block"></div>

                  {/* Experience Card */}
                  <motion.div 
                    className="md:ml-20 group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                      {/* Background gradient */}
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${exp.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`}></div>
                      
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 relative z-10">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-2xl bg-gradient-to-br ${exp.color} text-white shadow-lg`}>
                            <exp.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">{exp.role}</h3>
                            <div className="flex items-center gap-2 text-lg font-semibold text-gray-700 mb-2">
                              <span>{exp.company}</span>
                              <ArrowTopRightOnSquareIcon className="w-4 h-4 opacity-50" />
                            </div>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <CalendarIcon className="w-4 h-4" />
                                <span>{exp.duration}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <UsersIcon className="w-4 h-4" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4 md:mt-0">
                          <span className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${exp.color} text-white shadow-lg`}>
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 text-lg leading-relaxed mb-8 relative z-10">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-8 relative z-10">
                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <TrophyIcon className="w-5 h-5 text-yellow-500" />
                          Key Achievements
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {exp.achievements.map((achievement, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                              whileHover={{ x: 5 }}
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700 text-sm leading-relaxed">{achievement}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Skills */}
                      <div className="relative z-10">
                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <SparklesIcon className="w-5 h-5 text-purple-500" />
                          Skills Developed
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {exp.skills.map((skill, idx) => (
                            <motion.span
                              key={idx}
                              className="px-4 py-2 bg-white border-2 border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-purple-300 hover:text-purple-600 transition-all cursor-default"
                              whileHover={{ scale: 1.05, y: -2 }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
