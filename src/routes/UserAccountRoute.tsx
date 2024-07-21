import { RouteObject } from "react-router-dom"
import LoginView from "../pages/Login"

const UserAccountRoute: RouteObject[] = [
    {
        path: "/login",
        element: <LoginView />,
    },
]

export default UserAccountRoute
