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
    'Power BI',
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

        {/* Certificates */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-white text-center">
            Certificates
          </h3>

          <div className="w-full mx-auto grid gap-4 grid-cols-1">
            {/* Example certificate card – replace with your real certificate details */}
            <div className="bg-black/60 border border-gray-800 rounded-xl p-4 md:p-5 text-white flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold text-lg">Python for Beginners</p>
                  <p className="text-sm text-gray-300">University of Moratuwa</p>
                  <p className="text-xs text-gray-400 mt-1">2025 December</p>
                </div>

                <div className="flex flex-row items-start justify-end gap-2">
                  {/* Verify link (e.g., credential ID / verification URL) */}
                  
                  {/* View certificate (PDF / image / site) */}
                  <a
                    href="https://open.uom.lk/lms/mod/customcert/view.php?id=675&downloadown=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg text-xs font-medium border border-gray-600 hover:bg-gray-800 transition-colors whitespace-nowrap"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </div>

            {/* Duplicate and edit this block for more certificates */}
            {/*
            <div className="bg-black/60 border border-gray-800 rounded-xl p-4 md:p-5 text-white flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold text-lg">Another Certificate</p>
                  <p className="text-sm text-gray-300">Issuer</p>
                  <p className="text-xs text-gray-400 mt-1">Month Year</p>
                </div>

                <div className="flex flex-row items-start justify-end gap-2">
                  <a
                    href="https://verify-link-here"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-emerald-600 hover:bg-emerald-500 transition-colors whitespace-nowrap"
                  >
                    Verify
                  </a>
                  <a
                    href="https://view-certificate-link-here"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg text-xs font-medium border border-gray-600 hover:bg-gray-800 transition-colors whitespace-nowrap"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
            */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
