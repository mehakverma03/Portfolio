'use client'

import { motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { 
  ArrowLeftIcon,
  SparklesIcon,
  PlayIcon,
  FolderIcon
} from '@heroicons/react/24/outline'
import { curatedItems, sections, type WorkItem } from '@/data/workItems'

export default function Work() {
  const [activeSection, setActiveSection] = useState<string>(sections[0])
  const categories = sections

  // Remote items from Google Sheet (fallback to curated)
  const [allItems, setAllItems] = useState<WorkItem[]>(curatedItems)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  // Visible counts per section for Load More
  const initialVisible = 9
  const [visibleBySection, setVisibleBySection] = useState<Record<string, number>>({
    'UGC': initialVisible,
    'Video Content': initialVisible,
    'Campaign Posts': initialVisible
  })

  const [openEmbedUrl, setOpenEmbedUrl] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    let cancelled = false
    const load = async () => {
      try {
        setLoading(true)
        const res = await fetch('/api/work-items', { cache: 'no-store' })
        const json = await res.json()
        if (!cancelled && Array.isArray(json.items) && json.items.length) {
          setAllItems(json.items)
        }
      } catch (e) {
        if (!cancelled) setError('Failed to load latest items; showing curated selection')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => { cancelled = true }
  }, [])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (!mounted) return
    const body = document.body
    if (openEmbedUrl) {
      body.classList.add('overflow-hidden')
    } else {
      body.classList.remove('overflow-hidden')
    }
    return () => body.classList.remove('overflow-hidden')
  }, [openEmbedUrl, mounted])

  const computeEmbed = (url: string): string | null => {
    try {
      const u = new URL(url)
      if (u.hostname.includes('instagram.com')) {
        // Normalize path like /reel/{code}/ or /p/{code}/ to /embed
        const parts = u.pathname.split('/').filter(Boolean)
        if (parts.length >= 2) {
          const type = parts[0] // reel | p | tv
          const code = parts[1]
          return `https://www.instagram.com/${type}/${code}/embed`
        }
      }
      if (u.hostname.includes('facebook.com') || u.hostname.includes('fb.watch')) {
        const encoded = encodeURIComponent(url)
        return `https://www.facebook.com/plugins/video.php?href=${encoded}&show_text=false&width=360`
      }
      return null
    } catch {
      return null
    }
  }

  const isValidHttpUrl = (value?: string): boolean => {
    if (!value) return false
    try {
      const u = new URL(value)
      return u.protocol === 'http:' || u.protocol === 'https:'
    } catch {
      return false
    }
  }

  const isRedundantPageLink = (pageLink?: string, link?: string): boolean => {
    if (!pageLink || !link) return false
    try {
      const a = new URL(pageLink)
      const b = new URL(link)
      // Hide Page chip if both URLs share the same hostname (e.g., both Instagram)
      // or they are exactly equal
      if (a.href === b.href) return true
      if (a.hostname === b.hostname) return true
      return false
    } catch {
      return false
    }
  }

  const sectionItems = useMemo(() => allItems.filter(i => i.section === activeSection), [allItems, activeSection])
  const visibleCount = visibleBySection[activeSection] ?? initialVisible
  const workItems = sectionItems.slice(0, visibleCount)

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
            <Link href="/experience" className="text-gray-600 hover:text-blue-600 transition-colors">Experience</Link>
            <Link href="/brands" className="text-gray-600 hover:text-blue-600 transition-colors">Brands</Link>
            <Link href="/work" className="text-blue-600 font-semibold">Work</Link>
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
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full text-blue-600 font-medium text-sm mb-8 bg-white/60 border border-white/30"
              whileHover={{ scale: 1.05 }}
            >
              <FolderIcon className="w-4 h-4" />
              Personal Projects & College Work
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-black text-gray-800 mb-6 leading-tight">
              Creative <span className="genz-text-gradient">Portfolio</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From college club initiatives to extracurricular projects, here&apos;s a collection of my personal work, 
              creative endeavors, and contributions to campus life ✨
            </p>
          </motion.div>

          {/* Sections Tabs */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category as string}
                onClick={() => setActiveSection(category as string)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeSection === category
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white neon-glow'
                    : 'glass-morphism text-gray-700 border border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-400/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Featured Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {workItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="group relative overflow-hidden rounded-3xl glass-morphism border border-white/10 hover:border-cyan-400/50 transition-all duration-500 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  y: -10,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
                }}
                onClick={() => {
                  if (item.link) {
                    const embed = computeEmbed(item.link)
                    if (embed) setOpenEmbedUrl(embed)
                  }
                }}
              >
                {/* Thumbnail */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br from-cyan-500 to-teal-500 opacity-80`}></div>
                  {/* Inline preview (no interaction) */}
                  {/* Inline preview only when explicit previewVideo provided */}
                  {item.previewVideo ? (
                    <div className="absolute inset-0">
                      {/* Fill the whole thumbnail with a centered 9:16 video */}
                      <div className="absolute inset-0 bg-black/10" />
                      <div className="h-full w-full flex items-center justify-center">
                        <video
                          src={item.previewVideo}
                          className="h-full rounded-xl shadow-lg"
                          autoPlay
                          muted
                          loop
                          playsInline
                        />
                      </div>
                    </div>
                  ) : item.link && computeEmbed(item.link) ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[60%] max-w-[220px] aspect-[9/16] rounded-xl overflow-hidden shadow-lg pointer-events-none">
                        <iframe
                          src={`${computeEmbed(item.link) || ''}`}
                          className="w-full h-full"
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                        />
                      </div>
                    </div>
                  ) : null}
                  {/* Always-visible badges */}
                  <div className="absolute top-4 left-4">
                    {item.section === 'UGC' || item.section === 'Video Content' ? (
                      <div className="w-9 h-9 bg-white/25 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30">
                        <PlayIcon className="w-5 h-5 text-white ml-0.5" />
                      </div>
                    ) : (
                      <div className="w-9 h-9 bg-white/25 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30">
                        <SparklesIcon className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-xl rounded-full text-white text-xs font-medium border border-white/20">
                      {item.platform}
                    </span>
                  </div>
                  {/* Bottom title strip for readability */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm text-white px-4 py-3">
                    <div className="text-sm opacity-80">{item.section}</div>
                    <div className="text-base font-semibold truncate">{item.title}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">{item.workDone}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {isValidHttpUrl(item.pageLink) && !isRedundantPageLink(item.pageLink, item.link) ? (
                      <a href={item.pageLink} target="_blank" rel="noreferrer" className="px-3 py-1 bg-white/50 rounded-full text-xs text-gray-700 border border-gray-200">Page</a>
                    ) : null}
                    {isValidHttpUrl(item.link) ? (
                      <a href={item.link} target="_blank" rel="noreferrer" className="px-3 py-1 bg-white/50 rounded-full text-xs text-gray-700 border border-gray-200">View</a>
                    ) : null}
                  </div>
                </div>

                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 to-teal-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl`}></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Sectioned List removed as main grid is now filtered by section */}

          {/* Load More */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 neon-glow flex items-center gap-3 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={sectionItems.length <= visibleCount}
              onClick={() => {
                setVisibleBySection(prev => ({
                  ...prev,
                  [activeSection]: (prev[activeSection] ?? initialVisible) + 9
                }))
              }}
            >
              <SparklesIcon className="w-5 h-5" />
              Load More Projects
            </motion.button>
            {loading ? (
              <div className="mt-4 text-sm text-gray-600">Loading latest items…</div>
            ) : null}
            {error ? (
              <div className="mt-2 text-xs text-gray-500">{error}</div>
            ) : null}
          </motion.div>

          {/* Instagram Embed Modal */}
          {mounted && openEmbedUrl ? createPortal(
            <div className="fixed inset-0 z-[2000] flex items-center justify-center">
              <motion.div 
                className="absolute inset-0 bg-black/60"
                onClick={() => setOpenEmbedUrl(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20, rotate: -1 }}
                animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="relative w-[min(440px,96vw)]"
                style={{
                  paddingTop: 'max(env(safe-area-inset-top), 0px)',
                  paddingBottom: 'max(env(safe-area-inset-bottom), 0px)'
                }}
              >
                {/* Phone glow */}
                <div className="absolute -inset-3 bg-gradient-to-br from-cyan-400/30 via-fuchsia-400/25 to-pink-400/30 blur-3xl -z-10" />
                {/* Phone chassis */}
                <div className="relative mx-auto bg-black rounded-[2rem] border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.6)] p-3">
                  {/* Notch */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-1.5 w-28 h-5 bg-black rounded-b-2xl border border-white/10" />
                  {/* Buttons */}
                  <div className="absolute -left-1 top-24 h-16 w-1.5 rounded-r bg-gray-700/60" />
                  <div className="absolute -right-1 top-28 h-10 w-1.5 rounded-l bg-gray-700/60" />
                  {/* Screen */}
                  <div className="relative w-full aspect-[9/16] bg-black rounded-[1.5rem] overflow-hidden">
                    <iframe
                      src={openEmbedUrl || ''}
                      className="w-full h-full"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share; fullscreen"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                    />
                  </div>
                </div>
              </motion.div>
            </div>, document.body) : null}

          {/* CTA */}
          <motion.div 
            className="text-center mt-16 p-8 glass-morphism rounded-3xl border border-cyan-400/20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Love what you see? Let&apos;s create something amazing together! 🚀
            </h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              I&apos;m always excited to work on new projects and bring fresh ideas to life. 
              Whether it&apos;s a viral campaign or a complete brand strategy, let&apos;s make it happen!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 neon-glow"
              >
                Start a Project
              </Link>
              
              <Link 
                href="/experience"
                className="glass-morphism text-gray-700 px-8 py-4 rounded-full font-semibold text-lg border border-cyan-400/50 hover:border-cyan-400 transition-all duration-300"
              >
                View Experience
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
