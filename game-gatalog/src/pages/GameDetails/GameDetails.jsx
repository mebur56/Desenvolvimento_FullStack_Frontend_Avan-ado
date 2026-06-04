import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import request from "../../services/mockRequests";
import "./GameDetails.css";

function GameDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = request.getGameById(id);

    setTimeout(() => {
      setGame(data);
      setLoading(false);
    }, 800);
  }, [id]);

  if (loading) {
    return <Loading/>
  }

  if (!game) {
    return (
      <div className="not-found">
        <h2>Jogo não encontrado</h2>
        <button onClick={() => navigate("/games")}>
          Voltar
        </button>
      </div>
    );
  }

  return (
    <div className="details-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Voltar
      </button>

      <div className="details-card">
        <img src={game.imgUrl} alt={game.name} />

        <div className="info">
          <h1>{game.name}</h1>

          <p><strong>Gênero:</strong> {game.genre}</p>
          <p><strong>Desenvolvedor:</strong> {game.developer}</p>
          <p><strong>Lançamento:</strong> {game.releaseDate}</p>

          <p className="description">{game.description}</p>
        </div>
      </div>
    </div>
  );
}

export default GameDetails;