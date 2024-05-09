import "./App.css";
import "font-awesome/css/font-awesome.css";
import { RouteApp } from "./route";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <RouteApp />
    </>
  );
}

export default App;
