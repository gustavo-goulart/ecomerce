import { Container } from "react-bootstrap";
import { FormContato } from "../componentes/FormContato";

import formContato from "../assets/css/formContato.css";
import { NavBar } from "../componentes/NavBar";
import { Footer } from "../componentes/Footer";

function Contato() {
  return (
    <Container className="mt-2">
      <NavBar />
      <FormContato />
      <Footer />
    </Container>
  );
}

export { Contato };
