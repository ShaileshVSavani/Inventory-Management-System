
import React, { useState } from "react";

const AddSupplierModal = ({ isOpen, onClose, onAdd }) => {
  const [supplier, setSupplier] = useState({ name: "", contact: "", items: [] });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSupplier({ ...supplier, [name]: value });
  };

  const handleSubmit = () => {
    if (supplier.name && supplier.contact) {
      supplier.items = supplier.items.split(",").map((item) => item.trim());
      onAdd(supplier);
      setSupplier({ name: "", contact: "", items: [] });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg max-h-[90vh] overflow-auto">
        <h2 className="text-xl font-bold mb-4 text-center">Add New Supplier</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Supplier Name"
            value={supplier.name}
            onChange={handleChange}
            className="border p-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact Information"
            value={supplier.contact}
            onChange={handleChange}
            className="border p-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="text"
            name="items"
            placeholder="Items Supplied (comma-separated)"
            value={supplier.items}
            onChange={handleChange}
            className="border p-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
            Add Supplier
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-3 text-red-500 block w-full text-center hover:underline"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AddSupplierModal;
