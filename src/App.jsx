import React, { useState } from 'react';
import {
  ArrowUpRight,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  FolderGit2,
  Github,
  Layers,
  Linkedin,
  Mail,
  Send,
  Server,
  ShieldCheck,
  Terminal,
  X,
  CheckCircle2,
  Sparkles,
  Box
} from 'lucide-react';
import Hero3DCanvas from './components/Hero3DCanvas';

// TIP: To use real screenshots, save your PNG/WebP screenshots inside /public/projects/
// and set screenshot: "/projects/pragyan.png" etc.
const PROJECTS = [
  {
    id: 'pragyan-ai',
    num: '01',
    title: 'PRAGYAN AI',
    subtitle: 'Multi-Format AI Summarization & Sentiment Engine',
    category: 'AI & Full-Stack',
    screenshot: '', // Add "/projects/pragyan.png" when ready
    accent: 'from-orange-500/20 via-amber-500/10 to-zinc-900',
    tags: ['React', 'Flask', 'Python', 'PostgreSQL', 'Generative AI'],
    liveUrl: 'https://pragyan-ai-summarizer.netlify.app/',
    githubUrl: 'https://github.com/Nikita-Parjane27/Pragyan-AI-Summarization',
    description:
      'An AI-powered multi-format summarization and sentiment analysis platform built with React, Flask, and Generative AI models to extract structured insights from text, documents, images, audio, video, and Excel sheets in real time.',
    highlights: [
      'Unified multi-modal ingestion pipeline supporting PDF, DOCX, XLSX, audio, and image inputs',
      'Real-time sentiment scoring and executive key-point extraction via REST APIs',
      'Persistent analysis history and exportable reports backed by PostgreSQL'
    ],
    architecture: ['Client (React + Vite)', 'Flask Inference API', 'Multi-Modal Parsers + LLM', 'PostgreSQL Storage'],
    mockStats: [
      { label: 'Supported Formats', value: '6 Types' },
      { label: 'Avg Latency', value: '1.4s' },
      { label: 'Sentiment Accuracy', value: '94.2%' }
    ]
  },
  {
    id: 'milestofund',
    num: '02',
    title: 'MilestoFund',
    subtitle: 'Milestone-Based Crowdfunding & AI Creator Suite',
    category: 'Full-Stack & FinTech',
    screenshot: '', // Add "/projects/milestofund.png" when ready
    accent: 'from-emerald-500/20 via-teal-500/10 to-zinc-900',
    tags: ['React', 'Node.js', 'Express', 'Supabase', 'Razorpay', 'Gemini AI'],
    liveUrl: 'https://milesto-fund-frontend.vercel.app/',
    githubUrl: 'https://github.com/Nikita-Parjane27/MilestoFund-CrowFund',
    description:
      'A full-stack crowdfunding platform tailored for Indian creators featuring milestone-based fund releases, Razorpay payment integration, JWT authentication, and five integrated Gemini AI creator tools.',
    highlights: [
      'Integrated 5 Gemini AI tools: Campaign Writer, Title Generator, Reward Proposer, Pitch Improver & Risk Analyzer',
      'Secure Razorpay webhook verification and milestone-gated escrow release logic',
      'Role-based JWT authentication and real-time campaign analytics with Supabase'
    ],
    architecture: ['React Frontend', 'Node.js + Express REST API', 'Razorpay + Gemini 2.5 Flash', 'Supabase PostgreSQL'],
    mockStats: [
      { label: 'AI Creator Tools', value: '5 Modules' },
      { label: 'Payment Gateway', value: 'Razorpay' },
      { label: 'Release Model', value: 'Milestone' }
    ]
  },
  {
    id: 'pras',
    num: '03',
    title: 'PRAS (MeritScope)',
    subtitle: 'Progressive Result Analysis & NBA Criterion 4 System',
    category: 'Enterprise Web',
    screenshot: '', // Add "/projects/pras.png" when ready
    accent: 'from-blue-500/20 via-indigo-500/10 to-zinc-900',
    tags: ['React', 'Vite', 'Node.js', 'ExcelJS', 'Analytics'],
    liveUrl: 'https://github.com/Nikita-Parjane27',
    githubUrl: 'https://github.com/Nikita-Parjane27',
    description:
      'Full-stack academic analytics platform that parses semester-wise university Excel result sheets by Hall Ticket Number and automates NBA Criterion 4 accreditation reporting for engineering departments.',
    highlights: [
      'Automated multi-semester Excel sheet ingestion and student progression tracking',
      'One-click generation of NBA Criterion 4 success index and backlog metrics',
      'Interactive cohort comparison charts for department faculty'
    ],
    architecture: ['React + Vite Dashboard', 'Node.js Parser Engine', 'Hall-Ticket Normalizer', 'NBA Report Generator'],
    mockStats: [
      { label: 'Report Speedup', value: '95% Faster' },
      { label: 'Compliance', value: 'NBA Crit. 4' },
      { label: 'Batch Parsing', value: '500+ Rows' }
    ]
  },
  {
    id: 'github-analyzer',
    num: '04',
    title: 'GitHub Repo Analyzer',
    subtitle: 'Automated Codebase & Stack Intelligence Tool',
    category: 'AI & Developer Tools',
    screenshot: '', // Add "/projects/github-analyzer.png" when ready
    accent: 'from-purple-500/20 via-pink-500/10 to-zinc-900',
    tags: ['Python', 'FastAPI', 'React', 'Gemini AI', 'GitHub API'],
    liveUrl: 'https://git-repo-analyzer.netlify.app/',
    githubUrl: 'https://github.com/Nikita-Parjane27/Github-Analyzer',
    description:
      'An AI-powered developer tool that inspects any public GitHub repository—automatically detecting tech stacks, mapping directory architecture, and generating actionable code quality recommendations.',
    highlights: [
      'Asynchronous FastAPI backend traversing repository trees and dependency manifests',
      'Structured architectural breakdown and security/refactoring suggestions via Gemini AI',
      'Clean visual dependency summary for rapid developer onboarding'
    ],
    architecture: ['React UI', 'FastAPI Async Backend', 'GitHub REST Tree API', 'Gemini Analysis Engine'],
    mockStats: [
      { label: 'Backend', value: 'FastAPI' },
      { label: 'Tree Inspection', value: 'Async' },
      { label: 'Output', value: 'JSON + UI' }
    ]
  },
  {
    id: 'bullet-ai',
    num: '05',
    title: 'BulletAI',
    subtitle: 'ATS-Optimized Resume Bullet Rewriter',
    category: 'AI & Developer Tools',
    screenshot: '', // Add "/projects/bulletai.png" when ready
    accent: 'from-amber-500/20 via-orange-500/10 to-zinc-900',
    tags: ['React', 'Vite', 'Tailwind CSS', 'OpenAI API'],
    liveUrl: 'https://bullet-ai-rewritter.vercel.app/',
    githubUrl: 'https://github.com/Nikita-Parjane27/BulletAI--Rewritter',
    description:
      'Open-source resume engineering tool that transforms raw project or internship notes into quantified, action-verb-driven, ATS-optimized resume bullet points.',
    highlights: [
      'Prompt-engineered impact framing enforcing XYZ metric-driven resume standards',
      'Instant side-by-side comparison and one-click clipboard workflow',
      'Zero-clutter minimalist interface designed for rapid job application tailoring'
    ],
    architecture: ['React + Vite Client', 'Prompt Engine', 'OpenAI Completion API', 'Clipboard Export'],
    mockStats: [
      { label: 'Format', value: 'ATS XYZ' },
      { label: 'Response', value: 'Instant' },
      { label: 'License', value: 'Open Source' }
    ]
  }
];

