import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ProjectDetails from "../pages/ProjectDetails/ProjectDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        // errorElement:
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "project-details",
                element: <ProjectDetails></ProjectDetails>
            }
        ]
    }
])