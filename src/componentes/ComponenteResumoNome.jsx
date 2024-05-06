function ComponenteResumoNome(props) {
  return (
    <div>
      <h3>Resumo sobre mim: </h3>
      <p>{props.children}</p>
    </div>
  );
}

export { ComponenteResumoNome };
