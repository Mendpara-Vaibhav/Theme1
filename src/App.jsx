import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Shop from "./Components/Shop";
import Reviews from "./Components/Reviews";
import Contact from "./Components/Contact";
import ShopDetail from "./Components/ShopDetail";
import ShopListing from "./Components/ShopListing";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
          <Footer />
        </>
      ),
    },
    {
      path: "/shop",
      element: (
        <>
          <Navbar />
          <Shop />
          <Footer />
        </>
      ),
    },
    {
      path: "/shop/shoplisting",
      element: (
        <>
          <Navbar />
          <ShopListing />
          <Footer />
        </>
      ),
    },
    {
      path: "/shop/shopdetail",
      element: (
        <>
          <Navbar />
          <ShopDetail />
          <Footer />
        </>
      ),
    },
    {
      path: "/reviews",
      element: (
        <>
          <Navbar />
          <Reviews />
          <Footer />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Navbar />
          <Contact />
          <Footer />
        </>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
