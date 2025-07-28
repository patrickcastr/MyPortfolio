
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css' // Add this to import your CSS
import Homepage from './components/Homepage'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Register from './pages/Register' // Fix path to match actual location
import Contact from './components/Contact'
import FloatingNav from './components/FloatingNav'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        <FloatingNav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
