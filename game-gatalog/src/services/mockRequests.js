import gamelist from "../data/GameList.json";

const getGameList = () => {
  return gamelist;
};

const getGameById = (id) => {
  return gamelist.find((x) => x.id === Number(id));
};

const searchGame = (search) => {
  return gamelist.filter((x) =>
    x.name.toLowerCase().includes(search.toLowerCase())
  );
};

export default {
  getGameList,
  getGameById,
  searchGame,
};