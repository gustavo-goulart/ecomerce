import Form from "react-bootstrap/Form";

function FormContato() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <h1>Contato</h1>
        <Form.Label>Seu Email</Form.Label>
        <Form.Control type="email" placeholder="nome@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Mensagem:</Form.Label>
        <Form.Control
          placeholder="Digite sua mensagem aqui..."
          as="textarea"
          rows={3}
        />
      </Form.Group>
      <button className="button-form" type="submit">
        Enviar
      </button>
    </Form>
  );
}

export { FormContato };
