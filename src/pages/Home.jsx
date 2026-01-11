import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import SplashCursor from '../components/SplashCursor'

function Home() {
  return (
    <div>
      <SplashCursor />
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home
