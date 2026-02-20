import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

const nodes = [
  { size: 320, top: '10%', left: '5%', tx: '60px', ty: '-40px', tx2: '-30px', ty2: '80px', duration: '18s', delay: '0s' },
  { size: 200, top: '60%', left: '80%', tx: '-50px', ty: '30px', tx2: '40px', ty2: '-60px', duration: '22s', delay: '-5s' },
  { size: 250, top: '30%', left: '55%', tx: '30px', ty: '50px', tx2: '-40px', ty2: '-30px', duration: '15s', delay: '-8s' },
  { size: 150, top: '75%', left: '20%', tx: '70px', ty: '-20px', tx2: '-10px', ty2: '40px', duration: '25s', delay: '-12s' },
  { size: 180, top: '15%', left: '70%', tx: '-30px', ty: '60px', tx2: '50px', ty2: '-20px', duration: '20s', delay: '-3s' },
]

const programs = [
  {
    icon: '💻',
    title: 'Full-Stack Web Development',
    description: 'Master React, Node.js, and modern web technologies to build production-ready applications from scratch.',
    color: 'from-brand-600/30 to-purple-800/30',
    border: 'hover:border-brand-500/40',
  },
  {
    icon: '📊',
    title: 'Data Science & AI',
    description: 'Learn Python, machine learning, and data visualization to extract insights and build intelligent systems.',
    color: 'from-blue-600/30 to-cyan-800/30',
    border: 'hover:border-blue-500/40',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Craft beautiful, user-centered digital experiences using Figma, design systems, and research methods.',
    color: 'from-pink-600/30 to-rose-800/30',
    border: 'hover:border-pink-500/40',
  },
]

const stats = [
  { value: '2,400+', label: 'Women Enrolled' },
  { value: '98%', label: 'Completion Rate' },
  { value: '85%', label: 'Job Placement' },
  { value: '40+', label: 'Expert Mentors' },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated nodes background */}
        <div className="node-bg">
          {nodes.map((n, i) => (
            <div
              key={i}
              className="node"
              style={{
                width: n.size,
                height: n.size,
                top: n.top,
                left: n.left,
                '--tx': n.tx,
                '--ty': n.ty,
                '--tx2': n.tx2,
                '--ty2': n.ty2,
                '--duration': n.duration,
                '--delay': n.delay,
              }}
            />
          ))}
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(rgba(128,84,248,0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(128,84,248,0.5) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/50 via-midnight/20 to-midnight" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-600/15 border border-brand-500/25 text-brand-300 text-sm font-mono mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
            Applications Open — Spring 2025 Cohort
          </div>

          <h1 className="section-title text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-tight mb-6">
            Empowering Women
            <br />
            <span className="gradient-text">Through Tech</span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl font-body leading-relaxed max-w-2xl mx-auto mb-10">
            Join a global community of women breaking barriers in technology. Learn, grow, and build the future — together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/courses" className="btn-primary text-base px-10 py-4">
              Explore Courses
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link to="/about" className="btn-outline text-base px-10 py-4">
              Our Mission
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 flex justify-center">
            <div className="flex flex-col items-center gap-1 text-white/20 text-xs font-mono animate-bounce">
              <span>scroll</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-white/5 bg-surface/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-1">{value}</div>
                <div className="text-white/40 text-sm font-body">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-brand-400 text-sm font-mono uppercase tracking-widest mb-3">What We Offer</p>
            <h2 className="section-title mb-4">
              Featured <span className="gradient-text">Programs</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto font-body">
              Carefully designed curricula taught by industry experts, built to take you from beginner to career-ready.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {programs.map(({ icon, title, description, color, border }) => (
              <div
                key={title}
                className={`card-glass card-hover p-8 border border-white/5 ${border} transition-colors cursor-default`}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-2xl mb-5 border border-white/10`}>
                  {icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-3">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed font-body mb-5">{description}</p>
                <Link to="/courses" className="text-brand-400 text-sm font-mono hover:text-brand-300 transition-colors inline-flex items-center gap-1.5">
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/courses" className="btn-outline">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-600 to-purple-700" />
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `radial-gradient(circle at 30% 50%, white 1px, transparent 1px),
                radial-gradient(circle at 70% 80%, white 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }} />
            <div className="relative z-10 px-8 py-16 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-white/70 text-lg font-body mb-8 max-w-xl mx-auto">
                Join thousands of women who have transformed their careers through NextGenShe.
              </p>
              <Link to="/courses" className="inline-flex items-center gap-2 px-10 py-4 bg-white text-brand-700 font-body font-semibold rounded-full hover:bg-white/90 transition-all hover:-translate-y-0.5 shadow-xl shadow-black/20">
                Start Learning Today
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
