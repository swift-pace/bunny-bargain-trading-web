import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import UserAccountRoute from "./UserAccountRoute";

const router = createBrowserRouter([
    ...[{ path: "/", element: <Home /> }],
    ...UserAccountRoute,
]);

export default router;
