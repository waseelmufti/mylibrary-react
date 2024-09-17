import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../views/pages/ErrorPage";
import Auth from "../views/layouts/Auth";
import Dashboard from "../views/layouts/Dashboard";
import Login, { loginAction } from "../views/pages/auth/Login";
import Home from "../views/pages/Home";

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
                        action: loginAction
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
        ]

    },
    {
        path: "/auth",
    }
]);

export default router;