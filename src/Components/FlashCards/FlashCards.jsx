import NavBar from "../NavBar/NavBar";
import "./FlashCards.css";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";

const FlashCards = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="FlashCards-Principal">

      <NavBar />

      <div style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>

        <div className="wrap-flashcards">
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="card-front">
              <h1 className="card-front-question">
                {" "}
                Qual é o tratamento de escolha para uma criança de 2 anos com
                diagnóstico confirmado de pneumonia adquirida na comunidade, sem
                complicações e sem necessidade de internação hospitalar?
              </h1>

              <p className="card-front-text">
                a) Amoxicilina administrada por via oral durante 5 a 7 dias.{" "}
                <br></br>
                b)Ceftriaxona administrada por via intramuscular durante 3 a 5
                dias.
                <br></br>
                c) Azitromicina administrada por via oral em dose única.{" "}
                <br></br>
                d)Oseltamivir administrado por via oral durante 5 dias.<br></br>
              </p>
            </div>

            <div className="card-front">
              <h1 className="card-front-question">
                {" "}
                Resposta correta: a) Amoxicilina administrada por via oral
                durante 5 a 7 dias.
              </h1>

              <p className="card-front-text">
                Justificativa: A amoxicilina é o tratamento de primeira linha
                recomendado para pneumonia adquirida na comunidade em crianças
                ambulatoriais sem fatores de risco para infecção por bactérias
                atípicas. Geralmente é administrada por via oral durante 5 a 7
                dias. As outras opções de tratamento não são consideradas o
                tratamento de escolha para pneumonia adquirida na comunidade em
                crianças nesse cenário específico.
              </p>
            </div>
          </ReactCardFlip>

          <a className="flip-card-text"
            onClick={handleFlip}>
            {" "}
            Virar cartão
          </a>

        </div>
        <div className="container-buttons">
          <button
            style={{ backgroundColor: "#A0C76E" }}
            className="button-flashcards"
          >
            Muito fácil<br></br> (Reaparece após 1 dia){" "}
          </button>
          <button
            style={{ backgroundColor: "#108A92" }}
            className="button-flashcards"
          >
            Fácil<br></br>(Reaparece após 90 min){" "}
          </button>
          <button
            style={{ backgroundColor: "#E3E651" }}
            className="button-flashcards"
          >
            Médio<br></br>(Reaparece após 60 min){" "}
          </button>
          <button
            style={{ backgroundColor: "#BB936E" }}
            className="button-flashcards"
          >
            Difícil<br></br>(Reaparece após 30 min){" "}
          </button>
          <button
            style={{ backgroundColor: "#F95D5D" }}
            className="button-flashcards"
          >
            Muito difícil<br></br>(Reaparece após 15 min)
          </button>
        </div>
        <div className="next-card">
          <a
            href="#"
            style={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "1.5rem",
              lineHeight: "180%",
              letterSpacing: "0.02em",
              color: "#696984",
              textDecoration: "none",
            }}
          >
              Próximo -&gt;
          </a>
        </div>





      </div>



    </div>
  );
};

export default FlashCards;
