import "./NavBar.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/configuracoes");
  };

  const navigate1 = useNavigate();

  const handleNavigation1 = () => {
    navigate("/materias");
  };
  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{}}>
      <div className="container-fluid">
        <a className="navbar-brand" style={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '2rem',
            lineHeight: '48px',
            letterSpacing: '0.04em',
            color: '#00958C',
            marginTop: "0.5rem",
            marginLeft: "3rem"
        }}>Logo FlashCards</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto" style={{marginRight: "3rem"}}>
            <li className="nav-item">
            <a className="nav-link"  onClick={handleNavigation1} >Matérias</a>
              
            </li>
            <li className="nav-item">
            <a className="nav-link"  onClick={handleNavigation} >Configurações</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
