import React from 'react';
import { DiFirebase, DiReact, DiPython, DiGit, DiHtml5, DiCss3, DiJavascript, DiNodejs } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
          <DiJavascript size="3rem" />
          <DiHtml5 size="3rem" />
          <DiCss3 size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React, JS, HTML, CSS, TailwindCSS and Styled-components
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
          <DiNodejs size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Firebase Auth and <br /> 
            Cloud Firestore
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiPython size="3rem" />
          <DiGit size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Others</ListTitle>
          <ListParagraph>
            Experience with <br />
            Python, git and github
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
