import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5">
      <Container>
        <Row>
          <div className="footer-colums mt-2 d-flex gap-4">
            <Col>
              <h5>IDK Shop</h5>
              <p>Rua Vicente Ciccarino, 60 Boa Vista - Curitiba / PR</p>
            </Col>
            <Col>
              <h5>Links Úteis</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Link 1</a>
                </li>
                <li>
                  <a href="/">Link 2</a>
                </li>
                <li>
                  <a href="/">Link 3</a>
                </li>
              </ul>
            </Col>
            <Col>
              <h5>Redes Sociais</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Instagram</a>
                </li>
                <li>
                  <a href="/">Twitter</a>
                </li>
                <li>
                  <a href="/">YouTube</a>
                </li>
              </ul>
            </Col>
          </div>
        </Row>
        <Row>
          <Col className="text-center">
            <p>
              &copy; {new Date().getFullYear()} Todos os direitos reservados
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export { Footer };
