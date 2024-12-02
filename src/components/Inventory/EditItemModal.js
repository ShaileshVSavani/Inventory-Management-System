
import React, { useState, useEffect } from "react";

const EditItemModal = ({ isOpen, onClose, onEdit, item }) => {
  const [editedItem, setEditedItem] = useState({ name: "", quantity: "", category: "", supplier: "" });

  useEffect(() => {
    if (item) {
      setEditedItem({ ...item });
    }
  }, [item]);

  const handleChange = (e) => {
    setEditedItem({ ...editedItem, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onEdit(editedItem);
    setEditedItem({ name: "", quantity: "", category: "", supplier: "" });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg sm:max-w-md md:max-w-lg lg:max-w-xl">
        <h2 className="text-xl font-bold mb-4 text-center">Edit Item</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Item Name"
            value={editedItem.name}
            onChange={handleChange}
            className="border p-3 rounded-md text-sm sm:text-base"
          />
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={editedItem.quantity}
            onChange={handleChange}
            className="border p-3 rounded-md text-sm sm:text-base"
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={editedItem.category}
            onChange={handleChange}
            className="border p-3 rounded-md text-sm sm:text-base"
          />
          <input
            type="text"
            name="supplier"
            placeholder="Supplier"
            value={editedItem.supplier}
            onChange={handleChange}
            className="border p-3 rounded-md text-sm sm:text-base"
          />
          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-md text-sm sm:text-base hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm sm:text-base hover:bg-blue-600"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditItemModal;
