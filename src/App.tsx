import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css' // Add this to import your CSS
import Homepage from './components/Homepage'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Register from './pages/Register' // Fix path to match actual location
import Contact from './components/Contact'
import PowerPlatformServices from './components/PowerPlatformServices'
import MicrosoftFabricData from './components/MicrosoftFabricData'
import WorkflowIntegration from './components/WorkflowIntegration'
import NotFound from './components/NotFound'
import TopNav from './components/TopNav'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        <TopNav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Portfolio />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/power-platform-services" element={<PowerPlatformServices />} />
          <Route path="/microsoft-fabric-data" element={<MicrosoftFabricData />} />
          <Route path="/workflow-automation-integration" element={<WorkflowIntegration />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
