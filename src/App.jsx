
import './App.css'
import AboutMe from './components/AboutMe'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <Navbar />



      <div className="min-h-screen w-full bg-black relative overflow-hidden">

        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: `
       radial-gradient(
         circle at top,
         rgba(255, 255, 255, 0.05) 0%,
         rgba(255, 255, 255, 0.05) 20%,
         rgba(0, 0, 0, 0.0) 60%
       ),
       radial-gradient(
         circle at bottom,
         rgba(255, 255, 255, 0.05) 0%,
         rgba(255, 255, 255, 0.05) 20%,
         rgba(0, 0, 0, 0.0) 60%
       )
     `,
          }}
        />
        <LandingPage />
        <AboutMe />
        <Skills />
        <Projects />
        <Footer />

      </div>


    </>
  )
}

export default App
