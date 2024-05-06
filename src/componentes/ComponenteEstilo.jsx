function ComponenteEstilo(props) {
  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#fff",
        width: "40%",
        marginLeft: "30%",
        padding: "2%",
        border: "2px solid yellow",
      }}
    >
      <div>{props.nome}</div>
      <div>{props.descricao}</div>
    </div>
  );
}

export { ComponenteEstilo };
