
import PropTypes from "prop-types";
import "./Fundo.css";
import Botao from "../Botao/Botao";

const Fundo = (props) => {

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
    marginTop:"30px"

};

  return (
    <article className="fundo">
      <div className="principal">
        <h1 className="Titulo"> {props.titulo} </h1>
        <p className="Texto"> {props.texto}</p>
        <Botao botao="Acessar" estilo={estiloBotao} />
      </div>
    </article>
  );
};

Fundo.propTypes = {
  titulo: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
};

export default Fundo;
