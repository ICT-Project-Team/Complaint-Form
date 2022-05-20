import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import RuppLogo from '../assets/rupp_logo.png';
import styled from "styled-components";
const NavbarComponent = () => {

    const rupp_header_font = {
        fontFamily: 'Angkor, cursive',
    }

    const TitleStyled = styled.img`
      filter: drop-shadow(0 4px 4px rgba(0,0,0,.25));
      margin-left: .5rem;
      aspect-ratio: 1;
      @media(max-width: 768px){
        width: 10em;
      }
    `
    const LogoStyled = styled.img`
      transform: scale(1.1);
      filter: drop-shadow(0 4px 4px rgba(0,0,0,.25));
      aspect-ratio: 240/55;
      @media(max-width: 768px){
        width: 2em;
      }
    `

    return (
        <Navbar variant="dark" style={{padding: 0}}>
            <Container>
                <Navbar.Brand href="http://rupp.edu.kh" style={{padding:"unset"}}>
                    <LogoStyled src={require('../assets/RUPP_Logo.svg').default} width={55} height={55} alt={"Royal University of Phnom Penh - Logo"}/>
                    <TitleStyled src={require('../assets/RUPP-title.svg').default} width={240} height={55} alt="Royal University of Phnom Penh - Title Logo"/>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent;