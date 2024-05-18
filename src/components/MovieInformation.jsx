import PropTypes from "prop-types";
import css from "./MovieInformation.module.css";

export const MovieInformation = ({ movieDetails }) => {
  return (
    <div className={css.container} key={movieDetails.imdb_id}>
      <img
        className={css.image}
        src={`https://image.tmdb.org/t/p/w1280/${movieDetails.backdrop_path}`}
      />
      <div className={css.description}>
        <h1 className={css.title}>{movieDetails.title}</h1>
        <p className={css.title}>User score: {movieDetails.vote_average}</p>
        <h2 className={css.overview}>Overview</h2>
        <article className={css.article}>{movieDetails.overview}</article>
        <h3 className={css.genresHeader}>Genres</h3>
        {movieDetails.genres.map((genre) => (
          <p key={genre.id} className={css.genre}>
            {genre.name}
          </p>
        ))}
      </div>
    </div>
  );
};

MovieInformation.propTypes = {
  movieDetails: PropTypes.object,
};
