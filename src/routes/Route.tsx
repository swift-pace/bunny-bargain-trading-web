import { createBrowserRouter } from "react-router-dom";
import HomeView from "../pages/Home";
import UserAccountRoute from "./UserAccountRoute";

const router = createBrowserRouter([
    ...[{ path: "/", element: <HomeView /> }],
    ...UserAccountRoute,
]);

export default router;
