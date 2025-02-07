import axios from "axios";
import { useEffect, useState } from "react";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState(""); 
    const [sortField, setSortField] = useState("id"); 
    const [sortOrder, setSortOrder] = useState("asc"); 

    // Fetch products data
    useEffect(() => {
        axios.get('https://api.restful-api.dev/objects')
            .then(res => setProducts(res.data))
            .catch(error => console.error(error));
    }, []);

    // Filtered products
    const filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    // Sorting function
    const sortedProducts = filteredProducts.sort((a, b) => {
        if (sortField === "id") {
            return sortOrder === "asc" ? a.id - b.id : b.id - a.id;
        }
        if (sortField === "name") {
            return sortOrder === "asc"
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name);
        }
        return 0;
    });

    // Toggle sort order
    const toggleSortOrder = () => {
        setSortOrder(prevOrder => (prevOrder === "asc" ? "desc" : "asc"));
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-md mt-6">
            <h2 className="text-2xl font-bold mb-4 text-[#EE4E5B]">Products List</h2>

            <input
                type="text"
                className="border p-2 rounded-lg w-full mb-4"
                placeholder="Search by product name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
                <thead>
                    <tr className="bg-gray-100 text-[#EE4E5B]">
                        <th
                            className="border p-2 cursor-pointer"
                            onClick={() => {
                                setSortField("id");
                                toggleSortOrder();
                            }}
                        >
                            ID {sortField === "id" && (sortOrder === "asc" ? "↑" : "↓")}
                        </th>
                        <th
                            className="border p-2 cursor-pointer"
                            onClick={() => {
                                setSortField("name");
                                toggleSortOrder();
                            }}
                        >
                            Name {sortField === "name" && (sortOrder === "asc" ? "↑" : "↓")}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {sortedProducts.length > 0 ? (
                        sortedProducts.map((product, index) => (
                            <tr key={product.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                <td className="border p-3 text-center text-gray-700">{product.id}</td>
                                <td className="border p-3 text-center text-gray-600">{product.name}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="2" className="text-center text-gray-500 p-4">
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
