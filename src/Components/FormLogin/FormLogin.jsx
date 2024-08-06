import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./FormLogin.css";
import Botao from '../Botao/Botao';


const FormLogin = () => {

    {/* criando as variaveis para capturar os valores de email e senha */ }
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    {/* printando no console */ }
    const handleSubmit = (event) => {v
        event.preventDefault();
        console.log(senha);
        console.log(email)
    };

    {/* estilo do botao passado por props */ }
    const estiloBotao = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "8px 30px",
        gap: "10px",
        width: "11rem",
        height: "49px",
        background: "#C7F2ED",
        borderRadius: "30px",
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
    };

    return (

        




        <article className="FormLogin">

            {/* titulo */}
            <header className="container-title">
                <h1 className="title">Bem vindo ao <span className="highlight">Flashcards</span></h1>
            </header>

            <aside>
                {/* formulario */}
                <form className="form" onSubmit={handleSubmit}> {/* passando evento para o formulario */}
                    <div className="mb-3">
                        {/* titulo input email */}
                        <label
                            style={{
                                fontFamily: 'Poppins',
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "16px",
                                lineHeight: "24px",
                                color: "#000000"
                            }}
                            htmlFor="exampleInputEmail1" className="form-label"> Email </label>

                        {/* input email */}
                        <input

                            type="email"
                            placeholder="Insira seu e-mail"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            onChange={(e) => setEmail(e.target.value)} /* capturando valor atraves do evento onChandge */
                        />
                    </div>


                    <div className="mb-3">
                        {/* titulo input senha */}
                        <label
                            style={{
                                fontFamily: 'Poppins',
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "16px",
                                lineHeight: "24px",
                                color: "#000000"
                            }}
                            htmlFor="exampleInputPassword1" className="form-label" >Senha </label>

                        {/* input senha */}
                        <input
                            placeholder="Insira sua senha"
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            onChange={(e) => setSenha(e.target.value)} /* capturando valor atraves do evento onChange */
                        />
                    </div>

                    {/* paragrafo e link para forgot password */}
                    <div style={{ padding: '0' }} className="mb-3 form-check">
                        <p className="question"> Esqueceu sua senha? <a className="link" href="https://hotmart.com/pt-br">Clique aqui</a> </p>
                    </div>

                    {/* botao acessar */}
                    <Botao botao='Acessar' estilo={estiloBotao} rota="/materias" />

                </form>



            </aside>
        </article>
    );
};

export default FormLogin;





