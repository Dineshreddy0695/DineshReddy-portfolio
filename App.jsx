
import './App.css'
import { Routes, Route } from 'react-router-dom'    
import { Navbar } from './Navbar'
import { Home } from './home'
import { About } from './About'
import { Projects } from './Projects'  
import { Contact } from './Contact'
import { Footer } from './Footer'
import {ExtraData }from './extradata'
import { Project1Data } from './project1data'
import { VirtualAssistant } from './project3'
import { Internship } from './project2data'
import {Privacy} from './privacy'
import { Terms } from './terms'
import { Contact2 } from './Contact2'
import { HomeWrapper } from './homewrapper'
import { NavbarWrapper } from './navwrapper'

function App() {
  return (
    <>
    <NavbarWrapper />
    
      <Routes>
        <Route
          path="/"
          element={
            <>
               <HomeWrapper />

              
              <ExtraData />
            </>
          }
        />
        
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project1data" element={<Project1Data />} />
        <Route path="/virtual-assistant" element={<VirtualAssistant />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact2" element={<Contact2 />} />
      </Routes>
     
      <Footer />
    </>
  );
}

export default App
