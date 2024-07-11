
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Login from './Components/Login/Login';
import LandingPage from './Components/LandingPage/LandingPage';
import Materias from "./Components/Materias/Materias";
import FlashCards from "./Components/FlashCards/FlashCards";
import Configuracoes from "./Components/Configuracoes/Configuracoes";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/materias" element={<Materias />} />
          <Route path="/flashcards" element={<FlashCards />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
