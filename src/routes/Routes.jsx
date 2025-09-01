import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ProjectDetails from "../pages/ProjectDetails/ProjectDetails";
import AllProjects from "../pages/AllProjects/AllProjcets";
import BlogDetails from "../pages/BlogDetails/BlogDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        // errorElement:
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "projects/:id",
                loader: async ({ params }) => {
                    return fetch(`https://sharif-shehab-server.vercel.app/projects/${params.id}`);
                },
                element: <ProjectDetails></ProjectDetails>
            },
            {
                path: "all-projects",
                element: <AllProjects/>
            },
            {
                path: "blog/:id",
                loader: async ({ params }) => {
                    return fetch(`https://sharif-shehab-server.vercel.app/posts/${params.id}`);
                },
                element: <BlogDetails/>
            },
        ]
    }
])