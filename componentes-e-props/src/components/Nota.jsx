function Nota({ disciplina, nota }) {
  return (
    <div className="nota">
      <strong>{disciplina}</strong>
      <p>Nota: {nota}</p>
    </div>
  );
}

export default Nota;