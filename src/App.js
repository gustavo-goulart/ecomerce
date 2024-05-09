import "./App.css";
import "font-awesome/css/font-awesome.css";
import { RouteApp } from "./route";
import { ToastContainer } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <RouteApp />
    </>
  );
}

export default App;
