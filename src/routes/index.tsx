import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../views/pages/ErrorPage";
import Auth from "../views/layouts/Auth";
import Dashboard from "../views/layouts/Dashboard";
import Login from "../views/pages/auth/Login";
import Home from "../views/pages/Home";
import AuthorsList, { authorsLoader } from "../views/pages/authors/AuthorsList";
import AuthorsForm from "../views/pages/authors/AuthorsForm";
import AuthorService from "../services/AuthorService";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage />,
        children: [
            {
                path: "auth/",
                element: <Auth />,
                children: [
                    {
                        path: "login",
                        element: <Login />,
                        // action: loginAction
                    }
                ]
            },
            {
                path: "dashboard",
                element: <Dashboard />,
                children: [
                    {
                        path: "",
                        element: <Home />
                    }
                ]
            },
            {
                path: "authors",
                element: <Dashboard />,
                children: [
                    {
                        path: "",
                        element: <AuthorsList />,
                        loader: authorsLoader
                    },
                    {
                        path: "create",
                        element: <AuthorsForm />
                    },
                    {
                        path: ":id",
                        element: <AuthorsForm />
                    }
                ]
            }
        ]

    },
    {
        path: "/auth",
    }
]);

export default router;