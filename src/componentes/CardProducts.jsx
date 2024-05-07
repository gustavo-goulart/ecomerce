import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import caneca_amigo_pqna from "../assets/images/caneca_amigo_pqna.png";

function CardProducts() {
  return (
    <div className="d-flex justify-content-center mb-2 flex-wrap">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={caneca_amigo_pqna} />
        <Card.Body>
          <Card.Title>Caneca Cerâmica Amigos</Card.Title>
          <Card.Text>
            Caneca em cerâmica AAA ideal para presentear aquele seu amigo
            especial
          </Card.Text>
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export { CardProducts };
