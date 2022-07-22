import React, {useState} from 'react'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/data'
import NavigationBar from '../components/NavigationBar'
import Sidebar from '../components/Sidebar'
import WelcomeSection from '../components/WelcomeComponent'
import Services from '../components/Services'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    //a function to update the state
    const toggle = () =>{
        setIsOpen(!isOpen)
    }
  return (
    <>
     <Sidebar isOpen={isOpen} toggle={toggle}/>
      <NavigationBar toggle={toggle} /> 
      <WelcomeSection />
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <Services/>
      <InfoSection {...homeObjThree}/>
      {/* <ContactUs/> */}
      <Footer />


    </>
  )
}

export default Home