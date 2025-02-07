import axios from "axios";
import Swal from "sweetalert2";

const AddProductModal = ({ isOpen, onClose, onAddProduct }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const color = form.color.value;
    const capacity = form.capacity.value;
    const newProduct = { name, data: { color, capacity } };

    try {
      const response = await axios.post("https://api.restful-api.dev/objects", newProduct);

      if (response.data) {
        Swal.fire({
          title: "Product Added Successfully!",
          icon: "success",
        });

        onAddProduct(response.data);
      }

      onClose();
    } catch (error) {
      console.error("Error adding product", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to add product.",
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-[#EE4E5B] mb-4">Add New Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Product Name" className="w-full p-2 border rounded" required />
          <input type="text" name="color" placeholder="Color" className="w-full p-2 border rounded" required />
          <input type="text" name="capacity" placeholder="Capacity" className="w-full p-2 border rounded" required />
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-400 text-white rounded">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-[#EE4E5B] text-white rounded">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
