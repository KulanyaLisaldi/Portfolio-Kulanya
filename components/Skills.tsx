import React from 'react'

const Skills = () => {
  const skills = [
    'Java',
    'Python',
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Express.js',
    'Next.js',
    'HTML',
    'CSS',
    'Statistics',
    'Git',
    'GitHub',
    'MySQL',
    'MongoDB',
    'Redis',
    'Postman',
    'R Programming',
  ]

  return (
    <section
      id="skills"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-900/30"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Skills & Technologies
          </h2>
        </div>

        {/* Skills Tags */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 md:px-6 md:py-3 bg-black text-white rounded-lg text-sm md:text-base font-medium hover:bg-gray-900 transition-colors duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
