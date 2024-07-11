

import "./Login.css";
import Botao from "../Botao/Botao";
import FormLogin from "../FormLogin/FormLogin";

const Login = () => {


  {/* estilo do botao passado por props */ }
  const estiloBotao = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8px 30px',
    gap: '10px',
    width: '140px',
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
    <div className="fundo">

      {/* estilo de fundo */}
  
        {/* div que engloba as tags para centralizar */}
        <div className="principal">
          {/* tags de titulo, subtitulo e botao */}
          <h1 className="Titulo">NOME FLASH CARDS</h1>
          <p className="Texto"> Desbloqueie o conhecimento com nossos flash cards inteligentes.</p>
          <Botao botao="Assine Já" estilo={estiloBotao} rota="/landing-page" />
        </div>

        <FormLogin/>

 

    </div>


  );
};


export default Login;
