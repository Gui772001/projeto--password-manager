import { nanoid } from 'nanoid';

 type Propsform =
 {
   adicionando : {
     nome: string,
     login: string,
     senha: string,
     url: string,

   }[]

 };
function Adicionar(props :Propsform) {
  const { adicionando, Setadicionar } = props;
  const add = adicionando.length === 0;
  const removerItem = (teste: number) => {
    const novaLista = [...adicionando];
    novaLista.splice(teste, 1);
    Setadicionar(novaLista);
  };
  const erro = 'Nenhuma senha cadastrada';
  return (add ? erro
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
          onClick={ removerItem }
        >
          Remover
        </button>
        <button>
          Cadastrar nova senha

        </button>
      </>
    ))

  );
}

export default Adicionar;
