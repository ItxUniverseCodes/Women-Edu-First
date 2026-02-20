import TeamCard from '../components/TeamCard'

const team = [
  {
    name: 'Aisha Kamara',
    role: 'Founder & CEO',
    bio: 'Former Google engineer turned educator. Aisha founded NextGenShe after realizing fewer than 20% of tech teams she worked on included women.',
    avatar: 'linear-gradient(135deg, #6b33ee, #a07aff)',
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
  },
  {
    name: 'Priya Nair',
    role: 'Head of Curriculum',
    bio: 'PhD in Computer Science from MIT. Priya designs programs that blend theory with hands-on industry experience and real-world projects.',
    avatar: 'linear-gradient(135deg, #0ea5e9, #6b33ee)',
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
  },
  {
    name: 'Sofia Reyes',
    role: 'Lead Mentor & Coach',
    bio: 'Full-stack engineer and UX designer who has mentored over 300 women into tech careers at companies like Stripe, Notion, and Airbnb.',
    avatar: 'linear-gradient(135deg, #ec4899, #6b33ee)',
    socials: {
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
    },
  },
  {
    name: 'Mei-Ling Chen',
    role: 'Data Science Lead',
    bio: 'Machine learning researcher with publications in NeurIPS. Mei-Ling leads our AI and Data Science program with a focus on ethical AI.',
    avatar: 'linear-gradient(135deg, #10b981, #0ea5e9)',
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
  },
  {
    name: 'Zara Okonkwo',
    role: 'Community Director',
    bio: 'Building inclusive tech communities across West Africa and Europe. Zara ensures every NextGenShe student feels supported and seen.',
    avatar: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    socials: {
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
    },
  },
  {
    name: 'Leila Hassan',
    role: 'Career & Partnerships',
    bio: 'Former recruiter at top-tier tech firms. Leila connects graduates with opportunities and maintains NextGenShe\'s 85% job placement rate.',
    avatar: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
    socials: {
      linkedin: 'https://linkedin.com',
    },
  },
]

const values = [
  { icon: '🌍', title: 'Inclusion First', desc: 'Every woman deserves access to technology education, regardless of background or prior experience.' },
  { icon: '🤝', title: 'Community', desc: 'Learning is better together. Our cohort model ensures you never feel alone on your tech journey.' },
  { icon: '🚀', title: 'Excellence', desc: 'We hold ourselves to the highest standards — our curricula are reviewed by industry leaders quarterly.' },
  { icon: '💡', title: 'Innovation', desc: 'We stay ahead of the curve, updating our programs to reflect the skills employers actually need.' },
]

export default function About() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center mb-20">
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-radial from-brand-600/10 to-transparent" />
        <p className="text-brand-400 text-sm font-mono uppercase tracking-widest mb-3 relative">Our Story</p>
        <h1 className="section-title mb-6 relative">
          Built by Women,{' '}
          <span className="gradient-text">for Women</span>
        </h1>
        <p className="text-white/55 max-w-2xl mx-auto font-body text-lg leading-relaxed relative">
          NextGenShe was born from a simple belief: that the technology industry is richer when women have an equal seat at the table. We're building the bridge to get them there.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card-glass p-10 border border-brand-500/20">
            <div className="w-12 h-12 rounded-xl bg-brand-600/20 border border-brand-500/30 flex items-center justify-center text-2xl mb-5">
              🎯
            </div>
            <h2 className="font-display text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-white/55 font-body leading-relaxed">
              To provide world-class technology education to women globally — making careers in software engineering, data science, design, and cybersecurity accessible, achievable, and fulfilling. We remove barriers by offering flexible programs, income-share agreements, and a community that celebrates every milestone.
            </p>
          </div>
          <div className="card-glass p-10 border border-purple-500/20">
            <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-2xl mb-5">
              🔭
            </div>
            <h2 className="font-display text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-white/55 font-body leading-relaxed">
              A technology industry where women represent 50% of the workforce at every level — from junior engineer to CTO. We envision a world where the next generation of women grow up seeing themselves reflected in the products, platforms, and AI systems that shape our lives. NextGenShe is how we get there.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center mb-12">
          <h2 className="section-title mb-3">What We <span className="gradient-text">Stand For</span></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map(({ icon, title, desc }) => (
            <div key={title} className="card-glass p-6 text-center card-hover border border-white/5">
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="font-display text-lg font-semibold text-white mb-2">{title}</h3>
              <p className="text-white/45 text-sm font-body leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-brand-400 text-sm font-mono uppercase tracking-widest mb-3">Meet the Team</p>
          <h2 className="section-title mb-4">
            The People Behind{' '}
            <span className="gradient-text">NextGenShe</span>
          </h2>
          <p className="text-white/50 max-w-lg mx-auto font-body">
            A passionate team of engineers, designers, educators, and community builders committed to your success.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map(member => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </section>
    </div>
  )
}
