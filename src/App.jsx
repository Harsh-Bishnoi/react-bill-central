import './App.css'
import ChooseUtilities from './components/ChooseUtilities'
import Footer from './components/Footer'
import StepsToSwitch from './components/StepsToSwitch'
import SwitchingEnergy from './components/SwitchingEnergy'
import Testimonials from './components/Testimonials'

function App() {

  return (
    <>
      <SwitchingEnergy />
      <StepsToSwitch />
      <ChooseUtilities />
      <Testimonials/>
      <Footer />
    </>
  )
}

export default App
