import { RouteObject } from "react-router-dom";
import Login from "../pages/Login";

const UserAccountRoute: RouteObject[] = [
    {
        path: "/login",
        element: <Login />,
    },
];

export default UserAccountRoute;
