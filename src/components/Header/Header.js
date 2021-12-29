import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
    <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="4rem" /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/sherifessawy">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/sherif-khedr-67223393/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        {/* <SocialIcons href="#">
          <AiFillFacebook size="3rem"/>
        </SocialIcons> */}
      </Div3>
  </Container>
)

export default Header;
