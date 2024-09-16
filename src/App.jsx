
import './App.css'
import Contact from './Component/Contact/Contact'
import Experience from './Component/Experience/Experience'
import Footer from './Component/Footer/Footer'
import Intro from './Component/Intro/Intro'
import Navbar from './Component/Navbar/Navbar'
import Portfolio from './Component/Protfolio/Protfolio'
import Services from './Component/Services/Services'
import Testimonials from './Component/Testimonials/Testimonials'

function App() {

  return (
   <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
   </div>
  )
}

export default App
