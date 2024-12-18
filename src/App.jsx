import './App.css'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import MyExperience from './components/MyExperience'
import MyProjects from './components/MyProjects'
import MySkills from './components/MySkills'
import MyTestmonial from './components/MyTestmonial'
import Navbar from './components/Navbar'

function App() {


  return (
    <>

      <Navbar />
      <Hero />
      <MySkills />
      <MyExperience />
      <AboutMe />
      <MyProjects />
      <MyTestmonial />
      <Contact />
      <Footer/>
    </>
  )
}

export default App
