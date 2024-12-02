
import React, { useState } from "react";

const AddItemModal = ({ isOpen, onClose, onAdd }) => {
  const [item, setItem] = useState({ name: "", quantity: "", category: "", supplier: "" });

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (item.name && item.quantity && item.category && item.supplier) {
      onAdd(item);
      setItem({ name: "", quantity: "", category: "", supplier: "" });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg max-h-[90vh] overflow-auto">
        <h2 className="text-xl font-bold mb-4 text-center">Add New Item</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Item Name"
            value={item.name}
            onChange={handleChange}
            className="border p-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={item.quantity}
            onChange={handleChange}
            className="border p-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={item.category}
            onChange={handleChange}
            className="border p-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="text"
            name="supplier"
            placeholder="Supplier"
            value={item.supplier}
            onChange={handleChange}
            className="border p-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItemModal;
