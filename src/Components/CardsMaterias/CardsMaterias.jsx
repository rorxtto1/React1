import PropTypes from "prop-types";


const CardsMaterias = ({ imagem, titulo, descricao }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div
          style={{ width: "19rem", height: "20rem", margin:"1rem" }}
          className="card d-flex align-items-center justify-content-center text-center"
        >
          <img
            style={{ width: "5rem", height: "5rem" }}
            src={imagem}
            className="card-img-top"
            alt={titulo}
          />
          <div className="card-body">
            <h5
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "1.9rem",
                lineHeight: "45px",
                textAlign: "center",
                letterSpacing: "0.02em",
                color: "#00958C",
              }}
              className="card-title"
            >
              {titulo}
            </h5>
            <p
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: "1rem",
                textAlign: "center",
                color: "#696984",
              }}
              className="card-text"
            >
              {descricao}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

CardsMaterias.propTypes = {
    imagem: PropTypes.string.isRequired, // Validação para imagem como uma string
    titulo: PropTypes.string.isRequired, // Validação para titulo como uma string
    descricao: PropTypes.string.isRequired, // Validação para descricao como uma string
  };

export default CardsMaterias;

