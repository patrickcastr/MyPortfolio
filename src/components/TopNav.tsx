import { useLocation, useNavigate } from 'react-router-dom'
import { powerPlatformRoute } from '../content/powerPlatformContent'
import { fabricRoute, integrationRoute } from '../content/capabilityContent'

const TopNav = () => {
  const navigate = useNavigate()
  const location = useLocation()

  // The three capability areas lead the navigation; Solutions still covers industries and
  // solution categories, and the homepage services section is reachable from the hero.
  const navItems = [
    {
      label: 'Power Platform',
      onClick: () => navigate(powerPlatformRoute),
      isActive: location.pathname === powerPlatformRoute,
    },
    {
      label: 'Data & Fabric',
      onClick: () => navigate(fabricRoute),
      isActive: location.pathname === fabricRoute,
    },
    {
      label: 'Integration',
      onClick: () => navigate(integrationRoute),
      isActive: location.pathname === integrationRoute,
    },
    {
      label: 'Solutions',
      onClick: () => navigate('/solutions'),
      isActive: location.pathname === '/solutions',
    },
    {
      label: 'About',
      onClick: () => navigate('/about'),
      isActive: location.pathname === '/about',
    },
    {
      label: 'Contact',
      onClick: () => navigate('/contact'),
      isActive: location.pathname === '/contact',
    },
  ]

  return (
    <div className="sticky top-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-6xl rounded-[1.75rem] border border-white/40 bg-white/70 px-5 py-4 shadow-xl backdrop-blur-md">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <button
            onClick={() => navigate('/')}
            className="text-left transition-opacity duration-300 hover:opacity-80"
            aria-label="Go to Kraftylytix homepage"
          >
            <p className="text-lg font-bold text-gray-900">Kraftylytix</p>
            <p className="text-sm text-gray-500">Business systems, automation, and custom platforms</p>
          </button>

          <div className="flex flex-wrap items-center gap-2 md:justify-end">
            {navItems.map(({ label, onClick, isActive }) => (
              <button
                key={label}
                onClick={onClick}
                aria-current={isActive ? 'page' : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 ${
                  isActive
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-white/70 text-blue-700 hover:scale-105 hover:bg-white'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopNav
