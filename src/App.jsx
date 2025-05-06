import './App.css'
import ChooseUtilities from './components/ChooseUtilities'
import Footer from './components/Footer'
import FrequentlyQuestions from './components/FrequentlyQuestions'
import StepsToSwitch from './components/StepsToSwitch'
import SwitchingEnergy from './components/SwitchingEnergy'
import Testimonials from './components/Testimonials'

function App() {

  return (
    <>
      <SwitchingEnergy />
      <StepsToSwitch />
      <ChooseUtilities />
      <Testimonials />
      <FrequentlyQuestions />
      <Footer />
    </>
  )
}

export default App
