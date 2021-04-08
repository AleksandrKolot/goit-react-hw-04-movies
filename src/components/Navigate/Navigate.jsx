import { NavLink } from 'react-router-dom';
import s from './Navigate.module.css';
export default function Navigate() {
  return (
    <nav className={s.Nav}>
      <ul>
        <li>
          <NavLink
            exact
            className={s.NavItem}
            activeClassName={s.NavItemActive}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={s.NavItem}
            activeClassName={s.NavItemActive}
            to="/movies"
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
