import { Link } from "react-router-dom";
import css from "./Addons.module.css";

export const Addons = () => {
  return (
    <>
      <h1 className={css.header}>Additional Information</h1>
      <nav className={css.navigation}>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </nav>
    </>
  );
};
