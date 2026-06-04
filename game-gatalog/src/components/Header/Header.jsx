import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="logo"  onClick={() => navigate("/")}>
        🎮 Catálogo de jogos
      </div>

      <nav className="nav">
        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
        >
          Home
        </Link>

        <Link
          to="/games"
          className={location.pathname === "/games" ? "active" : ""}
        >
          Jogos
        </Link>
      </nav>
    </header>
  );
}

export default Header;