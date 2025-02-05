import { createBrowserRouter } from "react-router";
import AdminDashboard from "../AdminDashboard/AdminDashboard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AdminDashboard />
    }
])

export default router;