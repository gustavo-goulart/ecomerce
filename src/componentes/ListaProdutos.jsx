import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Bounce, toast } from "react-toastify";

function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);

  function mensagemDeErro(mensagem = "Mensagem de erro") {
    toast.error(mensagem, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  }

  return (
    <Row className="justify-content-md-center">
      <Col md={3}>
        <h1>Lista Produtos</h1>
      </Col>
    </Row>
  );
}

export { ListaProdutos };
