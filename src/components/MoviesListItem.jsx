import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import css from "./MoviesListItem.module.css";

export const MoviesListItem = ({ movie }) => {
  return (
    <li className={css.item}>
      <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
    </li>
  );
};

MoviesListItem.propTypes = {
  movie: PropTypes.object,
};
