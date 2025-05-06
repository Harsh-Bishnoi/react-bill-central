import './App.css'
import ChooseUtilities from './components/ChooseUtilities'
import Footer from './components/Footer'
import StepsToSwitch from './components/StepsToSwitch'
import SwitchingEnergy from './components/SwitchingEnergy'

function App() {

  return (
    <>
      <SwitchingEnergy />
      <StepsToSwitch />
      <ChooseUtilities/>
      <Footer/>
    </>
  )
}

export default App
