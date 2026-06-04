import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import request from "../../services/mockRequests";
import "./GameDetails.css";
import Tooltip from "../../components/ToolTip/ToolTip";
import Header from "../../components/Header/Header";

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


  if (!game && !loading) {
    return (
      <div>
        <Header />
        <div className="not-found">
          <h2>Jogo não encontrado</h2>
          <Tooltip text="Lista de jogos">
            <button onClick={() => navigate("/games")}>
              Voltar
            </button>
          </Tooltip>
        </div>

      </div>
    );
  }

  return (
    <div>
      <Header />
      {loading ? (<Loading />) : (
        <div className="details-container">
          <Tooltip text="Lista de jogos">
            <button className="back-btn" onClick={() => navigate(-1)}>
              ← Voltar
            </button>
          </Tooltip>

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
        </div>)}
    </div>
  );
}

export default GameDetails;