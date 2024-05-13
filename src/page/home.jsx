import { Container } from "react-bootstrap";
import { NavBar } from "../componentes/NavBar";
import { CarouselAnuncios } from "../componentes/CarouselAnuncios";
import { ListaProdutos } from "../componentes/ListaProdutos";
import { Footer } from "../componentes/Footer";

function Home() {
  return (
    <Container className="mt-2">
      <NavBar />
      <CarouselAnuncios />
      <ListaProdutos />
      <Footer />
    </Container>
  );
}

export { Home };
