'use client'

import React, { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Replace with your Formspree form endpoint
  // Get it from https://formspree.io/ after creating a form
  const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/myzaldnl'

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email, // This sets the reply-to address
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'kulanya.lisaldi@gmail.com',
      link: 'mailto:kulanya.lisaldi@gmail.com',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+94 70 153 6490',
      link: 'tel:+94701536490',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Malabe, Sri Lanka',
      link: '253/f, udaya mawatha, malabe',
    },
  ]

  return (
    <section
      id="contact"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-900/30"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Let's Connect
              </h3>
             
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center space-x-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 bg-transparent border-2 border-gray-400 text-gray-400 rounded-lg font-semibold hover:bg-gray-400 hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <FaEnvelope className="w-5 h-5" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm text-center">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mt-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm text-center">
                  Failed to send message. Please try again or contact me directly at kulanya.lisaldi@gmail.com
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

