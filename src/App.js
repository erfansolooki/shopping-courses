import "./App.css";
import Layout from "./Layout/Layout";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import routes from "./routes";
import CartProvider from "./Context/CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./Context/AuthProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
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
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
