import "./App.css";
import Layout from "./Layout/Layout";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import routes from "./routes";
import CartProvider from "./Context/CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <ToastContainer />
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
          </Routes>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
