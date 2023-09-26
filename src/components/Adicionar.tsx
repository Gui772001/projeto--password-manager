import { nanoid } from 'nanoid';
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
  const removerIte  = (teste: number) => {
    const novaLista = [...adicionando];
    novaLista.splice(teste, 1);
    Setadicionar(novaLista);
  };
  const erro = 'Nenhuma senha cadastrada';
  return (
    <>
    <label>
          Esconder senhas
          <input
            type="checkbox"
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
        <span key={ nanoid() }>{adicionar.senha}</span>
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
