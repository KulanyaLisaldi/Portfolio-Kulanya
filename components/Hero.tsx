'use client'

import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa'

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/KulanyaLisaldi', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/kulanya-lisaldi-aa39a9293/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:kulanya.lisaldi@gmail.com', label: 'Email' },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in flex justify-center">
            <div className="relative w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full overflow-hidden border-4 border-gray-600 shadow-lg ">
              <img
                src="/profile.jpg"
                alt="Kulanya Lisaldi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Greeting */}
          <div className="mb-4 animate-fade-in">
            <span className="text-blue-400 text-lg md:text-xl font-medium">
              Hi, It's me
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up text-white">
            Kulanya Lisaldi
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 animate-fade-in-up delay-200">
            I'm Data Science Undergraduate at SLIIT
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in-up delay-400">
           Passionate about data analysis, machine learning, statistics, and modern web technologies. Eager to build innovative, real-world solutions through web and mobile application development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up delay-600">
            <button
              onClick={() => scrollToSection('#projects')}
              className="px-8 py-3 bg-transparent border-2 border-gray-400 text-gray-400 rounded-lg font-semibold hover:bg-gray-400 hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-3 bg-transparent border-2 border-gray-400 text-gray-400 rounded-lg font-semibold hover:bg-gray-400 hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in delay-800">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <social.icon className="w-6 h-6 md:w-7 md:h-7" />
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button
              onClick={() => scrollToSection('#about')}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Scroll to about"
            >
              <FaArrowDown className="w-8 h-8 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

