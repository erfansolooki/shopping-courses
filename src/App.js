import "./App.css";
import Layout from "./Layout/Layout";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
