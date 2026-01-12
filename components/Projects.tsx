import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'Blinkit - Sales Performance Power BI Dashboard',
      Date: 'Jan 2026 - Jan 2026',
      description:
        'This project explores KPIs, sales trends, outlet segmentation, geographic insights, and item-level performance, helping identify actionable business opportunities.',
      technologies: ['PowerBI', 'Data Analysis', 'Data Visualization', 'DAX'],
      image: '/DashboardScreenshot.png',
      github: 'https://github.com/KulanyaLisaldi/Blinkit-Sales-Performance-Power-BI-Dashboard',
    },
    {
      title: 'Shopify - Sales & Customer Funnel Report Dashboard',
      Date: 'Dec 2025 - Dec 2025',
      description:
        'This repository contains a comprehensive Power BI dashboard that analyzes Shopify sales and customer behavior using data visualization and business intelligence techniques. The dashboard provides insights into revenue trends, sales performance, customer funnel stages, and key performance metrics. It was developed as a self-learning project by following a real-time Power BI Shopify tutorial.',
      technologies: ['PowerBI', 'Data Analysis'],
      image: '/Dashboard.png',
      github: 'https://github.com/KulanyaLisaldi/shopify-powerbi-dashboard',
    },
    {
      title: 'Portfolio Website',
      Date: 'Nov 2025 - Dec 2025',
      description:
        'This is my personal portfolio website created to present my skills, academic projects, and achievements as an IT undergraduate. The website is built with TypeScript and Next.js, featuring a modern and responsive design.',
      technologies: ['TypeScript', 'Next.js', 'CSS', 'Git'],
      image: '/portfolio.png',
      github: 'https://github.com/KulanyaLisaldi/Portfolio-Kulanya',
    },
    {
      title: 'MediCare',
      Date: 'Aug 2025 - Oct 2025',
      description:
        'MediCare is a full-stack online pharmacy and channeling management system that helps users easily buy medicines, book doctors, upload prescriptions, and track deliveries.',
      technologies: ['React', 'Express.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Git'],
      image: '/medicare.png',
      github: 'https://github.com/KulanyaLisaldi/Medicare_Pharmacy_ITP_W200',
    },
    {
      title: 'eRemedy',
      Date: 'Mar 2025 - May 2025',
      description:
        'eRemedy is a Java based online medicine ordering system. The platform allows customers to browse medicines, add items to cart, and place orders. Built as an Eclipse project with a MySQL database backend.',
      technologies: ['Java', 'MySQL', 'Eclipse', 'Git','HTML', 'Bootstrap', 'JavaScript'],
      image: '/eremedy.png',
      github: 'https://github.com/KulanyaLisaldi/Medicare_Pharmacy_ITP_W200',
    },
    {
      title: 'PharmacyX',
      Date: 'Sep 2024 - Oct 2024',
      description:
        'PharmacyX is an online pharmacy system for browsing medications, uploading prescriptions, and managing orders. Built with HTML, CSS, JavaScript, PHP, and MySQL.',
      technologies: ['PHP', 'HTML', 'CSS', 'MySQL', 'JavaScript', 'Git'],
      image: '/pharmacyx.png',
      github: 'https://github.com/KulanyaLisaldi/Online_Pharmacy_Portal',
    },
  ]

  return (
    <section
      id="projects"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of projects I've worked on, showcasing my skills and
            experience
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 overflow-hidden hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-gray-800/50 flex items-center justify-center overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                   />
                </div>


              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-xs mb-2">
                  {project.Date}
                </p>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span className="text-sm">Source</span>
                  </a>
                  {/*<a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <FaExternalLinkAlt className="w-5 h-5" />
                    <span className="text-sm">Live Demo</span>
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

