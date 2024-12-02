
import React, { useState, useEffect } from "react";

const EditSupplierModal = ({ isOpen, onClose, onEdit, supplier }) => {
  const [formData, setFormData] = useState({ name: "", contact: "", items: [] });

  useEffect(() => {
    if (supplier) {
      setFormData(supplier);
    }
  }, [supplier]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (typeof formData.items === "string") {
      formData.items = formData.items.split(",").map((item) => item.trim());
    } else if (Array.isArray(formData.items)) {
      formData.items = formData.items.join(", ").split(",").map((item) => item.trim());
    }

    onEdit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg sm:max-w-md md:max-w-lg lg:max-w-xl">
        <h2 className="text-xl font-bold mb-4 text-center">Edit Supplier</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Supplier Name"
            value={formData.name || ""}
            onChange={handleChange}
            className="border p-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact Information"
            value={formData.contact || ""}
            onChange={handleChange}
            className="border p-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="text"
            name="items"
            placeholder="Items Supplied (comma-separated)"
            value={formData.items?.join(", ") || ""}
            onChange={handleChange}
            className="border p-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {/* <button
            type="button"
            onClick={handleSubmit}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
            Save Changes
          </button> */}
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

export default EditSupplierModal;
