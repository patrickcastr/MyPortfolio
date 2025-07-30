
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
            <p className="text-gray-600">React, TypeScript,Vite, ASP.NET and modern web technologies.</p>
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
          <p className="text-gray-600 leading-relaxed">Hey, I’m Patrick. 
            I’m a full-stack developer who just likes figuring out how stuff works and making tech actually useful for people.
             I didn’t start out in traditional software dev. My first foray was with low-code platforms, just trying to automate boring stuff at work and see if I could make things run smoother. That curiosity quickly got out of hand (in the best way), and suddenly 
             I was hooked: writing scripts, connecting apps that weren’t supposed to talk, and building tools that made a real difference for my team.
Over the last few years, I’ve worked on everything from business dashboards to random side projects that scratch my itch to try new things. I’m big on building things that solve real problems, not just ticking boxes or shipping pretty code. It’s the “aha!” moments,when someone saves hours on a task or finally gets insight from their data—that keep me motivated.
These days, I still love that space where code meets impact, whether I’m fixing a gnarly workflow, creating a slick Power BI report, or just helping someone automate the stuff they hate doing. If you’ve got a challenge or a wild idea you want to test out, let’s have a chat. Check out my CV, and if something clicks, I’d be keen to work together.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
