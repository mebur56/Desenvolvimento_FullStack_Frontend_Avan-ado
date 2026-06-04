import { useEffect, useState } from "react";
import request from "../../services/mockRequests"
import GameCard from "../../components/GameCard/GameCard"
import Loading from "../../components/Loading/Loading";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Games.css"
import Header from "../../components/Header/Header";

function Games() {
  const [gameList, setGameList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const data = request.getGameList();
    setGameList(data);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (searchText) {
      setLoading(true)

      const data = request.searchGame(searchText)
      setGameList(data)
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
    else {
      const data = request.getGameList();
      setGameList(data);

      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [searchText])


  return (
    <div>
      <Header />
      <div className="games-page">
        <div className="games-container">
          <SearchBar onChange={(value) => setSearchText(value)} />
          <h1 className="games-title">Lista de Jogos</h1>
          <div className="games-grid">
            {loading ? (
              <Loading />
            ) : (
              gameList.length > 0 ? gameList.map((game) => (
                <GameCard game={game} />
              )) :
                (
                  <div className="empty-game">
                    <h2>🎮 Nenhum jogo encontrado</h2>
                    <p>Tente buscar por outro nome ou limpar o filtro.</p>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Games;