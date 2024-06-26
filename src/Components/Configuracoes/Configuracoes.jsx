import "./Configuracoes.css";
import { BarChart } from "@mui/x-charts/BarChart";
import { useRef, useEffect, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import NavBar from "../NavBar/NavBar";


const Configuracoes = () => {

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
        <div className="configuracoes">

            <NavBar/>

            



            <div className="wrap-config">

                <div ref={containerRef} style={{ width: '75%', height: '500px' }}>
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

                <div className="change-password">
                    <h2 className="title-config">Deseja trocar de Senha?</h2>
                    <p className="text-config">Ao clicar no botão abaixo, enviaremos um link com a redefinição de senha para seu e-mail. Pode acompanhar por la.</p>
                    <a href="https://hotmart.com/pt-br"><button className="button-config"> Redefinir senha </button></a>
                </div>

                <div className="suporte-config">

                    <h2 className="title-suporte">Precisa de ajuda? Contate nosso suporte</h2>
                    <ul className="lista-suporte">
                        <li className="text-suporte">suporteflashcards@gmail.com</li>
                        <li className="text-suporte">45 99999-9999</li>
                        <li className="text-suporte">@flashcards</li>
                    </ul>

                </div>

                <div className="change-password">
                    <h2 className="title-config">Deseja sair?</h2>
                    <p className="text-config">Para trocar de conta clique aqui</p>
                    <a href="/"><button className="button-config"> Sair </button></a>
                </div>






            </div>



            <footer className="footer-config">

            </footer>
        </div>
    )
}

export default Configuracoes
