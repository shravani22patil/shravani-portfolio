import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 mt-4">
                <span className="relative z-10">CS Undergrad | DBATU '27</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Shravani Patil
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-[600px]">
              AI Engineering | GenAI | RAG | Data Analytics
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="relative overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 border-0">
                <span className="relative z-10 flex items-center">
                  View Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Button>
              <Button
                variant="outline"
                className="border-zinc-700 text-pink-500 hover:text-pink-700 hover:border-zinc-500"
              >
                Contact Me
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="https://github.com/shravani22patil" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/shravani-patil-38791b286/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>             
              <Link href="mailto:shravanipatil580@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <CreativeHero />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="About Me" subtitle="My background and journey" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="/shravani.png"
                  alt="Shine Kyaw Kyaw Aung"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300">
                  I build intelligent data systems where analysis drives automation. I&apos;m a Computer Science undergrad obsessed with data-informed AI — understanding why the data says what it says, then building systems that act on those insights reliably. Not chatbots or API wrappers. Real systems: EDA pipelines that uncover patterns, RAG systems that retrieve without hallucinating, agentic workflows where data flows through structured decision gates.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  My expertise spans the full stack: statistical analysis and feature engineering fueling LLM applications; RAG pipelines and vector search optimization grounded in retrieval quality; multi-agent orchestration with clean data contracts and production-grade error handling. I&apos;ve engineered solutions using Claude, OpenAI GPT-4, and Gemini APIs — always with structured outputs, always with data validation.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  When not building, I&apos;m exploring novel RAG architectures, designing resilient data models for AI services, contributing to open-source AI frameworks, or diving into analytics dashboards that drive product decisions. Vision: Make enterprise data-driven GenAI intelligent, reliable, and production-ready.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Name</div>
                    <div className="font-medium">Shravani Patil</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">shravanipatil580@gmail.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Location</div>
                    <div className="font-medium">Lonere, Maharashtra, India</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Phone</div>
                    <div className="font-medium">+91 78418 49049</div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link href="/resume.pdf" download>
                    <Button className="bg-zinc-800 hover:bg-zinc-700 text-white">Download Resume</Button>
                  </Link>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="My Skills" subtitle="Technologies I work with" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            <SkillBadge name="Python" level={95} />
            <SkillBadge name="LangChain" level={90} />
            <SkillBadge name="LangGraph" level={85} />
            <SkillBadge name="RAG Pipelines" level={90} />
            <SkillBadge name="LLM APIs" level={90} />
            <SkillBadge name="Prompt Engineering" level={88} />
            <SkillBadge name="ChromaDB" level={80} />
            <SkillBadge name="FastAPI" level={82} />
            <SkillBadge name="Scikit-learn" level={85} />
            <SkillBadge name="TensorFlow" level={78} />
            <SkillBadge name="Pandas" level={90} />
            <SkillBadge name="NumPy" level={88} />
            <SkillBadge name="SQL" level={85} />
            <SkillBadge name="Power BI" level={80} />
            <SkillBadge name="Docker" level={75} />
            <SkillBadge name="Git & GitHub" level={82} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Featured Projects" subtitle="Some of my recent work" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
              title="FlowAI Studio"
              description="Visual LLM workflow builder with node-based editor, custom DAG execution engine, and agentic routing using Claude API and LangGraph."
              tags={["Claude API", "LangChain", "LangGraph", "Next.js", "FastAPI"]}
              image="/flowai studio.png"
              demoUrl="https://flowai-studio.vercel.app"
              repoUrl="https://github.com/shravani22patil/flowai-studio"
            />
            <ProjectCard
              title="FortifyFlow"
              description="Production-grade AI copilot for public health operations with RAG, document intelligence, anomaly detection, and zero-hallucination outputs."
              tags={["FastAPI", "RAG", "ChromaDB", "OpenAI GPT-4", "Next.js"]}
              image="/fortifyflow.png"
              demoUrl="https://fortifyflow.vercel.app"
              repoUrl="https://github.com/shravani22patil/fortifyflow"
            />
            <ProjectCard
              title="VisionVoice AI"
              description="Multimodal pipeline extracting structured information from PDFs and images, converting to natural speech with multilingual narration."
              tags={["Gemini 1.5", "gTTS", "FastAPI", "Streamlit", "Python"]}
              image="/visionvoice ai.png"
              demoUrl="https://visionvoice-ai.streamlit.app"
              repoUrl="https://github.com/shravani22patil/visionvoice-ai"
            />
            <ProjectCard
              title="LinkedIn Job Decay Tracker"
              description="Data-driven analytics platform tracking job market trends, career progression patterns, and employment decay metrics across LinkedIn profiles using advanced data collection and visualization."
              tags={["Python", "Data Analysis", "Analytics", "Web Scraping", "Pandas"]}
              image="/linkedinjob.png"
              demoUrl="https://linkedin-job-decay-tracker-queyw7nttenrpqmru4uoqr.streamlit.app/"
              repoUrl="https://github.com/shravani22patil/linkedin-job-decay-tracker"
            />
            <ProjectCard
              title="VoltPath — Electric Rickshaw Fleet Optimizer"
              description="Smart fleet management and optimization system for electric rickshaws, analyzing routes, battery efficiency, and operational metrics for sustainable urban transportation."
              tags={["Python", "Fleet Optimization", "Data Analytics", "Machine Learning", "Logistics"]}
              image="/voltpath.png"
              demoUrl="https://akssyhpky6mnuymtwsce7c.streamlit.app/"
              repoUrl="https://github.com/shravani22patil/-Voltpath-Electric-Riskshaw-Fleet-Optimizer"
            />
            <ProjectCard
              title="D2C Brand Health Monitor"
              description="Comprehensive brand health monitoring platform for direct-to-consumer brands, tracking metrics, sentiment analysis, and market performance insights through data aggregation and visualization."
              tags={["Python", "Brand Analytics", "Data Visualization", "NLP", "PostgreSQL"]}
              image="/d2c.png"
              demoUrl="https://shravani22patil.github.io/d2c_brand_monitor/"
              repoUrl="https://github.com/shravani22patil/d2c_brand_monitor"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Work Experience" subtitle="My professional journey" />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">shravanipatil580@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">LinkedIn</div>
                    <div className="font-medium">linkedin.com/in/shravani-patil-38791b286</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Github className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">GitHub</div>
                    <div className="font-medium">github.com/shravani22patil</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-lg font-medium mb-4">Current Status</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span>Available for internships, collaborations, and AI/LLM projects</span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Shravani</span>
              <span className="text-white">Patil</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} Shravani Patil. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/shravani22patil" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/shravani-patil-38791b286/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:shravanipatil580@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
