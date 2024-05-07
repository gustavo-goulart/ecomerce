import { useEffect, useState } from "react";

function ComponenteResumoNome(props) {
  const [nome, setNome] = useState("Gustavo");

  useEffect(() => {
    alert(`Alterado o nome para ${nome}`);
  }, [nome]);

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

export { ComponenteResumoNome };
