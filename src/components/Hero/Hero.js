import React, {useState, useLayoutEffect}  from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, InvisibleBtn } from './HeroStyles';

const Hero = (props) => {
  const [offset, setOffset] = useState(false);

  useLayoutEffect(() => {
    window.onscroll = () => {
      if(window.pageYOffset>570){
        setOffset(true)
      } else {
        setOffset(false)
    }}
  }, [])
  
  const handleClick = ()=>{
    console.log('hello')
  }

  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I'm Sherif <br />
          Frontend web dev
        </SectionTitle>
        <SectionText>
          I help customers all over the world build their web apps. 
          I'm specilaized in creating UI with React and can provide Backend services with Firebase.
        </SectionText>
        <Button>Learn More</Button>
        {/* <InvisibleBtn offset={offset}>Learn<br/>More</InvisibleBtn> */}
      </LeftSection>
    </Section>
  )
}
export default Hero;