
import { Code, Palette, Zap, Box, Settings } from 'lucide-react'

const About = () => {
  return (
    <div className="min-h-screen px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6">
            About Patrick
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate developer with a love for creating beautiful, functional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 text-center">
            <Code className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Development</h3>
            <p className="text-gray-600">React, TypeScript, and modern web technologies.</p>
          </div>
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 text-center">
            <Palette className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Design</h3>
            <p className="text-gray-600">Creating intuitive user interfaces with attention to detail.</p>
          </div>
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 text-center">
            <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Performance</h3>
            <p className="text-gray-600">Optimizing applications for speed and scalability.</p>
          </div>
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 text-center">
            <Box className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">3D Printing</h3>
            <p className="text-gray-600">Creating physical objects with digital design and additive manufacturing.</p>
          </div>
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 text-center">
            <Settings className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Power Platform</h3>
            <p className="text-gray-600">Low-code solutions for business automation and productivity.</p>
          </div>
        </div>

        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">My Story</h2>
          <p className="text-gray-600 leading-relaxed">
Hi, I'm Patrick—a full-stack developer who’s all about turning ideas into digital solutions that actually make life easier. With over 3 years of experience building everything from streamlined business tools to quirky side projects, my journey started with a simple curiosity: “How does this work?” That question led me from tinkering with code after hours to collaborating with teams and bringing real products to life.
Along the way, I discovered that great applications aren’t just about clean code—they’re about solving real problems, making things work better, and adding a bit of joy to the everyday. Whether it’s automating a workflow, connecting systems that “aren’t supposed to talk,” or helping someone see their data in a new light, I love that sweet spot where tech meets impact.
These days, I’m passionate about building solutions that are not only functional and beautiful, but also truly helpful. If you’ve got a problem to solve or a project in mind, I’d love to chat.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
