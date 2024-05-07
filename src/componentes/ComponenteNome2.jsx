import { useState } from "react";

function ComponenteNome2() {
  const [nome, setNome] = useState("Gustavo");

  return (
    <div>
      <div className="btns">
        <button onClick={() => setNome("GUSTAVO GOULART")}>
          Alterar para apelido
        </button>
        <button onClick={() => setNome("GUSTAVO")}>Alterar para nome</button>
      </div>

      <p class="paragrafo-nome">Nome: {nome}</p>
    </div>
  );
}

export { ComponenteNome2 };
