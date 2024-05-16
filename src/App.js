import "./App.css";
import "font-awesome/css/font-awesome.css";
import { RouteApp } from "./route";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import CarrinhoContextProvider from "./hooks/CarrinhoContext";

function App() {
  return (
    <>
      <CarrinhoContextProvider>
        <ToastContainer />
        <RouteApp />
      </CarrinhoContextProvider>
    </>
  );
}

export default App;
