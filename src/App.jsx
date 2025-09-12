
import './App.css'
import { Routes, Route } from 'react-router-dom'    
import { Navbar } from './Navbar'
import { Home } from './home'
import { About } from './About'
import { Projects } from './Projects'  
import { Contact } from './Contact'

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Contact />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
    </>
  )
}

export default App
