import React from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "../login.css";
import "bootstrap/dist/css/bootstrap.min.css";

function telaCadastrar() {
  return (
    <Container>
      <Row className="main">
        <Col className="banner" />
        <Col className="form">
          <Form>
            <h2>Cadastro de Usuário</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nome:</Form.Label>
              <Form.Control type="text" placeholder="Informe seu nome" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email:</Form.Label>
              <Form.Control type="email" placeholder="Informe seu e-mail" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                 <Form.Label>Senha:</Form.Label>
              <Form.Control type="password" placeholder="Informe sua senha" />
            </Form.Group>

            <div className="d-grid gap-2" style={{justifyContent: 'center'}}>
            <Link to='/'><Button variant="primary" type="submit" size="lg">
                Cadastrar
              </Button></Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default telaCadastrar;
