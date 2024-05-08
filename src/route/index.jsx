import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ListaProdutos } from "../componentes/ListaProdutos";
import { Produto } from "../page/Produto";

function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListaProdutos />} />
        <Route path="/produto" element={<Produto />} />
      </Routes>
    </BrowserRouter>
  );
}

export { RouteApp };