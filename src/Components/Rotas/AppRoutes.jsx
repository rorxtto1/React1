import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../Login/Login';
import LandingPage from '../LandingPage/LandingPage';
import Materias from "../Materias/Materias";
import FlashCards from "../FlashCards/FlashCards";
import Configuracoes from "../Configuracoes/Configuracoes";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login titulo="NOME FLASH CARDS" texto="Desbloqueie o conhecimento com nossos flash cards inteligentes." />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/materias" element={<Materias />} />
        <Route path="/flashcards" element={<FlashCards />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
