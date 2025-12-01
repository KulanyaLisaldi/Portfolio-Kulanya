import React from 'react'
import Image from 'next/image'

const About = () => {
  const educationItems = [
    {
       // replace with your institute logo path in /public
      institute: 'SLIIT',
      description:
        'BSc (Hons) in Information Technology specialising in Data Science.',
      date: '2023 – Present',
    },
    {
       // update with your school/college badge
      institute: 'St. Mary\'s Convent, Matara',
      description:
        'GCE Advanced Level – Physical Science (Mathematics, Physics, Chemistry).',
      date: '2009 – 2022',
    },
  ]

  return (
    <section
      id="about"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm Kulanya Lisaldi, an undergraduate student at SLIIT specializing in Data Science.
              I’m passionate about exploring data-driven insights, machine learning concepts, and modern web development. 
              I enjoy creating intuitive, clean, and user-focused digital experiences. 
              My goal is to combine data, creativity, and technology to solve real-world problems and continue evolving as a developer.
            </p>
          </div>

          {/* Right Side - Education Card */}
          <div className="flex justify-center md:justify-end">
            <div className="max-w-xl w-full bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-6">
                Education
              </h3>

              <div className="space-y-6">
                {educationItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center md:items-start sm:justify-between gap-4 sm:gap-6 border border-transparent border-b-gray-800/60 pb-6 last:pb-0 last:border-none"
                  >
                    <div className="flex items-center sm:items-start gap-4">
                      
                      <div>
                        <h4 className="text-sm sm:text-base md:text-lg font-semibold text-white">
                          {item.institute}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-400 mt-1">
                          {item.date}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed text-center sm:text-left md:text-right md:text-base md:max-w-xs">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

