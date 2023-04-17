import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { Container } from 'react-bootstrap';

const Layout = ({ children }) => {
    return (
        <>
            <Header />

            <Container className='main'>
                {children}
            </Container>

            <Footer />
        </>
    )
}
export default Layout;