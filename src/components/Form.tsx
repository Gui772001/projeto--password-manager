import { useState } from 'react';

type FormProps = {
  SetCadastrar: (show: boolean) => void
  addForm : any
};

function Form({ SetCadastrar, addForm } :FormProps) {
  const [formData, setForm] = useState({
    nome: '',
    login: '',
    senha: '',
    url: '',

  });
  const handleChange = (event :React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({
      ...formData,
      [name]: value,
    });
  };
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const handleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const handleSubmit = (e :React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addForm(formData);
    SetCadastrar(false)
  };
  const nameTamanho = formData.nome.length > 0;
  const namelogin = formData.login.length > 0;
  const letra = (/[a-zA-Z]/).test(formData.senha);
  const verifica = (/^(?=.*[!@#$%&*]).+$/).test(formData.senha);
  const numero1 = (/^(?=.*[1-9]).+$/).test(formData.senha);
  const length1 = formData.senha.length > 8 && formData.senha.length < 16;
  const senhaok = (letra && numero1 && length1 && verifica);
  const disable = !(nameTamanho && namelogin && senhaok);
  const ACERTO = 'valid-password-check';
  const ERRO = 'invalid-password-check';
  return (
    <div>
      <label>
        Nome do serviço:
        <input
          type="text"
          name="nome"
          value={ formData.nome }
          onChange={ handleChange }
        />
      </label>
      <label>
        Login :
        <input
          type="text"
          name="login"
          value={ formData.login }
          onChange={ handleChange }
        />
      </label>
      <label>
        {' '}
        Senha :
        <input
          type={ mostrarSenha ? 'text' : 'password' }
          name="senha"
          value={ formData.senha }
          onChange={ handleChange }
        />
        <label>
          Esconder senhas
          <input
            type="checkbox"
            checked={ mostrarSenha }
            onChange={ handleMostrarSenha }
          />
        </label>
        <div
          className={ length1
            ? ACERTO
            : ERRO }
        >
          Possuir 8 ou mais caracteres

          Possuir até 16 caracteres.
        </div>
        <div
          className={ numero1 && letra
            ? ACERTO
            : ERRO }
        >
          Possuir letras e números
        </div>
        <div
          className={ verifica
            ? ACERTO
            : ERRO }
        >
          Possuir algum caractere especial

        </div>
      </label>
      <label>
        URL :
        <input
          type="text"
          name="url"
          value={ formData.url }
          onChange={ handleChange }
        />

      </label>
      <button
        onClick={ handleSubmit }
        disabled={ disable }
      >
        {' '}
        Cadastrar
        {' '}

      </button>
      <button
        type="button"
        onClick={ () => SetCadastrar(false) }
      >
        {' '}
        Cancelar
        {' '}
      </button>
    </div>
  );
}
export default Form;
