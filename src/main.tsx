import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Home from "./routes/home";

import "./routes/css/tableofcontent.css";
import "./routes/css/background.css";
import "./routes/css/index.css";
import "./routes/css/about.css";
import "./routes/css/root.css";
import "./routes/css/works.css";
import "./routes/css/contact.css";
import "./routes/css/footer.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
