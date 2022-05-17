import React from 'react';
import { Card, Container } from 'react-bootstrap';
import RuppHeader from '../assets/headerbackground.jpg';
import '../styles.css';
import NavbarComponent from './navbar';
const Header = () => {

    const khmerMoulFont = { fontFamily: 'Angkor, cursive' };

    return (
        <Card className="header text-white">
            {/* <Card.Img src="holder.js/100px270" alt="Card image" /> */}
            <Card.ImgOverlay>
                <NavbarComponent />
                <Container>
                    <Card.Title style={khmerMoulFont}>
                        ពាក្យបណ្ដឹងតវ៉ា <br/> 
                        <span style={
                            {
                                fontSize: '1.5rem', 
                                fontWeight: 'lighter',
                                fontFamily: 'Roboto, sans-serif'
                            }
                        }>Complaint Form</span>
                    </Card.Title>
                </Container>
            </Card.ImgOverlay>
        </Card>
    )
}

export default Header;