import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Botao = ({ botao, estilo,rota }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (rota) {
      navigate(rota);
    }
  };
  
  return (
    <button style={estilo} onClick={handleClick}> {botao} </button>
  )
}

Botao.propTypes = {
  botao: PropTypes.string.isRequired, // String nome do botao
  estilo: PropTypes.object, // Objeto de estilo
  rota: PropTypes.string,   // Rota para navegação
};

export default Botao;