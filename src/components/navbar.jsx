import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import RuppLogo from '../assets/rupp_logo.png';
const NavbarComponent = () => {

    const rupp_header_font = {
        fontFamily: 'Angkor, cursive',
    }

    return (
        <Navbar variant="dark">
            <Container>
                <Navbar.Brand href="http://rupp.edu.kh">
                    <img
                        alt=""
                        src={RuppLogo}
                        width="65"
                        height="65"
                        className="d-inline-block align-top"
                    />{' '}
                    <p className='nav-brand-text' style={{fontFamily: 'Hanuman, serif'}}>
                        សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ<br />
                        <span style={{fontFamily: 'Roboto, sans-serif'}}>Royal University of Phnom Penh</span>
                    </p>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent;