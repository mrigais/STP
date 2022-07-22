import { hover } from '@testing-library/user-event/dist/hover'
import React, {useState} from 'react'
import Video from '../../videos/giantwheel.mp4'
import { WelcomeContainer, 
         WelcomeBg, VideoBg, 
         WelcomeContent, WelcomeH1,
         WelcomeP, WelcomeBtnWrapper, 
         ArrowForward,ArrowRight } from './welcome_component_elements'
import {Button} from '../button_element'


const WelcomeSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }
    return (
    <WelcomeContainer>
        <WelcomeBg>
            <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
        </WelcomeBg>
        <WelcomeContent>
            {/* <WelcomeH1>Ayo nigga this S.T.P, represent cuz!</WelcomeH1>
            <WelcomeP>
                We’re a bunch of unusual misfits with a shared love for
                storytelling, advertising, and art.
                A team of over-thinkers, enthu cutlets, baggy cloth-wearing
                introverts, and pop culture maniacs who believe in:

                Captivating storytelling that makes you want to be the
                protagonist
                Compelling creativity that makes you go,
                “That’s it, that’s
                what I’m talkin’ about!”
                A bond so strong that makes Fevicol shy away
            </WelcomeP> */}
            <WelcomeBtnWrapper>
                <Button 
                to="signup" 
                onMouseEnter={onHover} 
                onMouseLeave={onHover}
                primary='true'
                dark='true'>
                    Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
                </Button>
            </WelcomeBtnWrapper>

        </WelcomeContent>
    </WelcomeContainer>
  )
}

export default WelcomeSection
