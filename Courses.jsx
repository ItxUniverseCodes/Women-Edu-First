import { useState } from 'react'
import CourseCard from '../components/CourseCard'

const allCourses = [
  {
    id: 1,
    title: 'Full-Stack Web Development Bootcamp',
    description: 'Build complete web applications using React, Node.js, Express, and MongoDB. From frontend to backend, master modern full-stack development.',
    image: 'linear-gradient(135deg, #1e3a5f, #2d1b69)',
    level: 'Beginner',
    duration: '12 weeks',
    category: 'Development',
  },
  {
    id: 2,
    title: 'Python for Data Science & Machine Learning',
    description: 'Dive into Python, pandas, scikit-learn, and TensorFlow. Learn to build predictive models and extract insights from real-world datasets.',
    image: 'linear-gradient(135deg, #1a4731, #0d3b6e)',
    level: 'Intermediate',
    duration: '10 weeks',
    category: 'Data Science',
  },
  {
    id: 3,
    title: 'UI/UX Design Fundamentals',
    description: 'Master Figma, design thinking, user research, prototyping, and usability testing to create intuitive and beautiful digital products.',
    image: 'linear-gradient(135deg, #4a1942, #2d1b69)',
    level: 'Beginner',
    duration: '8 weeks',
    category: 'Design',
  },
  {
    id: 4,
    title: 'Cybersecurity Essentials',
    description: 'Learn ethical hacking, network security, threat modeling, and incident response to protect systems in the real world.',
    image: 'linear-gradient(135deg, #1a2a4a, #0a2a1a)',
    level: 'Intermediate',
    duration: '10 weeks',
    category: 'Security',
  },
  {
    id: 5,
    title: 'Cloud Computing with AWS',
    description: 'Get hands-on with AWS services, serverless architecture, DevOps pipelines, and cloud-native application deployment at scale.',
    image: 'linear-gradient(135deg, #1a3a5c, #2c1154)',
    level: 'Advanced',
    duration: '8 weeks',
    category: 'Cloud',
  },
  {
    id: 6,
    title: 'Mobile App Development with React Native',
    description: 'Build cross-platform iOS and Android apps using React Native, Expo, and modern mobile development best practices.',
    image: 'linear-gradient(135deg, #3b1a4a, #1a1a4a)',
    level: 'Intermediate',
    duration: '10 weeks',
    category: 'Development',
  },
  {
    id: 7,
    title: 'Product Management for Tech',
    description: 'Learn to define product vision, work with engineering teams, prioritize features, and ship products users love.',
    image: 'linear-gradient(135deg, #3d1a1a, #1a1a3d)',
    level: 'Beginner',
    duration: '6 weeks',
    category: 'Product',
  },
  {
    id: 8,
    title: 'Generative AI & Prompt Engineering',
    description: 'Understand large language models, build AI-powered applications, and master the art of prompt engineering for production systems.',
    image: 'linear-gradient(135deg, #1a2e4a, #2a1a4a)',
    level: 'Beginner',
    duration: '6 weeks',
    category: 'AI',
  },
  {
    id: 9,
    title: 'Blockchain & Web3 Development',
    description: 'Build decentralized applications with Solidity, Ethereum, and modern Web3 tooling including Hardhat and ethers.js.',
    image: 'linear-gradient(135deg, #1a3a2a, #2a1a3a)',
    level: 'Advanced',
    duration: '12 weeks',
    category: 'Web3',
  },
]

const categories = ['All', 'Development', 'Data Science', 'Design', 'Security', 'Cloud', 'Product', 'AI', 'Web3']
const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced']

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeLevel, setActiveLevel] = useState('All Levels')
  const [search, setSearch] = useState('')

  const filtered = allCourses.filter(c => {
    const matchCat = activeCategory === 'All' || c.category === activeCategory
    const matchLevel = activeLevel === 'All Levels' || c.level === activeLevel
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchLevel && matchSearch
  })

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-14">
        <p className="text-brand-400 text-sm font-mono uppercase tracking-widest mb-3">Learn & Grow</p>
        <h1 className="section-title mb-4">
          Our <span className="gradient-text">Courses</span>
        </h1>
        <p className="text-white/50 max-w-xl mx-auto font-body text-lg">
          Expert-led programs designed to take you from curious to career-ready in today's most in-demand tech fields.
        </p>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        {/* Search */}
        <div className="relative max-w-md mx-auto mb-6">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search courses..."
            className="w-full bg-card border border-white/10 rounded-full pl-10 pr-5 py-3 text-sm text-white placeholder-white/30 font-body outline-none focus:border-brand-500/50 transition-all"
          />
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-body transition-all ${
                activeCategory === cat
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/20'
                  : 'bg-card border border-white/10 text-white/50 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Level pills */}
        <div className="flex flex-wrap justify-center gap-2">
          {levels.map(lvl => (
            <button
              key={lvl}
              onClick={() => setActiveLevel(lvl)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                activeLevel === lvl
                  ? 'bg-white/10 text-white border border-white/20'
                  : 'text-white/30 hover:text-white/60'
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-white/40 font-body">No courses match your filters. Try adjusting your search.</p>
          </div>
        ) : (
          <>
            <p className="text-white/30 text-sm font-mono mb-6">Showing {filtered.length} courses</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  )
}
