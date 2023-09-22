import './App.css';
import { useState } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Adicionar from './components/Adicionar';

type Formseila = {
  nome: string,
  login: string,
  senha: string,
  url: string,
};

function App() {
  const [ShowCasdratar, SetCadastrar] = useState(false);
  const [adicionando, Setadicionar] = useState<Formseila[]>([]);
  const addForm = (e: Formseila) => {
    Setadicionar([
      ...adicionando, e,
    ]);
  };
  console.log(adicionando);
  return (
    <>
      <Title />
      {ShowCasdratar ? (
        <Form
          SetCadastrar={ SetCadastrar }
          addForm={ addForm }
        />
      ) : (
        <button onClick={ () => SetCadastrar(true) }> Cadastrar nova senha </button>
      )}
      <Adicionar adicionando={ adicionando } />
    </>
  );
}

export default App;
