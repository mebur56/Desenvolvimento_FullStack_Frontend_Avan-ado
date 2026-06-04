import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import request  from "../../services/mockRequests";
import GameCard from "../../components/GameCard/GameCard";
import Loading from "../../components/Loading/Loading";
import "./Home.css";

function Home() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const data = request.getGameList();

    setTimeout(() => {
      setGames(data.slice(0, 3)); 
      setLoading(false);
    }, 800);
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="home">
      <section className="title">
        <h1>Catálogo de jogos</h1>
        <p>Explore os melhores jogos da história</p>

        <button onClick={() => navigate("/games")}>
          Ver catálogo completo
        </button>
      </section>
      <section className="featured">
        <h2>🔥 Destaques</h2>

        <div className="grid">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;