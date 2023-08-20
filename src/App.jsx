import './App.css'
import About from './componenets/About'
import Contact from './componenets/Contact'
import Hero from './componenets/Hero.jsx'
import Navbar from './componenets/Navbar'
import Projects from './componenets/Projects'

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
