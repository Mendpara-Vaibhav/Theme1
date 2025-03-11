import "./App.css";
import About from "./Components/About";
import Shop from "./Components/Shop";
import Reviews from "./Components/Reviews";
import Contact from "./Components/Contact";
import ShopDetail from "./Components/ShopDetail";
import ShopListing from "./Components/ShopListing";
import Body from "./Components/Body";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./Components/AppLayout";
import ErrorPage from "./Components/ErrorPage";
import Details from "./Components/Details";
import Login from "./Components/Login";
import { useEffect, useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
    console.log("Login status:", loggedInStatus);
    setIsLoggedIn(loggedInStatus);
    setLoading(false);
  }, []);

  const handleLogin = (status) => {
    setIsLoggedIn(status);
    localStorage.setItem("isLoggedIn", status);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  if (loading) return <h1>Loading...</h1>;

  const router = createBrowserRouter([
    {
      path: "/",
      element: isLoggedIn ? (
        <AppLayout onLogout={handleLogout} />
      ) : (
        <Navigate to="/login" />
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "shop",
          element: <Shop />,
        },
        {
          path: "shop/shoplisting",
          element: <ShopListing />,
        },
        {
          path: "shop/shopdetail",
          element: <ShopDetail />,
        },
        {
          path: "reviews",
          element: <Reviews />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "contact/details/:id",
          element: <Details />,
        },
      ],
    },
    {
      path: "/login",
      element: isLoggedIn ? (
        <Navigate to="/" />
      ) : (
        <Login onLogin={handleLogin} />
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
