
import { useNavigate, useLocation } from 'react-router-dom'
import { Home, User, Briefcase, UserPlus, MessageCircle } from 'lucide-react'

const FloatingNav = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    { icon: Home, path: '/', label: 'Home' },
    { icon: User, path: '/about', label: 'About' },
    { icon: Briefcase, path: '/portfolio', label: 'Portfolio' },
    { icon: UserPlus, path: '/register', label: 'Register' },
    { icon: MessageCircle, path: '/contact', label: 'Contact' },
  ]

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="bg-white/20 backdrop-blur-md rounded-2xl p-2 border border-white/30 shadow-2xl">
        <div className="flex flex-col space-y-2">
          {navItems.map(({ icon: Icon, path, label }) => (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={`
                group relative p-4 rounded-xl transition-all duration-300 hover:scale-110
                ${location.pathname === path 
                  ? 'bg-blue-500 text-white shadow-lg' 
                  : 'hover:bg-white/30 text-blue-700'
                }
              `}
              title={label}
            >
              <Icon className="w-6 h-6" />
              
              {/* Tooltip */}
              <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap">
                  {label}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FloatingNav