const SKILLS = [
  {
    category: 'Frontend Engineering',
    icon: Layers,
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Three.js', 'HTML5 / CSS3']
  },
  {
    category: 'Backend & APIs',
    icon: Server,
    items: ['Node.js', 'NestJS', 'Express', 'Python', 'FastAPI', 'Flask', 'Java', 'REST & GraphQL']
  },
  {
    category: 'Cloud, Data & AI',
    icon: Database,
    items: ['Oracle Cloud (OCI)', 'AWS', 'Google Cloud Run', 'PostgreSQL', 'Supabase', 'Firebase', 'Gemini & OpenAI APIs']
  }
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(null);
  const [modalTab, setModalTab] = useState('preview');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle');

  const categories = ['All', 'AI & Full-Stack', 'Full-Stack & FinTech', 'Enterprise Web', 'AI & Developer Tools'];

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormStatus('sending');
    setTimeout(() => {
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.open(`mailto:nikita109520@gmail.com?subject=${subject}&body=${body}`, '_blank');
      setFormStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 4000);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#09090B] text-[#FAFAFA] bg-arch-grid">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-40 border-b border-zinc-800/80 bg-[#09090B]/85 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 font-display font-bold tracking-tight text-lg">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 inline-block" />
            <span>NIKITA.PARJANE</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#skills" className="hover:text-white transition-colors">Stack</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Nikita-Parjane27"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/nikita-parjane/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION WITH 3D CANVAS */}
      <section className="relative border-b border-zinc-800/80 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/80 text-xs font-mono text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for 2027 Full-Stack &amp; Software Engineering Roles</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.08]">
              Nikita Parjane
              <span className="block text-zinc-400 text-2xl sm:text-4xl font-medium mt-2">
                Full-Stack Developer &amp; AI Systems Builder
              </span>
            </h1>

            <p className="text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed">
              I architect scalable web applications, high-throughput REST APIs, and applied Generative AI products—combining clean frontend engineering with resilient cloud backends.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-orange-500 hover:bg-orange-400 text-zinc-950 font-semibold text-sm transition-colors"
              >
                <span>Explore Selected Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-zinc-800 hover:border-zinc-600 bg-zinc-900/50 text-zinc-200 font-medium text-sm transition-colors"
              >
                <span>Get In Touch</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-800/80 max-w-lg">
              <div>
                <div className="font-display text-xl font-bold text-white">Next.js / React</div>
                <div className="text-xs text-zinc-500 font-mono mt-0.5">Frontend Architecture</div>
              </div>
              <div>
                <div className="font-display text-xl font-bold text-white">Node / FastAPI</div>
                <div className="text-xs text-zinc-500 font-mono mt-0.5">Backend &amp; APIs</div>
              </div>
              <div>
                <div className="font-display text-xl font-bold text-emerald-400">OCI 96%</div>
                <div className="text-xs text-zinc-500 font-mono mt-0.5">Cloud Certified</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 backdrop-blur-sm p-2 relative">
              <div className="absolute top-3 left-4 z-10 flex items-center gap-1.5 text-[11px] font-mono text-zinc-500">
                <Box className="w-3.5 h-3.5 text-orange-500" />
                <span>INTERACTIVE 3D MESH · DRAG / HOVER</span>
              </div>
              <Hero3DCanvas />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT & CREDENTIALS */}
      <section id="about" className="border-b border-zinc-800/80 py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-orange-500">01 / Profile</div>
            <h2 className="text-3xl font-bold tracking-tight">Engineering with precision and purpose.</h2>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 space-y-3">
              <div className="flex items-center gap-3">
                <img
                  src="/img/photo.jpg"
                  alt="Nikita Parjane"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                  className="w-14 h-14 rounded-lg object-cover border border-zinc-700 bg-zinc-800"
                />
                <div>
                  <div className="font-semibold text-white">Nikita Ashok Parjane</div>
                  <div className="text-xs text-zinc-400">B.Tech Computer Science &amp; Design (2027)</div>
                  <div className="text-xs text-zinc-500 font-mono mt-0.5">MIT Chhatrapati Sambhajinagar</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6 text-zinc-300 leading-relaxed">
            <p>
              I am a Full-Stack Developer and Software Engineer focused on building production-grade web applications and AI-integrated systems. From designing modular Next.js frontends and NestJS REST APIs during my software engineering internship to deploying containerized Python and Gemini AI pipelines on the cloud, I enjoy owning features end-to-end.
            </p>
            <p className="text-zinc-400">
              My engineering philosophy prioritizes clean system boundaries, predictable API contracts, and responsive user interfaces that solve tangible operational problems—whether automating university NBA accreditation analytics or enabling milestone-backed creator crowdfunding.
            </p>

            <div id="experience" className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-orange-400">EXPERIENCE</span>
                  <span className="text-xs font-mono text-zinc-500">2026</span>
                </div>
                <div className="font-semibold text-white">Full Stack Development Intern</div>
                <div className="text-sm text-zinc-400">LayersIQ Pvt. Ltd.</div>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Engineered frontend interfaces using Next.js and built scalable backend REST APIs with NestJS in an agile sprint workflow.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400">CERTIFICATION</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="font-semibold text-white">OCI Architect Associate</div>
                <div className="text-sm text-zinc-400">Oracle Cloud Infrastructure (96% Score)</div>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Validated expertise in cloud compute, VCN networking, IAM security, storage architecture, and scalable cloud deployments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL STACK */}
      <section id="skills" className="border-b border-zinc-800/80 py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-orange-500">02 / Capabilities</div>
            <h2 className="text-3xl font-bold tracking-tight mt-2">Technical Stack</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {SKILLS.map((group) => {
              const Icon = group.icon;
              return (
                <div
                  key={group.category}
                  className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 transition-colors space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-zinc-800/80 text-orange-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-lg text-white">{group.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs font-mono rounded-md bg-zinc-950 border border-zinc-800 text-zinc-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="border-b border-zinc-800/80 py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-orange-500">03 / Selected Work</div>
              <h2 className="text-3xl font-bold tracking-tight mt-2">Featured Projects</h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                    selectedCategory === cat
                      ? 'bg-orange-500 text-zinc-950 font-semibold'
                      : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group rounded-2xl border border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* VISUAL PREVIEW / SCREENSHOT FRAME */}
                  <div
                    onClick={() => {
                      setActiveProject(project);
                      setModalTab('preview');
                    }}
                    className={`relative h-52 bg-gradient-to-br ${project.accent} border-b border-zinc-800 p-4 cursor-pointer overflow-hidden`}
                  >
                    {project.screenshot ? (
                      <img
                        src={project.screenshot}
                        alt={`${project.title} preview`}
                        className="w-full h-full object-cover rounded-lg border border-zinc-700/80 shadow-2xl group-hover:scale-[1.02] transition-transform duration-300"
                      />
                    ) : (
                      /* Interactive Browser UI Preview Frame when screenshot is not yet added */
                      <div className="w-full h-full rounded-lg border border-zinc-700/80 bg-[#09090B]/90 shadow-2xl p-3.5 flex flex-col justify-between group-hover:scale-[1.02] transition-transform duration-300">
                        <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                            <span className="ml-2 text-[10px] font-mono text-zinc-500 truncate max-w-[180px]">
                              {project.liveUrl.replace('https://', '')}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-orange-400">
                            {project.num}
                          </span>
                        </div>

                        <div className="grid grid-cols-3 gap-2 my-auto py-2">
                          {project.mockStats.map((stat) => (
                            <div
                              key={stat.label}
                              className="p-2 rounded bg-zinc-900/90 border border-zinc-800/90"
                            >
                              <div className="text-[10px] text-zinc-500 font-mono truncate">{stat.label}</div>
                              <div className="text-xs sm:text-sm font-semibold text-zinc-100 mt-0.5">
                                {stat.value}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                          <span className="flex items-center gap-1.5">
                            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                            {project.architecture[0]} → {project.architecture[1]}
                          </span>
                          <span className="text-orange-400 group-hover:underline">Inspect Case Study →</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* CARD BODY */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-xs font-mono text-zinc-500">{project.category}</div>
                        <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
                        <p className="text-xs text-orange-400 font-medium mt-0.5">{project.subtitle}</p>
                      </div>
                      <button
                        onClick={() => {
                          setActiveProject(project);
                          setModalTab('preview');
                        }}
                        className="px-2.5 py-1 rounded-md border border-zinc-800 bg-zinc-950 text-xs font-mono text-zinc-300 hover:border-orange-500/50 hover:text-orange-400 transition-colors"
                      >
                        Architecture
                      </button>
                    </div>

                    <p className="text-sm text-zinc-400 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[11px] font-mono rounded bg-zinc-950 border border-zinc-800 text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4 border-t border-zinc-800/80 bg-zinc-950/40 flex items-center justify-between">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-orange-400 transition-colors"
                  >
                    <span>Live Deployment</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                  >
                    <FolderGit2 className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-orange-500">04 / Contact</div>
            <h2 className="text-3xl font-bold tracking-tight">Let’s build something reliable.</h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Open to full-stack engineering roles, software development internships, and collaborative AI product builds. Reach out directly via email or social channels.
            </p>

            <div className="space-y-3 pt-2">
              <a
                href="mailto:nikita109520@gmail.com"
                className="flex items-center justify-between p-4 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-orange-500" />
                  <div>
                    <div className="text-xs text-zinc-500 font-mono">EMAIL</div>
                    <div className="text-sm text-zinc-200">nikita109520@gmail.com</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500" />
              </a>

              <a
                href="https://github.com/Nikita-Parjane27"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-orange-500" />
                  <div>
                    <div className="text-xs text-zinc-500 font-mono">GITHUB</div>
                    <div className="text-sm text-zinc-200">github.com/Nikita-Parjane27</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500" />
              </a>

              <a
                href="https://www.linkedin.com/in/nikita-parjane/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-orange-500" />
                  <div>
                    <div className="text-xs text-zinc-500 font-mono">LINKEDIN</div>
                    <div className="text-sm text-zinc-200">linkedin.com/in/nikita-parjane</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleFormSubmit}
              className="p-6 sm:p-8 rounded-2xl border border-zinc-800 bg-zinc-900/30 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-zinc-400">YOUR NAME</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Recruiter / Collaborator"
                    className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-zinc-400">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@company.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-zinc-400">MESSAGE</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about the role, project, or engineering problem..."
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-orange-500"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-400 text-zinc-950 font-semibold text-sm transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>{formStatus === 'sent' ? 'Opening Mail Client...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800/80 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <div>NIKITA PARJANE — FULL-STACK ENGINEER</div>
          <div>© 2026 · Built with React, Three.js &amp; Tailwind CSS</div>
        </div>
      </footer>

      {/* PROJECT CASE STUDY MODAL */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="max-w-2xl w-full rounded-2xl border border-zinc-800 bg-[#09090B] p-6 sm:p-8 space-y-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-mono text-orange-500">{activeProject.category}</div>
                <h3 className="text-2xl font-bold text-white mt-1">{activeProject.title}</h3>
                <p className="text-sm text-zinc-400">{activeProject.subtitle}</p>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="p-2 rounded-lg border border-zinc-800 text-zinc-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex gap-2 border-b border-zinc-800 pb-3">
              <button
                onClick={() => setModalTab('preview')}
                className={`px-3 py-1.5 rounded-md text-xs font-mono ${
                  modalTab === 'preview' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Key Highlights
              </button>
              <button
                onClick={() => setModalTab('architecture')}
                className={`px-3 py-1.5 rounded-md text-xs font-mono ${
                  modalTab === 'architecture' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                System Architecture
              </button>
            </div>

            {modalTab === 'preview' ? (
              <div className="space-y-4">
                <p className="text-sm text-zinc-300 leading-relaxed">{activeProject.description}</p>
                <div className="space-y-2.5">
                  {activeProject.highlights.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-sm text-zinc-400">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="text-xs font-mono text-zinc-400">REQUEST &amp; DATA PIPELINE</div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {activeProject.architecture.map((node, idx) => (
                    <div
                      key={node}
                      className="p-3.5 rounded-xl border border-zinc-800 bg-zinc-900/50 flex items-center gap-3"
                    >
                      <span className="w-6 h-6 rounded-md bg-orange-500/15 text-orange-400 font-mono text-xs flex items-center justify-center">
                        0{idx + 1}
                      </span>
                      <span className="text-sm font-medium text-zinc-200">{node}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-zinc-800">
              <div className="flex flex-wrap gap-1.5">
                {activeProject.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 text-xs font-mono rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg border border-zinc-700 text-xs font-mono text-zinc-200 hover:bg-zinc-800"
                >
                  GitHub Repo
                </a>
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg bg-orange-500 text-zinc-950 text-xs font-semibold hover:bg-orange-400"
                >
                  Launch Live App ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
