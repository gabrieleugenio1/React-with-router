import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function telaLogin() {
    return (
        <Container>
            <Row className='main'>
                <Col className='banner'>

                </Col>
                <Col className='form'>
                    <Form>
                        <h2>Login</h2>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Informe seu e-mail" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Informe sua senha" />
                        </Form.Group>
                       
                        <div className="d-grid gap-3">
                        <Link to='/home'>
                        <Button variant="primary" type="submit" size='lg' className='btn_cad'>
                            Acessar
                        </Button>
                        </Link>

                        <Link to='/cadastrousuario'><Button variant="danger" type="button" size='lg' className='btn_cad'>
                        Cadastre-se
                        </Button></Link>
                        </div>
                    </Form>

                    
                </Col>
            </Row>
        </Container>
    );
}



export default telaLogin;