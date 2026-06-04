import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="logo">
        🎮 Cátalogo de jogos
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