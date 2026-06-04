import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Games from "../pages/Games/Games";
import GameDetails from "../pages/GameDetails/GameDetails";
import NotFound from "../pages/NotFound/NotFound";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/games"
          element={<Games />}
        />

        <Route
          path="/games/:id"
          element={<GameDetails />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;