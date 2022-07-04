import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const items = [
  { to: "/", name: "Home" },
  { to: "/Cart", name: "Cart" },
];

const Navigation = () => {
  return (
    <header>
      <nav className={styles.navigation}>
        <ul>
          {items.map((item) => {
            return (
              <li key={item.name}>
                <NavLink
                  to={item.to}
                  style={({ isActive }) => ({
                    color: isActive ? "#fff" : null,
                    background: isActive ? "#7600dc" : null,
                  })}
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
