import { nanoid } from 'nanoid';
import { useState } from 'react';
type Formseila = {
  nome: string,
  login: string,
  senha: string,
  url: string,

};

 type Propsform =
 { Setadicionar :React.Dispatch<React.SetStateAction<Formseila[]>>
   adicionando : {
     nome: string,
     login: string,
     senha: string,
     url: string,

   } [] 

 };
function Adicionar(props :Propsform) {
  const { adicionando, Setadicionar } = props;
  const add = adicionando.length === 0;
 const [Esco ,Setescon] = useState(false)
  const removerIte  = (teste: number) => {
    const novaLista = [...adicionando];
    novaLista.splice(teste, 1);
    Setadicionar(novaLista);
  };
  const troca = () => {
    Setescon(!Esco)
  };
  const erro = 'Nenhuma senha cadastrada';
  return (
    <>
    <label>
          Esconder senhas
          <input
            type="checkbox"
            onClick={troca}
          />
      </label>
  { add ? erro
    : adicionando.map((adicionar) => (
      <>
        <span key={ nanoid() }>
          <a href={ adicionar.url }>
            {' '}

            {adicionar.nome}
          </a>
        </span>
        <span key={ nanoid() }>
          {' '}
          {adicionar.login}

        </span>
        {' '}
        {Esco ? (
          <span>
          {'******'}
          </span>
        ) : (
          <span>
          { adicionar.senha}
          </span>
        )}
   
        {' '}
        <span> </span>
        <button
          data-testid="remove-btn"
          onClick={ removerIte}
        >
          Remover
        </button>
      </>
))}
    
 </>
  );
}

export default Adicionar;
