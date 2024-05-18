import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import css from "./SharedLayout.module.css";

export const SharedLayout = () => {
  return (
    <>
      <nav className={css.navigation}>
        <Link className={css.link} to="/">
          Home
        </Link>
        <Link className={css.link} to="/movies">
          Movies
        </Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
