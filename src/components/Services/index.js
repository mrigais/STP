import React from 'react'
import Icon1 from '../../images/marketing.svg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './services_elements'

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1> How Can We Help? </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    {/* <ServicesIcon src={Icon1}/> */}
                    {/* <ServicesH2>Reduce Expenses</ServicesH2> */}
                    <ServicesP>Everyone loves a good story. It captivates your mind and leaves
you in awe, wanting more of it.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    {/* <ServicesH2>Reduce Expenses</ServicesH2> */}
                    <ServicesP>At Spinning Top Media we know two things, to build a successful
digital brand and tell mesmerising stories while doing it.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    {/* <ServicesH2>Reduce Expenses</ServicesH2> */}
                    <ServicesP>We weave a narrative for your enterprise to elevate your brand
using our skills of marketing, advertising, film making, and
copywriting.
</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
    </ServicesContainer>
      
  )
}

export default Services
