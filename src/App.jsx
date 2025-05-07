import './App.css'
import ChooseUtilities from './components/ChooseUtilities'
import ComprehensiveUtility from './components/ComprehensiveUtility'
import Footer from './components/Footer'
import FrequentlyQuestions from './components/FrequentlyQuestions'
import Hero from './components/Hero'
import LogoSwiper from './components/LogoSwiper'
import StepsToSwitch from './components/StepsToSwitch'
import SwitchingEnergy from './components/SwitchingEnergy'
import Testimonials from './components/Testimonials'

function App() {

  return (
    <>
      <Hero />
      <LogoSwiper/>
      <SwitchingEnergy />
      <StepsToSwitch />
      <ComprehensiveUtility />
      <ChooseUtilities />
      <Testimonials />
      <FrequentlyQuestions />
      <Footer />
    </>
  )
}

export default App
