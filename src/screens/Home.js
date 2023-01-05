import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

function Home(){
    return(
        <Container className='telainicial'>
            <Row>
                <Col>
                <h1 style={{fontSize: "5rem"}}>Tela inicial</h1>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;