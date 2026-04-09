import { Briefcase, Building2, Home, MessageCircle } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'

const FloatingNav = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    { icon: Home, path: '/', label: 'Home' },
    { icon: Building2, path: '/about', label: 'About' },
    { icon: Briefcase, path: '/solutions', label: 'Solutions' },
    { icon: MessageCircle, path: '/contact', label: 'Contact' },
  ]

  const isNavItemActive = (path: string) => {
    if (path === '/solutions') {
      return location.pathname === '/solutions' || location.pathname === '/portfolio'
    }

    return location.pathname === path
  }

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="rounded-2xl border border-white/30 bg-white/20 p-2 shadow-2xl backdrop-blur-md">
        <div className="flex flex-col space-y-2">
          {navItems.map(({ icon: Icon, path, label }) => (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={`
                group relative rounded-xl p-4 transition-all duration-300 hover:scale-110
                ${isNavItemActive(path) ? 'bg-blue-500 text-white shadow-lg' : 'text-blue-700 hover:bg-white/30'}
              `}
              title={label}
            >
              <Icon className="h-6 w-6" />

              <div className="absolute right-full top-1/2 mr-3 -translate-y-1/2 transform opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="whitespace-nowrap rounded-lg bg-gray-800 px-3 py-1 text-sm text-white">{label}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FloatingNav
