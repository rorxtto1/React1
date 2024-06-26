import "./Materias.css";
import NavBar from "../NavBar/NavBar";
import CardsMaterias from "../CardsMaterias/CardsMaterias";
import anatomia from "../../img/anatomia.svg";
import bioquimica from "../../img/bioquimica.svg";
import cirurgia from "../../img/cirurgia.svg";
import epidemiologia from "../../img/epidemiologia.svg";
import farmacologia from "../../img/farmacologia.svg";
import microbiologia from "../../img/microbiologia.svg";
import patologia from "../../img/patologia.svg";
import psiquiatria from "../../img/psiquiatria.svg";
import { Modal, Button, Typography, Box } from "@mui/material";
import { useRef, useEffect, useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import ResizeObserver from 'resize-observer-polyfill';

const Materias = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const containerRef = useRef(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            if (entries[0].contentRect) {
                setWidth(entries[0].contentRect.width);
            }
        });

        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                resizeObserver.unobserve(containerRef.current);
            }
        };
    }, []);

  return (
    <div>
    <div className="materias">
      <NavBar />

      <div className="container-materias">
        <h2
          style={{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "2rem",
            lineHeight: "54px",
            color: "#252641",
            marginLeft: "3rem",
            marginBottom: "2rem",
          }}
        >
          Escolha a materia desejada{" "}
        </h2>
        <div className="cards-group">
          <Button style={{ all: "unset" }} onClick={handleOpen}>
            {" "}
            <CardsMaterias
              imagem={anatomia}
              titulo="Anatomia"
              descricao="Exploração dos sistemas do corpo humano, incluindo órgãos, tecidos, e como funcionam em conjunto para manter a homeostase."
            />{" "}
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              style={{
                position: "relative",
                width: 475,
                height: 400,
                bgcolor: "background.paper",
                border: "none",
                borderRadius: "10px",
                boxShadow: 24,
                padding: 2,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "#fff",
                textAlign: "center",
              }}
            >
              <Typography
                style={{ fontWeight: "bold", fontSize: "2.5rem" }}
                id="modal-modal-title"
                variant="h6"
                component="h2"
              >
                Anatomia
              </Typography>
              <Typography
                style={{ fontSize: "1.3rem" }}
                id="modal-modal-description"
                sx={{ mt: 2 }}
              >
                Escolha seu tema
              </Typography>
                <ul style={{ listStyleType: "none", marginTop: "20px", padding: 0, maxHeight: "260px", overflowY: "auto" }}>
                  <a style={{textDecoration: "none", color: "black"}} href="/flashcards"><li style={{ borderBottom: "1px solid #ccc", paddingBottom: "5px", marginBottom: "5px" }}>Ossos</li> </a> 
                  <a style={{textDecoration: "none", color: "black"}} href="#"><li style={{ borderBottom: "1px solid #ccc", paddingBottom: "5px", marginBottom: "5px" }}>Músculos</li>  </a>  
                  <a style={{textDecoration: "none", color: "black"}} href="#"><li style={{ borderBottom: "1px solid #ccc", paddingBottom: "5px", marginBottom: "5px" }}>Sistema Nervoso</li> </a> 
                  <a style={{textDecoration: "none", color: "black"}} href="#"><li style={{ borderBottom: "1px solid #ccc", paddingBottom: "5px", marginBottom: "5px" }}>Sistema Circulatório</li>  </a> 
                  <a style={{textDecoration: "none", color: "black"}} href="#"><li style={{ borderBottom: "1px solid #ccc", paddingBottom: "5px", marginBottom: "5px" }}>Sistema Respiratório</li> </a> 
                  <a style={{textDecoration: "none", color: "black"}} href="#"><li style={{ borderBottom: "1px solid #ccc", paddingBottom: "5px", marginBottom: "5px" }}>Sistema Digestório</li> </a> 
                  <a style={{textDecoration: "none", color: "black"}} href="#"><li style={{ borderBottom: "1px solid #ccc", paddingBottom: "5px", marginBottom: "5px" }}>Sistema Endócrino</li> </a> 
                  <a style={{textDecoration: "none", color: "black"}} href="#"><li style={{ borderBottom: "1px solid #ccc", paddingBottom: "5px", marginBottom: "5px" }}>Sistema Urinário</li> </a> 
                  <a style={{textDecoration: "none", color: "black"}} href="#"><li style={{ borderBottom: "1px solid #ccc", paddingBottom: "5px", marginBottom: "5px" }}>Sistema Reprodutor</li> </a> 
              </ul>
            </Box>
          </Modal>

          <CardsMaterias
            imagem={bioquimica}
            titulo="Bioquímica"
            descricao="Exploração dos processos químicos e reações que ocorrem nos organismos vivos, incluindo metabolismo, síntese de proteínas e regulação hormonal."
          />
          <CardsMaterias
            imagem={cirurgia}
            titulo="Cirurgia"
            descricao="Abordagem dos princípios e técnicas cirúrgicas, incluindo procedimentos comuns, precauções de segurança e cuidados pós-operatórios."
          />
          <CardsMaterias
            imagem={epidemiologia}
            titulo="Epidemiologia"
            descricao="Investigação dos padrões e determinantes da saúde e da doença em populações humanas, incluindo métodos de pesquisa e prevenção de doenças."
          />
        </div>
        <div className="cards-group">
          <CardsMaterias
            imagem={farmacologia}
            titulo="Farmacologia"
            descricao="Estudo dos efeitos dos medicamentos no corpo humano, incluindo sua absorção, metabolismo e excreção, bem como suas interações."
          />
          <CardsMaterias
            imagem={microbiologia}
            titulo="Microbiologia"
            descricao="Estudo dos microrganismos, incluindo bactérias, vírus, fungos e protozoários, e seu papel na saúde e na doença."
          />
          <CardsMaterias
            imagem={patologia}
            titulo="Patologia"
            descricao="Estudo das causas e mecanismos das doenças, bem como suas manifestações clínicas, diagnóstico e tratamento."
          />
          <CardsMaterias
            imagem={psiquiatria}
            titulo="Psiquiatria"
            descricao="Estudo dos transtornos mentais, incluindo sua etiologia, diagnóstico, tratamento e manejo clínico."
          />
        </div>

        <div ref={containerRef} style={{ width: '75%', height: '500px', paddingTop:""}}>
                    <BarChart
                        xAxis={[
                            {
                                id: "barCategories",
                                data: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado", "Domingo"],
                                scaleType: "band",
                            },
                        ]}
                        series={[
                            {
                                data: [21, 50, 13, 34, 45, 5, 10],
                            },
                        ]}
                        width={width}
                        height={500}
                    />
                </div>
      </div>

   
     
    </div>

    <footer className="footer-materias">

</footer>

    </div>





    
  );
};

export default Materias;