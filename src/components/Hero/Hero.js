import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm Sherif <br />
        Frontend web dev
      </SectionTitle>
      <SectionText>
        I help customers all over the world build their web apps. 
        Specilaized in creating UI with React and can provide limited Backend services using Firebase.
      </SectionText>
      <Button onClick={props.handleClick}>Learn More</Button>
    </LeftSection>
  </Section>
)

export default Hero;