import TextType from './animate-ui/components/TextType/TextType';
import { FaGithub, FaLinkedin, FaTwitter, FaDiscord } from "react-icons/fa";
import React from 'react'

const AboutMe = () => {
  return (
    <>

      <section className="relative w-full h-screen overflow-hidden   border-neutral-900/50">
        <div className="container mx-auto h-full px-4 md:px-8 lg:px-16">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center h-full gap-8 md:gap-4 lg:gap-8">

            <div className='w-full md:w-1/2 max-w-lg space-y-6 order-1 md:order-1 md:ml-8 lg:ml-12'>

              <div className='flex items-center gap-2 sm:gap-3'>
                <div className='w-6 sm:w-8 h-px bg-white/20'></div>
                <h2 className='text-white/60 text-xl sm:text-2xl font-light tracking-[0.2em] sm:tracking-[0.3em]'>
                  HI
                </h2>
              </div>

              <div>
                <h2 className='text-white/60 text-3xl sm:text-4xl md:text-5xl font-light leading-[1.1]'>
                  I'M
                </h2>
                <h2 className='text-white text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1]'>
                  <span className='text-white/90 tracking-tight'>AMIR</span>
                </h2>
              </div>

              <div className='flex items-center gap-2 py-2 sm:py-3'>
                <div className='w-1 h-5 sm:h-7 bg-white/40'></div>
                <h3 className='text-white/70 text-lg sm:text-xl md:text-2xl font-light'>
                  <TextType
                    text={"Front-end Developer"}
                    typingSpeed={70}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                    deletingSpeed={25}
                    cursorBlinkDuration={0.6}
                  />
                </h3>
              </div>

              <div className='relative'>
                <div className='absolute inset-0 bg-white/5 blur-xl -z-10'></div>
                <p className='text-white/50 text-sm sm:text-base leading-relaxed font-light'>
                  21 year old frontend developer with experience in <b className='text-white/80'>building web applications</b>, I specialize in turning designs into fully functional code.
                </p>
              </div>

              <div className='flex gap-1 sm:gap-2 pt-2 sm:pt-4'>
                <div className='w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-white/20'></div>
                <div className='w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-white/10'></div>
                <div className='w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-white/5'></div>
              </div>

              <div className='flex gap-2 sm:gap-3 pt-2'>
                <a className='text-white/40 hover:text-white/70 transition'>
                  <FaGithub size={20} className='sm:w-6 sm:h-6 md:w-7 md:h-7' />
                </a>
                <a className='text-white/40 hover:text-white/70 transition'>
                  <FaLinkedin size={20} className='sm:w-6 sm:h-6 md:w-7 md:h-7' />
                </a>
                <a className='text-white/40 hover:text-white/70 transition'>
                  <FaTwitter size={20} className='sm:w-6 sm:h-6 md:w-7 md:h-7' />
                </a>
                <a className='text-white/40 hover:text-white/70 transition'>
                  <FaDiscord size={20} className='sm:w-6 sm:h-6 md:w-7 md:h-7' />
                </a>
              </div>
            </div>


            <div className='hidden md:flex w-full md:w-1/2 justify-center order-2 md:order-2'>
              <img
                className="h-auto w-40 sm:w-48 md:w-52 lg:w-60 animate-pulse drop-shadow-[0_0_5px_rgba(255,255,255,.3)] hover:animate-none hover:brightness-110"
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="logo"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default AboutMe;