import React from 'react'
import Threads from './animate-ui/components/backgrounds/Threads'

const LandingPage = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      
      <div className="absolute inset-0 z-0 ">
        <Threads 
          amplitude={2}
          distance={0}
          enableMouseInteraction={false}
        />
      </div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-5xl font-bold drop-shadow-white">
          Moody
        </h1>
        
      </div>

    </section>
  )
}

export default LandingPage
