import "./App.css";
import Layout from "./Layout/Layout";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import routes from "./routes";
import CartProvider from "./Context/CartProvider";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <CartProvider>
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
          </Routes>
        </CartProvider>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
