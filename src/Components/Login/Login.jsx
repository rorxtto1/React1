
import PropTypes from "prop-types";
import "./Login.css";
import Botao from "../Botao/Botao";
import FormLogin from "../FormLogin/FormLogin";

const Login = (props) => {


  {/* estilo do botao passado por props */ }
  const estiloBotao = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8px 30px',
    gap: '10px',
    width: '122px',
    height: '37px',
    background: '#C7F2ED',
    borderRadius: '30px',
    border: "none",
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '21px',
    color: '#03451E',
    flex: 'none',
    order: 0,
    flexGrow: 0,
    marginTop: "30px"

  };

  return (
    /* div pai */
    <div>

      {/* estilo de fundo */}
      <article className="fundo">
        {/* div que engloba as tags para centralizar */}
        <div className="principal">
          {/* tags de titulo, subtitulo e botao */}
          <h1 className="Titulo"> {props.titulo} </h1>
          <p className="Texto"> {props.texto}</p>
          <Botao botao="Acessar" estilo={estiloBotao} rota="/landing-page" />
          {/* tags de titulo, subtitulo e botao */}
        </div>
      </article>
      {/* Componente de Formulario de Login */}
      <FormLogin />

    </div>


  );
};

Login.propTypes = {
  titulo: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
};

export default Login;
