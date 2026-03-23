import React from "react";
import { Navigate } from "react-router-dom";

// import About from "@/views/about";
// import Home from "@/views/home";
const Home = React.lazy(() => import("@/views/home/index.jsx"));
const About = React.lazy(() => import("@/views/about/index.jsx"));

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
];

export default routes;
