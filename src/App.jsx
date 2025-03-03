import "./App.css";
import About from "./Components/About";
import Shop from "./Components/Shop";
import Reviews from "./Components/Reviews";
import Contact from "./Components/Contact";
import ShopDetail from "./Components/ShopDetail";
import ShopListing from "./Components/ShopListing";
import Body from "./Components/Body";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Components/AppLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
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
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
