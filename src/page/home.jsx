import { Container } from "react-bootstrap";
import { NavBar } from "../componentes/NavBar";
import { CarouselAnuncios } from "../componentes/CarouselAnuncios";
import { ListaProdutos } from "../componentes/ListaProdutos";
import { Footer } from "../componentes/Footer";

function Home() {
  return (
    <Container>
      <NavBar />
      <CarouselAnuncios />
      <ListaProdutos />
      <Footer />
    </Container>
  );
}

export { Home };
