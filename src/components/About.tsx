'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  AcademicCapIcon, 
  ChartBarIcon, 
  LightBulbIcon, 
  RocketLaunchIcon,
  SparklesIcon,
  TrophyIcon
} from '@heroicons/react/24/outline'

export default function About() {
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

  const achievements = [
    {
      icon: AcademicCapIcon,
      title: "PGP in Marketing",
      description: "Comprehensive marketing education covering digital strategies and consumer behavior",
      color: "text-slate-600"
    },
    {
      icon: ChartBarIcon,
      title: "Data Analysis",
      description: "Experience with analytics, performance metrics, and campaign optimization",
      color: "text-slate-600"
    },
    {
      icon: LightBulbIcon,
      title: "Strategic Thinking",
      description: "Developing campaign concepts that align with business objectives",
      color: "text-slate-600"
    },
    {
      icon: RocketLaunchIcon,
      title: "Continuous Learning",
      description: "Committed to staying current with marketing trends and best practices",
      color: "text-slate-600"
    }
  ]

  const values = [
    {
      title: "Analytical",
      description: "Using data and research to inform marketing decisions and measure campaign effectiveness."
    },
    {
      title: "Creative",
      description: "Developing engaging content and campaigns that connect with target audiences."
    },
    {
      title: "Collaborative",
      description: "Working effectively with cross-functional teams to achieve shared marketing objectives."
    },
    {
      title: "Adaptable",
      description: "Staying current with industry trends and adjusting strategies based on market changes."
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-slate-700 font-medium text-sm mb-6"
            >
              About Me
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Background & Experience
            </h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              With a Post Graduate Program in Marketing and hands-on experience in digital campaigns, 
              I bring a blend of academic knowledge and practical expertise to marketing challenges.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Column - Story */}
            <motion.div variants={itemVariants}>
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Journey</h3>
                <p className="text-gray-600 mb-6">
                  My interest in marketing developed during my PGP program, where I explored the 
                  intersection of creativity, data analysis, and consumer behavior. I've since gained 
                  experience in digital marketing, brand strategy, and campaign development.
                </p>
                <p className="text-gray-600 mb-6">
                  I'm drawn to marketing's ability to create meaningful connections between brands 
                  and audiences. My approach combines analytical thinking with creative problem-solving 
                  to develop campaigns that resonate with target demographics and achieve business objectives.
                </p>
                <p className="text-gray-600">
                  I'm interested in opportunities that allow me to apply my marketing education 
                  and develop my skills further in data-driven marketing, digital strategy, 
                  and brand development within innovative organizations.
                </p>
              </div>

              {/* Career Focus Section */}
              <motion.div 
                className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-200"
                transition={{ duration: 0.2 }}
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <TrophyIcon className="w-5 h-5 text-slate-600" />
                  Career Focus
                </h4>
                <p className="text-gray-600">
                  I'm seeking roles that combine strategic thinking with hands-on execution, 
                  particularly in digital marketing, campaign optimization, and data analysis. 
                  I value collaborative environments that encourage continuous learning and innovation.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Achievements Grid */}
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover-lift group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <achievement.icon className={`w-8 h-8 ${achievement.color} mb-4 group-hover:scale-110 transition-transform`} />
                    <h4 className="font-semibold text-gray-900 mb-2">{achievement.title}</h4>
                    <p className="text-gray-600 text-sm">{achievement.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Professional Values */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Professional Values
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Core principles that guide my approach to marketing and professional development
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-200"
                  variants={itemVariants}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center bg-slate-200">
                    <div className="w-6 h-6 rounded-full bg-slate-600"></div>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}