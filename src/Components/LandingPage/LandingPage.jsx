import "./LandingPage.css";
import Botao from "../Botao/Botao";
import check from "../../img/check.svg";
import checkCinza from "../../img/checkCinza.svg";
import checkAzul from "../../img/checkAzul.svg";

const LandingPage = () => {
  const estiloBotao = {
    width: "6rem",
    height: "2.75rem",
    background:
      "conic-gradient(from 90deg at 50% 100%, #FFFFFF 0deg, #FFFFFF 360deg)",
    boxShadow: "0px 20px 24px rgba(0, 0, 0, 0.03)",
    borderRadius: "80px",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "0.95rem",
    lineHeight: "33px",
    letterSpacing: "0.02em",
    color: "#5B5B5B",
    border: "none",
    margin: "20px",
    marginRight: "0px",
  };

  const estiloBotao2 = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "8px 30px",
    gap: "10px",
    width: "8rem",
    height: "3rem",
    background: "#C7F2ED",
    borderRadius: "30px",
    border: "none",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "21px",
    color: "#03451E",
    flex: "none",
    order: 0,
    flexGrow: 0,
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <section id="topSection" className="topSection">
        <header>
          <nav
            style={{ backgroundColor: "#81DAD0"
            }}
            className="navbar navbar-expand-lg"
          >
            <div className="container-fluid d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <h1
                  style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "1.75rem",
                    lineHeight: "48px",
                    letterSpacing: "0.04em",
                    color: "#FFFFFF",
                    paddingLeft: "3rem",
                    
                  }}
                >
                  Logo FlashCards
                </h1>
              </div>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarNavAltMarkup"
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "baseline",
                    paddingBottom: "2rem",
                  }}
                  className="navbar-nav"
                >
                  <a
                    className="nav-link"
                    aria-current="page"
                    onClick={() => scrollToSection("topSection")}
                  >
                    Home
                  </a>
                  <a
                    className="nav-link"
                    onClick={() => scrollToSection("topSection1")}
                  >
                    Sobre
                  </a>
                  <a
                    className="nav-link"
                    onClick={() => scrollToSection("topSection2")}
                  >
                    Planos
                  </a>
                  {/* Passando o estiloBotao como prop para ambos os botões */}
                  <Botao
                    className="button-Page"
                    botao="Login"
                    estilo={estiloBotao}
                    rota="/"
                  />
                  <a
                    style={{
                      width: "6rem",
                      height: "2.75rem",
                      background: "rgba(255, 255, 255, 0.3)",
                      boxShadow: "0px 20px 24px rgba(0, 0, 0, 0.03)",
                      borderRadius: "80px",
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: 500,
                      fontSize: "0.90rem",
                      lineHeight: "33px",
                      textAlign: "center",
                      letterSpacing: "0.02em",
                      color: "#FFFFFF",
                      border: "none",
                      margin: "20px",
                      textDecoration: "none",
                      marginBottom: "0px",
                      display: "flex",
                      alignItems:"center",
                      justifyContent:"center"
                    }}
                    href="https://hotmart.com/pt-br"
                  >
                    Cadastrar
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <div className="container-top">
          <div className="wrap-container-top">
            <h1 className="title-container-top">
              <span className="highlight-container-top">Sua aprovação</span>{" "}
              agora é muito mais fácil
            </h1>
            <p className="text-container-top">
              Preparação Dinâmica, Avaliação Interativa: Sua Jornada para o
              Revalida!
            </p>
            <Botao botao="Acessar" estilo={estiloBotao2} rota="/" />
          </div>

        </div>
      </section>

      <section id="topSection1" className="topSection1">
        <header >
          <h1
            style={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 900,
              fontSize: "2.75rem",
              lineHeight: "130%",
              textAlign: "center",
            }}
          >
            Sobre Nós
          </h1>
          <p
            style={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 275,
              fontSize: "1.1rem",
              lineHeight: "160%",
              textAlign: "center",
              color: "rgba(1, 5, 20, 0.8)",
              margin: "0px",
            }}
          >
            Somos uma plataforma dedicada ao sucesso dos estudantes no Revalida,
            o exame necessário para validar diplomas de medicina no Brasil.
            Nosso foco está em fornecer uma abordagem eficaz de estudo através
            de flashcards cuidadosamente elaborados. Acreditamos que a prática
            regular com perguntas e respostas concisas é fundamental para a
            preparação dos candidatos, permitindo uma revisão eficiente e
            aprofundada dos conceitos essenciais. Nosso compromisso é oferecer
            uma ferramenta robusta e intuitiva que ajude os estudantes a
            alcançarem seus objetivos de aprovação no Revalida.
          </p>
        </header>

        <div className="container-top1">
          <p className="text-container-top1">
            <span className="highlight-container-top1">25K+</span>
            <br></br>Estudantes
          </p>

          <p className="text-container-top1">
            <span className="highlight-container-top1">10K+</span>
            <br></br>Questões
          </p>

          <p className="text-container-top1">
            <span className="highlight-container-top1">95%</span>
            <br></br>Redução no tempo<br></br> de estudo
          </p>

          <p className="text-container-top1">
            <span className="highlight-container-top1">75</span>
            <br></br>Matérias<br></br> Disponiveis
          </p>
          <p className="text-container-top1">
            <span className="highlight-container-top1">99%</span>
            <br></br>Taxa de recomendação<br></br> dos usuários
          </p>
        </div>

        <footer className="footer-container-top1">
          <h2
            style={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "1.7rem",
              lineHeight: "180%",
              color: "#2F327D",
            }}
          >
            Tudo em um <span style={{ color: "#00CBB8" }}>unico lugar</span>
          </h2>
          <p
            style={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "1.3rem",
              lineHeight: "180%",
              textAlign: "center",
              color: "#696984",
            }}
          >
            Centralize sua preparação e otimize seu tempo com nossa <br></br>{" "}
            plataforma integrada para o Revalida.
          </p>
        </footer>
      </section>

      <section id="topSection2" className="topSection2">
        <h1
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontStyle: "normal",
            fontWeight: 800,
            fontSize: "2.75rem",
            lineHeight: "96px",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            letterSpacing: "-1px",
            color: "#49BBBD",
            margin: "5rem",
          }}
        >
          {" "}
          Nossos Planos
        </h1>

        <div style={{ display: "flex" }}>
          <div className="card">
            <div style={{ paddingTop: "20px" }}>
              <div className="plans-title">
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "18px",
                    lineHeight: "32px",
                    display: "flex",
                    alignItems: "center",
                    letterSpacing: "0.2px",
                    color: "#49BBBD",
                  }}
                >
                  Plano Mensal
                </p>
              </div>

              <div className="price">
                R$ 100,00
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontStyle: "normal",
                    fontWeight: 800,
                    fontSize: "12px",
                    lineHeight: "15px",
                    display: "flex",
                    alignItems: "center",
                    letterSpacing: "2.5px",
                    textTransform: "uppercase",
                    color: "#2D3436",
                  }}
                >
                  / mês
                </span>
              </div>
            </div>

            <div className="description">
              <div className="icon">
                <img src={checkCinza} alt="Check Icon" /> Acesso flexível
              </div>
              <div className="icon">
                <img src={checkCinza} alt="Check Icon" /> Pagamento mensal
              </div>
              <div className="icon">
                <img src={checkCinza} alt="Check Icon" /> Atualizações regulares
              </div>
            </div>
            <a className="btn" href="https://hotmart.com/pt-br">
              Assinar
            </a>
          </div>
          <div className="card">
            <div style={{ paddingTop: "20px" }}>
              <div className="plans-title">
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "18px",
                    lineHeight: "32px",
                    display: "flex",
                    alignItems: "center",
                    letterSpacing: "0.2px",
                    color: "#49BBBD",
                  }}
                >
                  Plano anual
                </p>
                <button className="button-best">Best!</button>
              </div>

              <div className="price">
                R$ 100,00
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontStyle: "normal",
                    fontWeight: 800,
                    fontSize: "12px",
                    lineHeight: "15px",
                    display: "flex",
                    alignItems: "center",
                    letterSpacing: "2.5px",
                    textTransform: "uppercase",
                    color: "#2D3436",
                  }}
                >
                  / mês
                </span>
              </div>
            </div>

            <div className="description">
              <div className="icon">
                <img src={check} alt="Check Icon" /> Melhor custo benefício
              </div>
              <div className="icon">
                <img src={check} alt="Check Icon" /> Renovação anual
              </div>
              <div className="icon">
                <img src={check} alt="Check Icon" /> Acesso ilimitado
              </div>
              <div className="icon">
                <img src={check} alt="Check Icon" /> Prioridade no suporte
              </div>
            </div>
            <a className="btn" href="https://hotmart.com/pt-br">
              Assinar
            </a>
          </div>
          <div className="card">
            <div style={{ paddingTop: "20px" }}>
              <div className="plans-title">
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "18px",
                    lineHeight: "32px",
                    display: "flex",
                    alignItems: "center",
                    letterSpacing: "0.2px",
                    color: "#49BBBD",
                  }}
                >
                  Plano trimestral
                </p>
              </div>

              <div className="price">
                R$ 100,00
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontStyle: "normal",
                    fontWeight: 800,
                    fontSize: "12px",
                    lineHeight: "15px",
                    display: "flex",
                    alignItems: "center",
                    letterSpacing: "2.5px",
                    textTransform: "uppercase",
                    color: "#2D3436",
                  }}
                >
                  / mês
                </span>
              </div>
            </div>

            <div className="description">
              <div className="icon">
                <img src={checkAzul} alt="Check Icon" /> Renovação trimestral
              </div>
              <div className="icon">
                <img src={checkAzul} alt="Check Icon" /> Acesso completo
              </div>
              <div className="icon">
                <img src={checkAzul} alt="Check Icon" /> Desconto por volume
              </div>
            </div>
            <a className="btn" href="https://hotmart.com/pt-br">
              Assinar
            </a>
          </div>
        </div>
      </section>

      <section className="footer-LandingPage"></section>
    </div>
  );
};

export default LandingPage;
