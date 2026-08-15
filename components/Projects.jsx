'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    title: 'ClubFlow',
    desc: 'Nightclub management system that digitizes ordering, inventory, sales reconciliation, and staff accountability. Features real-time waiter/barman workflows, role-based access, audit history, and automated inventory reconciliation.',
    tags: ['Next.js', 'TypeScript', 'NestJS', 'PostgreSQL', 'Prisma', 'WebSockets', 'Tailwind CSS'],
    github: 'https://github.com/Nigus-Solomon-Dev/ClubFlow',
    gradient: 'from-[#1a2a4a] to-[#0d1f3c]',
    initials: 'CF',
    problem: 'Manual nightclub operations',
    solution: 'Real-time digital system',
  },
  {
    title: 'Melody',
    desc: 'Subscription-based music streaming SaaS with search, recommendations, and playback. Features 4 pricing tiers, Stripe payments & webhooks, billing portal, and tier-gated access to full playback, lyrics, and lossless audio.',
    tags: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'JWT'],
    github: 'https://github.com/Nigus-Solomon-Dev/melody-music-saas',
    live: 'https://melody-music-saas.vercel.app',
    gradient: 'from-[#2a1a4a] to-[#4a2a8a]',
    initials: 'ML',
    problem: 'No accessible music SaaS',
    solution: 'Stripe-powered streaming',
  },
  {
    title: 'JobLink',
    desc: 'Full-stack job marketplace connecting Ethiopian job seekers with employers. Features job posting, search & filters, applications, messaging, notifications, interview scheduling, dashboards, resume uploads, and Telegram bot integration.',
    tags: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'JWT', 'Cloudinary'],
    github: 'https://github.com/Nigus-Solomon-Dev/joblink',
    gradient: 'from-[#1a3a2a] to-[#2a6a4a]',
    initials: 'JL',
    problem: 'Fragmented job market',
    solution: 'Full-stack marketplace',
  },
  {
    title: 'Travel Value',
    desc: 'Cross-platform flight booking app that reduces the booking flow to 3-4 steps, completed in under 2 minutes. Integrates real REST APIs for flight search, price verification, hold, and payment.',
    tags: ['Flutter', 'Dart', 'GetX', 'REST APIs'],
    github: 'https://github.com/Nigus-Solomon-Dev/travel-value-app',
    gradient: 'from-[#1a2a4a] to-[#2d4a8a]',
    initials: 'TV',
    problem: 'Slow booking flows',
    solution: 'Under 2 minutes',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-24 bg-[#f8f9fa]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-[#c8960c] font-semibold text-sm uppercase tracking-widest mb-4">
            <span className="w-8 h-0.5 bg-[#c8960c]" />
            Featured Projects
            <span className="w-8 h-0.5 bg-[#c8960c]" />
          </span>
          <h2 className="text-4xl font-extrabold text-[#1a2a4a]">
            Things I've Built
          </h2>
          <p className="text-[#5a6a8a] mt-4 max-w-xl mx-auto text-lg">
            A selection of projects that showcase my range across mobile and web development.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-400"
            >
              {/* Card top — gradient visual */}
              <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                <span className="text-6xl font-black text-white/10 absolute right-4 bottom-2 select-none tracking-tight">
                  {project.initials}
                </span>
                <span className="text-4xl font-black text-white/90 z-10 tracking-tight">
                  {project.initials}
                </span>

                {/* Problem/Solution badge */}
                <div className="absolute top-4 left-4 flex flex-col gap-1">
                  <span className="text-xs bg-black/20 text-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    {project.problem}
                  </span>
                  <span className="text-xs bg-white/20 text-white backdrop-blur-sm px-2.5 py-1 rounded-full font-medium">
                    {project.solution}
                  </span>
                </div>

                {/* GitHub link — appears on hover */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#1a2a4a] transition-all duration-300 opacity-0 group-hover:opacity-100"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <GitHubIcon />
                </a>
              </div>

              {/* Card body */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1a2a4a] mb-2 group-hover:text-[#c8960c] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#5a6a8a] text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-[#f8f9fa] text-[#1a2a4a] border border-gray-200 px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-[#1a2a4a] hover:text-[#c8960c] transition-colors"
                  >
                    <GitHubIcon />
                    View on GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[#c8960c] hover:underline"
                    >
                      Live Demo →
                    </a>
                  )}
                  {!project.live && <div className="w-8 h-0.5 bg-[#c8960c] group-hover:w-16 transition-all duration-300" />}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Nigus-Solomon-Dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-[#1a2a4a] text-[#1a2a4a] font-semibold px-8 py-3 rounded-full hover:bg-[#1a2a4a] hover:text-white transition-all duration-300"
          >
            <GitHubIcon />
            See All Projects
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}
