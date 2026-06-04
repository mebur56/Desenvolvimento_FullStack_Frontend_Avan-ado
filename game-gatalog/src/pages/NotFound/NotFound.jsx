import { useNavigate } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <h1>404</h1>
      <h2>Página não encontrada</h2>

      <p>
        A página que você está tentando acessar não existe ou foi removida.
      </p>

      <button onClick={() => navigate("/")}>
        Voltar para Home
      </button>
    </div>
  );
}

export default NotFound;