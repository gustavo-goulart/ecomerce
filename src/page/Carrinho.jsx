import { useContext, useEffect, useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import { CarrinhoContext } from "../hooks/CarrinhoContext";
import { NavBar } from "../componentes/NavBar";

function Carrinho() {
  const { listaProdutosCarrinho, removerProduto } = useContext(CarrinhoContext);
  const [produtosCarrinho, setProdutosCarrinho] = useState([]);

  useEffect(() => {
    if (listaProdutosCarrinho) {
      setProdutosCarrinho(listaProdutosCarrinho);
    }
  }, [listaProdutosCarrinho]);

  return (
    <>
      <NavBar />
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h1>Lista de produtos carrinho </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Produto</th>
                <th>Descricao</th>
                <th>Preço</th>
                <th>#</th>
              </tr>
            </thead>
            <tbody>
              {produtosCarrinho.map((produtoCarrinho, index) => {
                return (
                  <tr>
                    <td> {produtoCarrinho.idProduto}</td>
                    <td> {produtoCarrinho.nomeProduto}</td>
                    <td> {produtoCarrinho.descricaoProduto}</td>
                    <td> R$ {produtoCarrinho.precoProduto} </td>
                    <td>
                      <Button
                        onClick={() =>
                          removerProduto(produtoCarrinho.idProduto)
                        }
                        variant="danger"
                      >
                        Remover
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
}

export { Carrinho };
