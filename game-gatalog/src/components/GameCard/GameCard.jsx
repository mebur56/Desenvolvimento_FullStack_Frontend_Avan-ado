import "./GameCard.css";
import { useNavigate } from "react-router-dom";
import Tooltip from "../ToolTip/ToolTip";

function GameCard({ game }) {
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="card-image">
        {game.imgUrl ? (
          <img src={game.imgUrl} alt={game.name} />
        ) : (
          <div className="placeholder">🎮</div>
        )}
      </div>

      <div className="card-content">
        <h3>{game.name}</h3>

        <p className="genre">{game.genre}</p>

        <p className="description">
          {game.description.length > 80
            ? game.description.substring(0, 80) + "..."
            : game.description}
        </p>

        <Tooltip text="Ver detalhes do jogo">
          <button
            className="btn"
            onClick={() => navigate(`/games/${game.id}`)}
          >
            Ver detalhes
          </button>
        </Tooltip>
      </div>
    </div>
  );
}

export default GameCard;