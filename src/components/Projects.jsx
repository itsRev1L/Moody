import React from 'react'
import ProjectsCard from './ProjectsCard'

const Projects = () => {
  const projects = [
    { name: "TEST", desc: "TEST", image: "", live: "https://github.com/itsRev1L", github: "https://github.com/itsRev1L" },
    { name: "TEST", desc: "TEST", image: "", live: "https://github.com/itsRev1L", github: "https://github.com/itsRev1L" },
    { name: "TEST", desc: "TEST", image: "", live: "https://github.com/itsRev1L", github: "https://github.com/itsRev1L" },
    { name: "TEST", desc: "TEST", image: "", live: "https://github.com/itsRev1L", github: "https://github.com/itsRev1L" },
    { name: "TEST", desc: "TEST", image: "", live: "https://github.com/itsRev1L", github: "https://github.com/itsRev1L" },
    { name: "TEST", desc: "TEST", image: "", live: "https://github.com/itsRev1L", github: "https://github.com/itsRev1L" },
  ]

  return (
    <section className="w-full min-h-screen bg-black py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">

        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-white/60 text-sm sm:text-base font-light tracking-[0.3em] mb-3">
            MY WORK
          </h2>
          <h3 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
            Featured <span className="text-white/70">Projects</span>
          </h3>
        </div>

        <ProjectsCard obj={projects} />

      </div>
    </section>
  )
}

export default Projects