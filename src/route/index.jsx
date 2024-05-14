import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ListaProdutos } from "../componentes/ListaProdutos";
import { Produto } from "../page/Produto";
import { Home } from "../page/home";
import { Login } from "../page/Login";

function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/listaprodutos" element={<ListaProdutos />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export { RouteApp };
