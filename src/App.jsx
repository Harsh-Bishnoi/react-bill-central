import './App.css'
import ChooseUtilities from './components/ChooseUtilities'
import ComprehensiveUtility from './components/ComprehensiveUtility'
import Footer from './components/Footer'
import FrequentlyQuestions from './components/FrequentlyQuestions'
import Header from './components/Header'
import StepsToSwitch from './components/StepsToSwitch'
import SwitchingEnergy from './components/SwitchingEnergy'
// import Testimonials from './components/Testimonials'

function App() {

  return (
    <>
      <Header/>
      <SwitchingEnergy />
      <StepsToSwitch />
      <ComprehensiveUtility />
      <ChooseUtilities />
      {/* <Testimonials /> */}
      <FrequentlyQuestions />
      <Footer />
    </>
  )
}

export default App
