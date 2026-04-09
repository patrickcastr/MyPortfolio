import { ArrowRight, Home, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-20">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/40 bg-white/30 p-10 text-center shadow-2xl backdrop-blur-md">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Kraftylytix</p>
        <h1 className="mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
          404
        </h1>
        <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Page not found</h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-600">
          The page you were trying to reach is not available. You can head back to the Kraftylytix homepage or start a
          conversation about the systems or automation support you need.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-blue-700"
          >
            <Home className="mr-2 h-5 w-5" />
            Return Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full border border-blue-200 bg-white/70 px-6 py-3 font-semibold text-blue-700 shadow-md transition-all duration-300 hover:scale-105 hover:bg-white"
          >
            Contact Kraftylytix
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="mt-8 inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm text-blue-700">
          <MessageCircle className="mr-2 h-4 w-4" />
          Business systems, automation, and custom platforms
        </div>
      </div>
    </div>
  )
}

export default NotFound
