import './App.css';
import Titulo from './components/Titulo';
import Aluno from './components/Aluno';
import Produto from './components/Produto';
import Nota from './components/Nota';

function App() {
  return (
    <div className="App">
      <Titulo />


      <div className="caixa-pessoa">
        <Aluno 
          nome="Carlos"
          turma="DS"
          notaReact={8.5}
          notaJS={9}
          notaHTML={7.8}
        />
      </div>


      <div className="caixa-pessoa">
        <Aluno 
          nome="Ana"
          turma="DS"
          notaReact={10}
          notaJS={8}
          notaHTML={9.2}
        />
      </div>


      <div className="caixa-pessoa">
        <Aluno 
          nome="Pedro"
          turma="DS"
          notaReact={7}
          notaJS={8.5}
          notaHTML={8}
        />
      </div>

      <h2 className="titulo-produtos">Produtos Disponíveis</h2>


      <div className="caixa-produto">
        <Produto 
          nome="Teclado Mecânico" 
          descricao="Teclado com iluminação RGB" 
          preco={250}
          disponivel={true}
        />
      </div>


      <div className="caixa-produto">
        <Produto 
          nome="Mouse" 
          descricao="Mouse sem fio" 
          preco={120}
          disponivel={true}
        />
      </div>


      <div className="caixa-produto">
        <Produto 
          nome="Monitor 24 polegadas" 
          descricao="Tela Full HD 144Hz" 
          preco={1200}
          disponivel={false}
        />
      </div>


      <div className="caixa-produto">
        <Produto 
          nome="Notebook" 
          descricao="Core i7, 16GB RAM" 
          preco={4500}
          disponivel={false}
        />
      </div>
    </div>
  );
}

export default App;