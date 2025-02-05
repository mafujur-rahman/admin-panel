import axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setUsers(res.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="p-6 bg-white rounded-lg shadow-md mt-6">
            <h2 className="text-2xl font-bold mb-4 text-[#EE4E5B]">Users List</h2>
            <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
                <thead>
                    <tr className="bg-gray-100 text-[#EE4E5B]">
                        <th className="border p-3">Name</th>
                        <th className="border p-3">Email</th>
                        <th className="border p-3">City</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? (
                        users.map((user, index) => (
                            <tr key={user.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                <td className="border p-3 text-center text-gray-700">{user.name}</td>
                                <td className="border p-3 text-center text-gray-600">{user.email}</td>
                                <td className="border p-3 text-center text-gray-600">{user.address.city}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" className="text-center text-gray-500 p-4">
                                Loading users...
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Users;
