import "./App.css";
import "font-awesome/css/font-awesome.css";
import { NavBar } from "./componentes/NavBar";
import { CardProducts } from "./componentes/CardProducts";
import { Footer } from "./componentes/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <CardProducts />
      <CardProducts />
      <CardProducts />
      <Footer />
    </div>
  );
}

export default App;
