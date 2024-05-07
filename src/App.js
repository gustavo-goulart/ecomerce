import "./App.css";
import { ComponenteNome } from "./componentes/ComponenteNome";
import { ComponenteResumoNome } from "./componentes/ComponenteResumoNome";
import { ComponenteEstilo } from "./componentes/ComponenteEstilo";
import { ComponentePerfil } from "./componentes/ComponentePerfil";
import { ComponenteNome2 } from "./componentes/ComponenteNome2";
import Button from "react-bootstrap/Button";
import "font-awesome/css/font-awesome.css";

function App() {
  return (
    <div className="App">
      <h2>Importando Componentes</h2>
      <hr />
      <ComponenteNome />
      <hr />
      <ComponenteResumoNome>
        Moro em Curitiba, sou estudande de T.I, estudo na Harve, trabalhando com
        FrontEnd
      </ComponenteResumoNome>
      <hr />
      <ComponenteEstilo nome="HTML" descricao="Fazer página static" />
      <ComponenteEstilo nome="CSS" descricao="Completar o curso HTML" />
      <hr />
      <ComponentePerfil
        nome="Gustavo Goulart"
        idade="42 anos"
        descricao="Estudante do Curso Desenvolvimento Web pela Harve"
      />
      <hr />
      <ComponenteNome2 />
      <hr />
      <h2>Botão do Bootstrap</h2>
      <Button variant="primary">Primary</Button>{" "}
    </div>
  );
}

export default App;
