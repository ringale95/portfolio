import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/HomePage.tsx";
import Dsa from "./pages/DSAPage.tsx";
import ProjectPage from "./pages/ProjectPage.tsx";
import NEUConnect from "./pages/NEUConnect.tsx";

const router = createBrowserRouter([
  {
    path: "/portfolio/",
    element: <App />,
    children: [
      {
        path: "/portfolio/",
        element: <Home />,
      },
      {
        path: "/portfolio/dsa",
        element: <Dsa />,
      },
      {
        path: "/portfolio/projects",
        element: <ProjectPage />,
      },
      {
        path: "/portfolio/neuconnect",
        element: <NEUConnect />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
