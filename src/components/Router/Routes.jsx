import { createBrowserRouter } from "react-router";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import Users from "../AdminDashboard/Users/Users";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AdminDashboard />
    },
    {
        path:'/users',
        element: <Users />
    }
])

export default router;