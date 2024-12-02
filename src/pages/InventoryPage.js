
import React, { useState, useEffect } from "react";
import AddItemModal from "../components/Inventory/AddItemModal";
import EditItemModal from "../components/Inventory/EditItemModal";
import InventoryTable from "../components/Inventory/InventoryTable";

const InventoryPage = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [filterSupplier, setFilterSupplier] = useState("");
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("inventoryItems")) || [];
    setItems(savedItems);
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem("inventoryItems", JSON.stringify(items));
    }
  }, [items]);

  const handleAddItem = (item) => {
    const newItem = { ...item, id: Date.now() };
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    localStorage.setItem("inventoryItems", JSON.stringify(updatedItems));
  };

  const handleEditItem = (updatedItem) => {
    const updatedItems = items.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setItems(updatedItems);
    localStorage.setItem("inventoryItems", JSON.stringify(updatedItems));
  };

  const handleDeleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem("inventoryItems", JSON.stringify(updatedItems));
  };

  const openEditModal = (item) => {
    setSelectedItem(item);
    setEditModalOpen(true);
  };

  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!filterCategory || item.category === filterCategory) &&
      (!filterSupplier || item.supplier === filterSupplier)
  );

  // Extract unique categories and suppliers dynamically
  const categories = [...new Set(items.map(item => item.category))];
  const suppliers = [...new Set(items.map(item => item.supplier))];

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center sm:text-left">
        Inventory Management
      </h1>

      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-3 rounded-lg w-full sm:w-1/3 md:w-1/4 lg:w-1/5 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="border p-3 rounded-lg w-full sm:w-1/3 md:w-1/4 lg:w-1/5 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Filter by category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select
          value={filterSupplier}
          onChange={(e) => setFilterSupplier(e.target.value)}
          className="border p-3 rounded-lg w-full sm:w-1/3 md:w-1/4 lg:w-1/5 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Filter by supplier</option>
          {suppliers.map((supplier) => (
            <option key={supplier} value={supplier}>
              {supplier}
            </option>
          ))}
        </select>
      </div>

      <InventoryTable
        items={filteredItems}
        onEdit={openEditModal}
        onDelete={handleDeleteItem}
      />

      <div className="mt-6 text-left">
        <button
          onClick={() => setAddModalOpen(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors"
        >
          Add New Item
        </button>
      </div>

      <AddItemModal
        isOpen={isAddModalOpen}
        onClose={() => setAddModalOpen(false)}
        onAdd={handleAddItem}
      />
      <EditItemModal
        isOpen={isEditModalOpen}
        onClose={() => setEditModalOpen(false)}
        onEdit={handleEditItem}
        item={selectedItem}
      />
    </div>
  );
};

export default InventoryPage;
