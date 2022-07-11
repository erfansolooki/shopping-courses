import { NavLink } from "react-router-dom";
import { useProducts } from "../../Context/CartProvider";
import styles from "./Navigation.module.css";

// const items = [
//   { to: "/", name: "Home" },
//   { to: "/Cart", name: "Cart" },
// ];

const Navigation = () => {
  const { cart } = useProducts();
  return (
    <header>
      <nav className={styles.navigation}>
        Logo
        <ul>
          {/* {items.map((item) => {
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
          })} */}
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#fff" : null,
                background: isActive ? "#7600dc" : null,
              })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Cart"
              style={({ isActive }) => ({
                color: isActive ? "#fff" : null,
                background: isActive ? "#7600dc" : null,
              })}
            >
              Cart
              <span>{cart.length}</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Login"
              style={({ isActive }) => ({
                color: isActive ? "#fff" : null,
                background: isActive ? "#7600dc" : null,
              })}
            >
              Login/SignUp
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
