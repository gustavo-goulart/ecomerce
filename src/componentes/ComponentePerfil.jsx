function ComponentePerfil(props) {
  return (
    <div className="minhaClasse">
      <h1>Perfil</h1>

      <div>
        <p>Nome: {props.nome}</p>
        <p>Idade: {props.idade}</p>
      </div>

      <div>Descrição: {props.descricao}</div>
    </div>
  );
}

export { ComponentePerfil };
