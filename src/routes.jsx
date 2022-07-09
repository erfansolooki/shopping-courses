import HomePage from "./Pages/HomePage";
import Cart from "./Pages/Cart/CartPage";
import CheckoutPage from "./Pages/CheckoutPage";
import UserProfile from "./Pages/UserProfile";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/Cart", element: <Cart /> },
  { path: "/checkout", element: <CheckoutPage /> },
  { path: "/UserProfile/*", element: <UserProfile /> },
  { path: "/Login", element: <LoginPage /> },
  { path: "/SignUp", element: <SignUpPage /> },
];

export default routes;
