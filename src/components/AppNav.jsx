import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="a">Menu 1</NavLink>
        </li>
        <li>
          <NavLink to="b">Menu 2</NavLink>
        </li>
        <li>
          <NavLink to="c">Menu 3</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
