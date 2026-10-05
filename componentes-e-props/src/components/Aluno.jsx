function Aluno({ nome, turma }) {
  return (
    <div className="aluno">
      <strong>{nome}</strong>
      <p>Turma: {turma}</p>
    </div>
  );
}

export default Aluno;