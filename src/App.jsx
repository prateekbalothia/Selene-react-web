import Navbar from './components/header/navbar'
import Hero from './components/hero/hero'
import About from './components/main/about/about'
import Services from './components/main/services/Services'
import Porfolio from './components/main/porfolio/Portfolio'
import Team from './components/main/team/Team'
import Contactus from './components/main/Contact/Contactus'
import Error from './components/errorpage/Error'
import Footer from './components/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import "boxicons/css/boxicons.min.css";


// import './App.css'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Hero/>}/>
        <Route exact path='/home' element={<Hero/>}/>
        <Route exact path='/about-us' element={<About/>}/>
        <Route exact path='/services' element={<Services/>}/>
        <Route exact path='/portfolio' element={<Porfolio/>}/>
        <Route exact path='/team' element={<Team/>}/>
        <Route exact path='/contact-us' element={<Contactus/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
