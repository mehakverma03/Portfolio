'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  AcademicCapIcon,
  ChartBarIcon,
  LightBulbIcon,
  UserGroupIcon,
  GlobeAltIcon,
  HeartIcon,
  SparklesIcon,
  RocketLaunchIcon,
  TrophyIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline'

export default function GoogleAlignment() {
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

  const googleValues = [
    {
      icon: UserGroupIcon,
      title: "Focus on the User",
      myAlignment: "User-Centric Marketing",
      description: "Every campaign I create prioritizes user needs and experiences, ensuring authentic connections between brands and their audiences.",
      examples: ["Persona-driven campaigns", "User journey optimization", "Accessibility-first design"],
      color: "google-blue"
    },
    {
      icon: RocketLaunchIcon,
      title: "It's Best to Do One Thing Really Well",
      myAlignment: "Specialized Excellence",
      description: "Deep expertise in digital marketing with mastery of Google's advertising ecosystem and analytics platforms.",
      examples: ["Google Ads certification", "Advanced GA4 implementation", "Performance marketing focus"],
      color: "google-red"
    },
    {
      icon: LightBulbIcon,
      title: "Fast is Better Than Slow",
      myAlignment: "Agile Marketing Execution",
      description: "Rapid testing, iteration, and optimization to deliver results quickly while maintaining quality standards.",
      examples: ["A/B testing protocols", "Real-time optimization", "Agile campaign management"],
      color: "google-yellow"
    },
    {
      icon: GlobeAltIcon,
      title: "Democracy on the Web",
      myAlignment: "Inclusive Marketing",
      description: "Creating campaigns that reach diverse audiences and promote equal access to information and opportunities.",
      examples: ["Multilingual campaigns", "Diverse representation", "Accessibility compliance"],
      color: "google-green"
    }
  ]

  const apprenticeSkills = [
    {
      category: "Technical Proficiency",
      skills: [
        "Google Ads (Search, Display, Video, Shopping)",
        "Google Analytics 4 & Google Tag Manager",
        "Google Data Studio & Looker Studio",
        "YouTube Ads & Google Marketing Platform"
      ],
      icon: ChartBarIcon,
      color: "bg-google-blue/10 text-google-blue"
    },
    {
      category: "Marketing Strategy",
      skills: [
        "Performance marketing & ROI optimization",
        "Customer acquisition & retention strategies",
        "Brand positioning & messaging",
        "Competitive analysis & market research"
      ],
      icon: LightBulbIcon,
      color: "bg-google-red/10 text-google-red"
    },
    {
      category: "Data & Analytics",
      skills: [
        "Attribution modeling & conversion tracking",
        "Cohort analysis & customer lifetime value",
        "Statistical significance testing",
        "Marketing mix modeling fundamentals"
      ],
      icon: AcademicCapIcon,
      color: "bg-google-yellow/10 text-google-yellow"
    },
    {
      category: "Collaboration & Growth",
      skills: [
        "Cross-functional project management",
        "Stakeholder communication & reporting",
        "Mentoring junior team members",
        "Continuous learning & skill development"
      ],
      icon: UserGroupIcon,
      color: "bg-google-green/10 text-google-green"
    }
  ]

  const apprenticeGoals = [
    {
      title: "Learn from Industry Leaders",
      description: "Absorb knowledge from Google's world-class marketing professionals and contribute to cutting-edge campaigns.",
      icon: "🎯"
    },
    {
      title: "Drive Measurable Impact",
      description: "Apply data-driven strategies to optimize campaigns and contribute to Google's business growth objectives.",
      icon: "📈"
    },
    {
      title: "Innovate Marketing Solutions",
      description: "Explore new marketing technologies and methodologies to stay ahead of industry trends.",
      icon: "💡"
    },
    {
      title: "Build Global Perspective",
      description: "Work on campaigns that reach diverse, global audiences and understand cultural nuances.",
      icon: "🌍"
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-google-blue/10 to-google-red/10 rounded-full font-medium text-sm mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='16' height='16'%3E%3Cpath fill='%234285F4' d='M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z'/%3E%3Cpath fill='%2334A853' d='M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z'/%3E%3Cpath fill='%23FBBC05' d='M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z'/%3E%3Cpath fill='%23EA4335' d='M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z'/%3E%3C/svg%3E" 
                alt="Google" 
                className="w-4 h-4" 
              />
              Google Marketing Apprentice Alignment
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Perfect Fit for
              <br />
              <span className="google-text-gradient">Google's Mission</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              My values, skills, and aspirations align seamlessly with Google's culture and 
              the Marketing Apprentice program's objectives.
            </p>
          </motion.div>

          {/* Google Values Alignment */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Living <span className="google-text-gradient">Google's Values</span>
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                How my marketing philosophy aligns with Google's core principles
              </p>
            </div>

            <div className="space-y-8">
              {googleValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover-lift"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    <div className="text-center lg:text-left">
                      <div className={`w-16 h-16 bg-${value.color}/10 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4`}>
                        <value.icon className={`w-8 h-8 text-${value.color}`} />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                      <p className="text-sm text-gray-500 font-medium">{value.myAlignment}</p>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <p className="text-gray-600 mb-4">{value.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {value.examples.map((example, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 bg-${value.color}/10 text-${value.color} rounded-full text-sm font-medium`}
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Apprentice Program Skills */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                <span className="google-text-gradient">Apprentice-Ready</span> Skill Set
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive marketing competencies that align with Google's apprentice program requirements
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {apprenticeSkills.map((category, index) => (
                <motion.div
                  key={category.category}
                  className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mb-6`}>
                    <category.icon className="w-8 h-8" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h4>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckBadgeIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Apprentice Program Goals */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                My <span className="google-text-gradient">Apprentice Journey</span> Goals
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                What I aim to achieve and contribute during the Google Marketing Apprentice program
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {apprenticeGoals.map((goal, index) => (
                <motion.div
                  key={goal.title}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover-lift group"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {goal.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3">{goal.title}</h4>
                  <p className="text-gray-600 text-sm">{goal.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="text-center p-8 bg-gradient-to-r from-google-blue/5 via-google-red/5 to-google-green/5 rounded-3xl border border-google-blue/10"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full text-gray-700 font-medium text-sm mb-6"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <TrophyIcon className="w-4 h-4 text-google-blue" />
              Ready to Make an Impact
            </motion.div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Let's Build the Future of Marketing Together
            </h3>
            
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              I'm excited to bring my passion, skills, and fresh perspective to Google's marketing team. 
              Together, we can create campaigns that not only drive business results but also make a 
              positive impact on users worldwide.
            </p>
            
            <motion.button
              className="inline-flex items-center gap-2 px-8 py-4 google-gradient text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <SparklesIcon className="w-5 h-5" />
              Start My Google Journey
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}