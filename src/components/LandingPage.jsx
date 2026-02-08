import React from 'react'
import Threads from './animate-ui/components/backgrounds/Threads'

const LandingPage = () => {
  return (
    <>
      <section className="relative w-full h-screen overflow-hidden bg-black">

        <div className="absolute inset-0 z-0 ">
          <Threads
            amplitude={2}
            distance={0}
            enableMouseInteraction={false}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-4 px-4 text-center">
          <h1 className="text-white font-bold 
                 text-3xl sm:text-4xl md:text-5xl">
            Moody
          </h1>

          <p className="text-gray-300 
                text-sm sm:text-base md:text-lg 
                max-w-sm sm:max-w-md md:max-w-xl
                leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis itaque
            laudantium sequi eveniet aliquid eius officiis.
          </p>
        </div>

      </section>
      <section className="relative w-full h-screen overflow-hidden bg-gray-800">



      </section>

    </>
  )
}

export default LandingPage
