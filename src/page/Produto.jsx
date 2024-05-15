import { Container } from "react-bootstrap";
import { ListaProdutos } from "../componentes/ListaProdutos";

function Produto() {
  return (
    <Container className="mt-2">
      <ListaProdutos />
    </Container>
  );
}

export { Produto };
