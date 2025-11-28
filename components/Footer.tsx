import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/KulanyaLisaldi', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/kulanya-lisaldi-aa39a9293/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:kulanya.lisaldi@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Kulanya Lisaldi. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer

