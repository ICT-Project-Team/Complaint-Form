import React from 'react';
import { Card, Container } from 'react-bootstrap';
import '../styles.css';
import NavbarComponent from './navbar';
import { motion } from 'framer-motion'
const Header = () => {

    return (
        <Card className="header text-white" style={{
            borderRadius:"unset",
            border: "unset",
        }}>
            <Card.ImgOverlay style={{padding:".75em 1em"}}>
                <NavbarComponent />
                <Container>
                    <motion.div
                        initial={{x:"-150px",opacity: 0}}
                        animate={{x: "0", opacity: 1}}
                        transition={{delay: 0.15, duration: .25}}
                    >
                        <Card.Title>
                        <span style={{fontFamily: 'var(--font-Koulen)'}}>
                            ពាក្យបណ្ដឹងតវ៉ា
                        </span>
                            <br/>
                            <span style={
                                {
                                    fontSize: '1.5rem',
                                    fontWeight: 'light',
                                    fontFamily: 'Roboto, sans-serif'
                                }
                            }>Complaint Form</span>
                        </Card.Title>
                    </motion.div>
                </Container>
            </Card.ImgOverlay>
        </Card>
    )
}

export default Header;