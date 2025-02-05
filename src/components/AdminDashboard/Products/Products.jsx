import axios from "axios";
import { useEffect, useState } from "react";


const Products = () => {
    const [products, setProducts] = useState([]);

    // products data
    useEffect(() => {
        axios.get('https://api.restful-api.dev/objects')
            .then(res => setProducts(res.data))
            .catch(error => console.error(error))
    }, []);


    return (
        <div className="p-4 bg-white rounded-lg shadow-md mt-6">
            <h2 className="text-2xl font-bold mb-4 text-[#EE4E5B]">Products List</h2>
            <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
                <thead>
                    <tr className="bg-gray-100 text-[#EE4E5B]">
                        <th className="border p-2">ID</th>
                        <th className="border p-2">Name</th>
                    </tr>
                </thead>
                <tbody>
                {products.length > 0 ? (
                        products.map((product, index) => (
                            <tr key={product.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                <td className="border p-3 text-center text-gray-700">{product.id}</td>
                                <td className="border p-3 text-center text-gray-600">{product.name}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" className="text-center text-gray-500 p-4">
                                Loading products...
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Products;