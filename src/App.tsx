import router from "./routes/Route.tsx"
import { RouterProvider } from "react-router-dom"
import "@Assets/styles/index.css"

function App() {
    return <RouterProvider router={router} />
}

export default App
