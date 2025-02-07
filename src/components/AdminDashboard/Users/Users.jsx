import axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState(""); 
    const [sortField, setSortField] = useState("name"); 
    const [sortOrder, setSortOrder] = useState("asc");

    // Fetch users
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setUsers(res.data))
            .catch(error => console.error(error));
    }, []);

    // Filtered users
    const filteredUsers = users.filter(user => {
        return (
            user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.address.city.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

    // Sorting function
    const sortedUsers = filteredUsers.sort((a, b) => {
        if (sortField === "name") {
            return sortOrder === "asc"
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name);
        }
        if (sortField === "email") {
            return sortOrder === "asc"
                ? a.email.localeCompare(b.email)
                : b.email.localeCompare(a.email);
        }
        if (sortField === "city") {
            return sortOrder === "asc"
                ? a.address.city.localeCompare(b.address.city)
                : b.address.city.localeCompare(a.address.city);
        }
        return 0;
    });

    // Toggle sort order
    const toggleSortOrder = () => {
        setSortOrder(prevOrder => (prevOrder === "asc" ? "desc" : "asc"));
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md mt-6">
            <h2 className="text-2xl font-bold mb-4 text-[#EE4E5B]">Users List</h2>

            <input
                type="text"
                className="border border-[#EE4E5B] p-2 rounded-lg w-full mb-4"
                placeholder="Search by name, email, or city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
                    <thead>
                        <tr className="bg-gray-100 text-[#EE4E5B]">
                            <th
                                className="border p-3 cursor-pointer text-sm md:text-base"
                                onClick={() => {
                                    setSortField("name");
                                    toggleSortOrder();
                                }}
                            >
                                Name {sortField === "name" && (sortOrder === "asc" ? "↑" : "↓")}
                            </th>
                            <th
                                className="border p-3 cursor-pointer text-sm md:text-base"
                                onClick={() => {
                                    setSortField("email");
                                    toggleSortOrder();
                                }}
                            >
                                Email {sortField === "email" && (sortOrder === "asc" ? "↑" : "↓")}
                            </th>
                            <th
                                className="border p-3 cursor-pointer text-sm md:text-base"
                                onClick={() => {
                                    setSortField("city");
                                    toggleSortOrder();
                                }}
                            >
                                City {sortField === "city" && (sortOrder === "asc" ? "↑" : "↓")}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedUsers.length > 0 ? (
                            sortedUsers.map((user, index) => (
                                <tr key={user.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                    <td className="border p-3 text-center text-gray-700">{user.name}</td>
                                    <td className="border p-3 text-center text-gray-600">{user.email}</td>
                                    <td className="border p-3 text-center text-gray-600">{user.address.city}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="text-center text-gray-500 p-4">
                                    No users found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
