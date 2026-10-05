function Produto({ nome, descricao, preco, disponivel }) {
  return (
    <div className="produto-card">
      <h3>{nome}</h3>
      <p>{descricao}</p>
      <p className="preco">R$ {preco.toFixed(2)}</p>
      <p className={disponivel ? "disponivel" : "indisponivel"}>
        {disponivel ? "Disponível ✅" : "Indisponível ❌"}
      </p>
      <button>Comprar</button>
    </div>
  );
}

export default Produto;