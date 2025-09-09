'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  PlayIcon, 
  EyeIcon, 
  HeartIcon, 
  ShareIcon,
  SparklesIcon
} from '@heroicons/react/24/solid'

export default function WorkShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const workItems = [
    {
      id: 1,
      type: 'reel',
      title: 'Brand Campaign Reel',
      description: 'Viral marketing campaign that generated 500K+ views',
      thumbnail: '/api/placeholder/400/600',
      views: '524K',
      likes: '12.3K',
      category: 'Social Media',
      color: 'from-pink-500 to-purple-600'
    },
    {
      id: 2,
      type: 'design',
      title: 'Product Launch Campaign',
      description: 'Complete brand identity and launch strategy',
      thumbnail: '/api/placeholder/400/300',
      views: '89K',
      likes: '3.2K',
      category: 'Brand Design',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      type: 'reel',
      title: 'Trend Analysis Video',
      description: 'Market insights that went viral on LinkedIn',
      thumbnail: '/api/placeholder/400/600',
      views: '234K',
      likes: '8.7K',
      category: 'Content Strategy',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      type: 'campaign',
      title: 'Digital Ad Campaign',
      description: '300% ROI increase for e-commerce client',
      thumbnail: '/api/placeholder/400/400',
      views: '156K',
      likes: '5.4K',
      category: 'Performance Marketing',
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 5,
      type: 'reel',
      title: 'Behind the Scenes',
      description: 'Creative process showcase for major brand',
      thumbnail: '/api/placeholder/400/600',
      views: '67K',
      likes: '2.1K',
      category: 'Creative Process',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 6,
      type: 'design',
      title: 'UI/UX Case Study',
      description: 'Complete redesign of mobile app experience',
      thumbnail: '/api/placeholder/400/500',
      views: '45K',
      likes: '1.8K',
      category: 'UX Design',
      color: 'from-indigo-500 to-purple-500'
    }
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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="work" className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-full border border-purple-500/30 text-white font-medium text-sm mb-8"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(168, 85, 247, 0.3)" }}
            >
              <SparklesIcon className="w-4 h-4" />
              Featured Work
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Creative
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From viral reels to strategic campaigns, here's how I bring brands to life 
              and create content that resonates with millions
            </p>
          </motion.div>

          {/* Work Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {workItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500"
                whileHover={{ 
                  scale: 1.02,
                  y: -10,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.5)"
                }}
              >
                {/* Thumbnail */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-80`}></div>
                  
                  {/* Play button overlay */}
                  {item.type === 'reel' && (
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30">
                        <PlayIcon className="w-8 h-8 text-white ml-1" />
                      </div>
                    </motion.div>
                  )}

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-xl rounded-full text-white text-xs font-medium border border-white/20">
                      {item.category}
                    </span>
                  </div>

                  {/* Stats overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 text-white">
                        <EyeIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">{item.views}</span>
                      </div>
                      <div className="flex items-center gap-1 text-white">
                        <HeartIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">{item.likes}</span>
                      </div>
                    </div>
                    <motion.button
                      className="p-2 bg-white/20 backdrop-blur-xl rounded-full border border-white/30 text-white hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ShareIcon className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Hover gradient border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`}></div>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Button */}
          <motion.div 
            className="text-center mt-16"
            variants={itemVariants}
          >
            <motion.button
              className="group relative overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl flex items-center gap-3 mx-auto"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 25px 50px rgba(168, 85, 247, 0.4)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <SparklesIcon className="w-5 h-5 relative z-10" />
              <span className="relative z-10">View All Projects</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}