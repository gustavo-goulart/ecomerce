import { Container } from "react-bootstrap";
import { ListaProdutos } from "../componentes/ListaProdutos";
import { NavBar } from "../componentes/NavBar";

function Produto() {
  return (
    <Container className="mt-2">
      <NavBar />
      <ListaProdutos />
    </Container>
  );
}

export { Produto };
