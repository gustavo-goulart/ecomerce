import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo_idkshop from "../assets/images/logo_idkshop.png";
import { GerenciarLogin } from "./GereciarLogin";

function NavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo_idkshop} />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="../">Home</Nav.Link>
          <Nav.Link href="../Produto">Produtos</Nav.Link>
          <Nav.Link href="../Contato">Contato</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <GerenciarLogin />
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export { NavBar };
