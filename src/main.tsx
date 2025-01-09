import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Home from "./routes/home";
import Blog from "./routes/blog";
import Reader from "./routes/components/reader";

import "./routes/components/css/tableofcontent.css";
import "./routes/components/css/background.css";
import "./routes/components/css/index.css";
import "./routes/components/css/about.css";
import "./routes/components/css/root.css";
import "./routes/components/css/works.css";
import "./routes/components/css/blogcomp.css";
import "./routes/components/css/contact.css";
import "./routes/components/css/footer.css";
import "./routes/components/css/profilepicture.css";
import "./routes/components/css/articles.css";

import "./routes/components/css/blog.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "blog",
        element: <Blog />,
    },
    {
        path: "/articles/:filename",
        element: <Reader />,
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
