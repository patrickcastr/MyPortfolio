
import { Github, Linkedin, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Section */}
        <div className="mb-12">
          <div className="relative inline-block mb-6">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-gray-200 overflow-hidden">
                <img 
                  src={`${import.meta.env.BASE_URL}resources/me2.jpg`} 
                  alt="Patrick Castrence" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Glassmorphism badge */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-md rounded-full px-4 py-1 text-sm font-medium text-blue-700 border border-white/30">
              Available for work
            </div>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
            Patrick Castrence
          </h1>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/patrickcastr" className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110">
              <Github className="w-6 h-6 text-blue-700" />
            </a>
            <a href="https://www.linkedin.com/in/patrick-keith-castrence-b1809598/" className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110">
              <Linkedin className="w-6 h-6 text-blue-700" />
            </a>
          </div>
        </div>

        {/* Hero Content */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Full Stack Developer •<br />
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              SaaS Builder • Power Platform Specialist
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting scalable web and cloud solutions — from custom SaaS platforms to Power Apps & Power Pages that
            transform business processes. I bring together modern web stacks (React, Node, Postgres, Cloud Run/Azure)
            with Microsoft 365 & Power Platform to create secure, integrated, and impactful digital experiences.
          </p>

          {/* CTA Button */}
          <button 
            onClick={() => navigate('/portfolio')}
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-white/10"
          >
            View My Work
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Stats/Features removed */}
      </div>
    </div>
  )
}

export default Homepage
