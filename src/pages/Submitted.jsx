import React from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import done from '../assets/maps-and-flags.png';
const Submitted = () => {

    const Hanuman = { fontFamily: 'Hanuman, serif'};

    return (
        <div
            className='container-fluid'
            style={{
                height: '50%',
                display: 'flex',
                alignItems: 'center'
            }}>
            <br />
            <Container>
                <Image
                    src={done}
                    style={{ marginBottom: '1.5rem' }}
                />
                <h3
                    style={Hanuman}
                >បណ្ដឹងត្រូវបានស្នើដោយជោគជ័យ</h3>
                <br />
                <Link className='btn btn-primary' style={
                    {
                        fontFamily: 'Hanuman, serif',
                        backgroundColor: '#831717',
                    }
                } to={'/'}>
                    ដាក់ស្នើបណ្ដឹងបន្ថែម
                </Link>
            </Container>
            <br />
        </div>
    );
}

export default Submitted;