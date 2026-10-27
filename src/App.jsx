import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech,   //Add Feedback hee and in the return too
  Works, Certifications, StarsCanvas } from './components'
import { LazyMount } from './hoc'

const App = () => {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover
      bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Certifications />
      <div className="relative z-0">
        <Contact />
        <LazyMount className="w-full h-auto absolute inset-0 z-[-1]" rootMargin="400px">
          <StarsCanvas />
        </LazyMount>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
