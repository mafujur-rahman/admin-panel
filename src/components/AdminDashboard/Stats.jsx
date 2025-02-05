import axios from "axios";
import { useEffect, useState } from "react";
import { FaBox, FaDollarSign, FaShoppingCart, FaUsers } from "react-icons/fa";


const Stats = () => {
    const [users, setUsers] = useState([]);

    // users data
    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setUsers(res.data))
        .catch(error => console.error(error))
    },[]);

    return (
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
                <h2 className="text-xl font-bold">53</h2>
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
    );
};

export default Stats;