import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ListaProdutos } from "../componentes/ListaProdutos";
import { Produto } from "../page/Produto";
import { Home } from "../page/home";
import { Login } from "../page/Login";
import { Contato } from "../page/Contato";

function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/produto" element={<ListaProdutos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export { RouteApp };
