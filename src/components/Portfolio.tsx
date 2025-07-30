import { ExternalLink, Github } from 'lucide-react'

const Portfolio = () => {
  const projects = [
    {
      title: "Another E-commerce platform",
      description: "Modern e-commerce solution built with React and Django",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      tech: ["React", "Django", "MongoDB"],
      demo: "#",
      github: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      tech: ["TypeScript", "React", "Firebase"],
      demo: "#",
      github: "#"
    },
    {
      title: "Issues Register",
      description: "System for tracking and managing issues and bugs",
      image: "https://images.unsplash.com/photo-1581472723648-909f4851d4ae?w=400&h=300&fit=crop",
      tech: ["React", "ASP.NET Core", "SQL"],
      demo: "#/register",
      github: "#"
    },
    {
      title: "Portfolio Website",
      description: "You are looking at it right now! A showcase of my work and skills",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
      tech: ["React", "Tailwind CSS", "Vite"],
      demo: "#",
      github: "#"
    }
  ]

  return (
    <div className="min-h-screen px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6">
            My Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            A collection of projects that showcase my skills and passion for development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/20 backdrop-blur-md rounded-2xl overflow-hidden border border-white/30 hover:scale-105 transition-transform duration-300">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.demo} className="flex items-center text-blue-600 hover:text-blue-800">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Demo
                  </a>
                  <a href={project.github} className="flex items-center text-blue-600 hover:text-blue-800">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
