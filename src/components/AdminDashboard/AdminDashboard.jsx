import { useEffect, useState } from "react";
import { FaBell, FaBox, FaDollarSign, FaSearch, FaShoppingCart, FaTachometerAlt, FaUserCircle, FaUsers } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import Users from "./Users/Users";
import Products from "./Products/Products";
import AddProductModal from "./Products/AddProductModal";
import axios from "axios";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";


const AdminDashboard = () => {
    const [viewMode, setViewMode] = useState("stats");
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [newProducts, setNewProducts] = useState([]);

    // users data
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setUsers(res.data))
            .catch(error => console.error(error))
    }, []);


    // products data
    useEffect(() => {
        axios.get('https://api.restful-api.dev/objects')
            .then(res => setProducts(res.data))
            .catch(error => console.error(error))
    }, []);


    // Handle navigation
    const handleNavigation = (mode) => {
        setViewMode(mode);
    };

    // handle add products
    const handleAddProduct = async (newProduct) => {
        try {
            const response = await axios.get(`https://api.restful-api.dev/objects/${newProduct.id}`);

            if (response.data) {
                setNewProducts([...newProducts, response.data]);
            }
        } catch (error) {
            console.error("Error fetching newly added product", error);
        }
    };

    // handle delete button
    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(`https://api.restful-api.dev/objects/${id}`);
                    setNewProducts(newProducts.filter((item) => item.id !== id));

                    Swal.fire("Deleted!", "Your product has been deleted.", "success");
                } catch (error) {
                    Swal.fire("Error!", "Failed to delete the product.", "error");
                    console.error("Error deleting product:", error);
                }
            }
        });
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
            <div className="w-4/5 p-5">
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
                <AddProductModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onAddProduct={handleAddProduct} />

                {/* Conditional Rendering */}
                {viewMode === "stats" && <div className="p-6">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-4 gap-6 mt-6">
                        {/* Total Users */}
                        <div className="bg-white shadow-lg p-6 rounded-md flex flex-col items-center border">
                            <FaUsers size={40} className="text-[#EE4E5B]" />
                            <h2 className="text-xl font-bold">{users.length}</h2>
                            <p className="text-gray-500">Users</p>
                        </div>

                        {/* Total Products */}
                        <div className="bg-white shadow-lg p-6 rounded-md flex flex-col items-center border">
                            <FaBox size={40} className="text-[#EE4E5B]" />
                            <h2 className="text-xl font-bold">{products.length}</h2>
                            <p className="text-gray-500">Products</p>
                        </div>

                        {/* Total Orders */}
                        <div className="bg-white shadow-lg p-6 rounded-md flex flex-col items-center border">
                            <FaShoppingCart size={40} className="text-[#EE4E5B]" />
                            <h2 className="text-xl font-bold">5</h2>
                            <p className="text-gray-500">Orders</p>
                        </div>

                        {/* Total Revenue */}
                        <div className="bg-white shadow-lg p-6 rounded-md flex flex-col items-center border">
                            <FaDollarSign size={40} className="text-[#EE4E5B]" />
                            <h2 className="text-xl font-bold">$350,000</h2>
                            <p className="text-gray-500">Revenue</p>
                        </div>
                    </div>

                    {/* 🆕 New Products List Section Below */}
                    <div className="mt-6">
                        <div className="max-w-sm bg-white shadow-lg rounded-lg p-4">
                            <div className="flex justify-between items-center border-b pb-2">
                                <h2 className="text-2xl font-bold mb-4 text-[#EE4E5B]">New Products</h2>
                            </div>
                            <table className="w-full mt-3">
                                <thead>
                                    <tr className="border-b text-left text-gray-600 text-sm">
                                        <th className="py-2">Profile</th>
                                        <th className="py-2">Name</th>
                                        <th className="py-2">Color</th>
                                        <th className="py-2 text-center">Option</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {newProducts.length > 0 ? (
                                        newProducts.map((product) => (
                                            <tr key={product.id} className="border-b">
                                                <td className="py-2">
                                                    <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center">
                                                        <span className="text-lg font-bold text-blue-600">🆕</span>
                                                    </div>
                                                </td>
                                                <td className="py-2 text-sm">{product.name}</td>
                                                <td className="py-2 text-sm">{product.data?.color || "N/A"}</td>
                                                <td className="py-2 text-center">
                                                    {/* delete button */}
                                                    <button onClick={() => handleDelete(product?.id)} className="text-[#EE4E5B]">
                                                        <RiDeleteBin5Line size={20} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="4" className="text-center text-gray-500 py-2">No products available.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>}
                {viewMode === "users" && <Users />}
                {viewMode === "products" && <Products />}
            </div>
        </div>
    );
};

export default AdminDashboard;
