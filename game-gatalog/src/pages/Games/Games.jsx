import { useEffect, useState } from "react";
import request from "../../services/mockRequests"
import GameCard from "../../components/GameCard/GameCard"
import "./Games.css"
function Games() {
  const [gameList, setGameList] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const data = request.getGameList();
    setGameList(data);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="games-page">
      <div className="games-container">
        <h1 className="games-title">Lista de Jogos</h1>

        <div className="games-grid">
          {loading ? (
            <p>Inserir aqui o spinner</p>
          ) : (
            gameList.map((game) => (
              <GameCard game={game} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Games;