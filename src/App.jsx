
import './App.css'
import Footer from './components/Footer/Footer'
import NavBar from './components/Navbar/NavBar'
import AboutMe from './sections/About/AboutMe'
import Badges from './sections/Badges/Badges'
import Community from './sections/Community/Community'
import Contacts from './sections/Contacts/Contacts'
import Education from './sections/Education/Education'
import Experience from './sections/Experience/Experience'
import Languages from './sections/Languages/Languages'
import Project from './sections/Projects/Project'
import Referees from './sections/Referees/Referees'
import Header from './sections/header/Header'
import Portfolio from './sections/portfolio/Portfolio'

function App() {
  

  return (
    <div>
      <NavBar/>
      <Header/>
      <AboutMe/>
      <Education/>
      <Portfolio/>
      <Project/>
      <Experience/>
      <Languages/>
      <Referees/>
      <Badges/>
      <Community/>
      <Contacts/>
      <Footer/>


    </div>

  )
}

export default App
