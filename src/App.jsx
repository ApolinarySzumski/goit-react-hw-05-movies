import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Cast } from "./components/Cast";
import { Home } from "./components/Home";
import { MovieDetails } from "./components/MovieDetails";
import { Movies } from "./components/Movies";
import { Reviews } from "./components/Reviews";
import { SharedLayout } from "./components/SharedLayout";

// const API_KEY = "ff79bce2eaad959f396e248b18b9b9cc";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
