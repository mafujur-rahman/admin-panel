import { useState } from "react";
import { FaBell, FaBox, FaSearch, FaTachometerAlt, FaUserCircle, FaUsers } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import Users from "./Users/Users";
import Stats from "./Stats";
import Products from "./Products/Products";
import AddProductModal from "./Products/AddProductModal";

const AdminDashboard = () => {
    const [viewMode, setViewMode] = useState("stats");
    const [modalOpen, setModalOpen] = useState(false);


    // Handle navigation
    const handleNavigation = (mode) => {
        setViewMode(mode);
    };

    return (
        <div className="container min-h-screen flex">
            {/* Sidebar */}
            <div className="w-1/5 min-h-screen bg-[#EE4E5B] p-5 text-white">
                <h1 className="text-black text-center font-bold text-xl">
                    Admin Dashboard
                </h1>

                {/* Sidebar Menu */}
                <ul className="mt-6 space-y-4">
                    <li onClick={() => handleNavigation("stats")} className="flex items-center gap-3 p-3 rounded-md hover:bg-white hover:text-[#EE4E5B] cursor-pointer">
                        <FaTachometerAlt size={20} /> Dashboard
                    </li>
                    <li onClick={() => handleNavigation("users")} className="flex items-center gap-3 p-3 rounded-md hover:bg-white hover:text-[#EE4E5B] cursor-pointer">
                        <FaUsers size={20} /> Users
                    </li>
                    <li onClick={() => handleNavigation("products")} className="flex items-center gap-3 p-3 rounded-md hover:bg-white hover:text-[#EE4E5B] cursor-pointer">
                        <FaBox size={20} /> Products
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="w-4/5  p-5">
                {/* Top Navbar */}
                <div className="flex justify-between items-center border-b-2 pb-3">
                    {/* Search */}
                    <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg w-1/3">
                        <input type="text" placeholder="Search..." className="bg-transparent outline-none w-full" />
                        <FaSearch size={18} className="text-gray-500" />
                    </div>

                    {/* Right Side Icons */}
                    <div onClick={() => setModalOpen(true)} className="flex items-center gap-4">
                        <button className="bg-[#EE4E5B] text-white px-4 py-2 rounded-md flex items-center gap-2 font-semibold">
                            <MdAdd size={18} /> Add New
                        </button>
                        <FaBell size={22} className="text-gray-600 cursor-pointer" />
                        <FaUserCircle size={32} className="text-gray-600 cursor-pointer" />
                    </div>
                </div>

                {/* Modal */}
                <AddProductModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

                {/* Conditional Rendering */}
                    {viewMode === "stats" && <Stats />}
                    {viewMode === "users" && <Users />}
                    {viewMode === "products" && <Products />}
                
            </div>
        </div>
    );
};

export default AdminDashboard;
