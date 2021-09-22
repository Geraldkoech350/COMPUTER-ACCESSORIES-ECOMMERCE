import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const Footer = () => {
    return (
        <footer>
        <Container>
        <Row>
        <Col className='text-center py-3'>Made by Gerald</Col>
        </Row>
            <Row>
                <Col className='text-center py-3'>Copyright &copy; 2021 Computer Accessories Ecommerce Site. All rights reserved</Col>
            </Row>
        </Container>
        </footer>
    )
}

export default Footer