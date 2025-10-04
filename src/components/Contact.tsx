import React, { useState, useRef } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState({ success: false, error: false, message: '' })
  
  const formRef = useRef(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Send email to the person who filled the form (confirmation)
      const result = await emailjs.sendForm(
        'service_k2h30qp', 
        'template_rc1xvpk',
        formRef.current!,
        '0r6u1TEJ2UhCcEO2h'
      )
      
      // Send notification copy to yourself
      await emailjs.sendForm(
        'service_k2h30qp', 
        'template_vuafvm1',
        formRef.current!,
        '0r6u1TEJ2UhCcEO2h'
      )
      
      console.log('Email sent successfully:', result.text)
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      })
      
      // Show success message
      setStatus({
        success: true,
        error: false,
        message: 'Message sent successfully! I\'ll get back to you soon.'
      })
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({ success: false, error: false, message: '' })
      }, 5000)
    } catch (error: any) {
      console.error('Failed to send email:', error)
      setStatus({
        success: false, 
        error: true,
        message: 'Failed to send message. Please try again or email me directly.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 py-24">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase">
              Contact
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Let's Work
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
              Together
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in touch</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-12">
                  I'm always open to discussing new opportunities, creative projects, or just having a friendly chat about technology and design.
                </p>
              </div>

              <div className="space-y-8">
                {/* Primary Scheduler Link */}
                <div className="group">
                  <a
                    href={(import.meta as any).env.VITE_SCHEDULER_URL || 'mailto:pkcastrence@gmail.com?subject=Discovery%20Call&body=Hi%20Patrick%2C%20I%27d%20like%20to%20book%20a%2015-minute%20call.'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold shadow-xl hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300"
                    aria-label="Schedule a 15-minute discovery call (opens in a new tab)"
                  >
                    Schedule a Call
                  </a>
                </div>
                <div className="group">
                  <div className="flex items-start space-x-4 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">pkcastrence@gmail.com</p>
                      <p className="text-sm text-gray-500 mt-1">Preferred for project inquiries</p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start space-x-4 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600">+64 22 345 4932</p>
                      <p className="text-sm text-gray-500 mt-1">Available Mon-Fri, 9AM-6PM NZT</p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start space-x-4 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Location</h3>
                      <p className="text-gray-600">New Plymouth, Taranaki</p>
                      <p className="text-sm text-gray-500 mt-1">Open to remote collaboration</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Response Time</h3>
                <p className="text-gray-600">I typically respond within 24 hours during business days.</p>
              </div>
            </div>

            {/* Contact Form - Updated with EmailJS */}
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Send me a message</h3>
                
                {status.success && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <p className="text-green-800 font-medium">{status.message}</p>
                  </div>
                )}
                
                {status.error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <p className="text-red-800 font-medium">{status.message}</p>
                  </div>
                )}

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        name="user_name" // Important for EmailJS
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 text-gray-900 placeholder-gray-500"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        name="user_email" // Important for EmailJS
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 text-gray-900 placeholder-gray-500"
                        placeholder="name@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Project Details *
                    </label>
                    <textarea
                      required
                      name="message" // Important for EmailJS
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={6}
                      className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 text-gray-900 placeholder-gray-500 resize-none"
                      placeholder="Tell me about your project, timeline, and budget. The more details you provide, the better I can help you."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Removed bottom CTA. Consider using a dedicated scheduler link above the contact details instead. */}
      </div>
    </div>
  )
}

export default Contact
