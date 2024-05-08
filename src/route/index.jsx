import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ListaProdutos } from "../componentes/ListaProdutos";

function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListaProdutos />} />
      </Routes>
    </BrowserRouter>
  );
}

export { RouteApp };
