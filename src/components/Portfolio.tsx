import { ArrowRight, ExternalLink } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const projects = [
  {
    title: 'Digital Signage Platform',
    description: 'A centralized admin platform for managing screens, playlists, and content scheduling across locations.',
    outcome: 'Shows how Kraftylytix approaches secure admin tooling, scheduling workflows, and multi-site operations.',
    image: `${import.meta.env.BASE_URL}resources/digitalsignage.png`,
    tech: ['React', 'Node', 'PostgreSQL', 'Cloud Run'],
    demo: 'https://digitalsignagedev-110975131079.australia-southeast1.run.app/admin/login',
  },
  {
    title: 'ParentHub Communications Portal',
    description: 'A school communication experience for announcements, events, and shared resources in one place.',
    outcome: 'Demonstrates portal design, structured content delivery, and streamlined information access for users.',
    image: `${import.meta.env.BASE_URL}resources/parenthub.png`,
    tech: ['React', 'Node', 'PostgreSQL', 'Cloud Run'],
    demo: 'https://parenthub-110975131079.australia-southeast1.run.app/',
  },
  {
    title: 'Operations Issues Register',
    description: 'An internal register for tracking issues, review status, and action ownership across operational teams.',
    outcome: 'Represents the kind of internal workflow tooling Kraftylytix builds to replace fragmented spreadsheets.',
    image: 'https://images.unsplash.com/photo-1581472723648-909f4851d4ae?w=400&h=300&fit=crop',
    tech: ['React', 'ASP.NET Core', 'SQL'],
    demo: '#/register',
  },
  {
    title: 'Kraftylytix Website Platform',
    description: 'A consultancy site designed to communicate services, positioning, and solution focus clearly.',
    outcome: 'A small example of how product messaging, structure, and technical implementation come together.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    demo: '#/',
  },
]

const Portfolio = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Solutions</p>
          <h1 className="mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
            Selected Solutions
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-600">
            Examples of the platforms, portals, and internal tools Kraftylytix builds to improve workflows, visibility,
            and day-to-day operations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-2xl border border-white/30 bg-white/20 backdrop-blur-md transition-transform duration-300 hover:scale-[1.02]"
            >
              <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold text-gray-800">{project.title}</h3>
                <p className="mb-4 text-gray-600">{project.description}</p>
                <p className="mb-4 text-sm leading-relaxed text-gray-500">{project.outcome}</p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-semibold text-blue-600 transition-colors hover:text-blue-800"
                >
                  View Example
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-center text-white shadow-2xl md:p-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">Next Step</p>
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Need something similar for your business?</h2>
          <button
            onClick={() => navigate('/contact')}
            className="group inline-flex items-center rounded-full bg-white px-8 py-4 font-semibold text-blue-700 transition-all duration-300 hover:scale-105 hover:bg-blue-50"
          >
            Book a Discovery Call
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
