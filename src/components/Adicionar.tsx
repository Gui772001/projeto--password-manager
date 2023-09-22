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
  const { adicionando } = props;
  const add = adicionando.length === 0;
  const erro = 'Nenhuma senha cadastrada';

  return (add ? erro
    : adicionando.map((adicionar, index) => (
      <>
        <span key={ index }>
          {' '}

          {adicionar.nome}
        </span>
        <span key={ index }>
          {' '}
          {adicionar.login}

        </span>
        {' '}
        <span key={ index }>{adicionar.senha}</span>
        {' '}
        <span>{adicionar.url}</span>
        <button>
          Cadastrar nova senha

        </button>
      </>
    ))

  );
}

export default Adicionar;
