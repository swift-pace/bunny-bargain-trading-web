import { createBrowserRouter } from "react-router-dom"
import HomeView from "../views/Home"
import UserAccountRoute from "./UserAccountRoute"

const router = createBrowserRouter([
    ...[{ path: "/", element: <HomeView /> }],
    ...UserAccountRoute,
])

export default router
