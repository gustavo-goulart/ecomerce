function ComponentePerfil(props) {
  return (
    <div className="minhaClasse">
      <h1 id="titulo">Perfil</h1>

      <div class="paragrafos">
        <p>Nome: {props.nome}</p>
        <p>Idade: {props.idade}</p>
      </div>

      <div class="descricao">Descrição: {props.descricao}</div>
    </div>
  );
}

export { ComponentePerfil };
