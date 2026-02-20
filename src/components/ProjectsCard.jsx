import React from 'react'
import { FaGithub, FaExternalLinkAlt, FaImage } from 'react-icons/fa'

const ProjectsCard = ({ obj }) => {
  return (
    <div className="w-full">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">

        {obj.map((project) => (
          <div
            key={project.name}
            className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
          >

            <div className="relative w-full aspect-video overflow-hidden bg-to-br from-white/5 to-white/10">
              {project.image ? (
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-white/20 text-6xl font-light"><FaImage size={150} /></span>
                </div>
              )}
            </div>

            <div className="p-5">
              <h3 className="text-white text-lg font-bold mb-2">{project.name}</h3>
              <p className="text-white/50 text-sm mb-4 line-clamp-2">{project.desc}</p>

              <div className="flex items-center gap-2">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white/60 text-xs flex items-center justify-center gap-1 hover:bg-white/10 hover:text-white/80 transition-all"
                  >
                    <FaExternalLinkAlt size={10} />
                    <span>Live</span>
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white/60 text-xs flex items-center justify-center gap-1 hover:bg-white/10 hover:text-white/80 transition-all"
                  >
                    <FaGithub size={12} />
                    <span>Code</span>
                  </a>
                )}
              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  )
}

export default ProjectsCard