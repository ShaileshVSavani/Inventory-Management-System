
import React, { useState, useEffect } from "react";
import SupplierTable from "../components/Supplier/SupplierTable";
import AddSupplierModal from "../components/Supplier/AddSupplierModal";
import EditSupplierModal from "../components/Supplier/EditSupplierModal";

const SuppliersPage = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState(null);

  useEffect(() => {
    const savedSuppliers = JSON.parse(localStorage.getItem("suppliers")) || [];
    setSuppliers(savedSuppliers);
  }, []);

  const handleAddSupplier = (newSupplier) => {
    const updatedSuppliers = [...suppliers, { ...newSupplier, id: Date.now() }];
    setSuppliers(updatedSuppliers);
    localStorage.setItem("suppliers", JSON.stringify(updatedSuppliers));
  };

  const handleEditSupplier = (updatedSupplier) => {
    const updatedSuppliers = suppliers.map((supplier) =>
      supplier.id === updatedSupplier.id ? updatedSupplier : supplier
    );
    setSuppliers(updatedSuppliers);
    localStorage.setItem("suppliers", JSON.stringify(updatedSuppliers));
  };

  const openEditModal = (supplier) => {
    setSelectedSupplier(supplier);
    setEditModalOpen(true);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen pt-20">
      <h1 className="text-2xl font-bold mb-6">Supplier Management</h1>
      <SupplierTable suppliers={suppliers} onEdit={openEditModal} />
      <div className="mt-4">
        <button
          onClick={() => setAddModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add New Supplier
        </button>
      </div>
      <AddSupplierModal
        isOpen={isAddModalOpen}
        onClose={() => setAddModalOpen(false)}
        onAdd={handleAddSupplier}
      />
      <EditSupplierModal
        isOpen={isEditModalOpen}
        onClose={() => setEditModalOpen(false)}
        onEdit={handleEditSupplier}
        supplier={selectedSupplier}
      />
    </div>
  );
};

export default SuppliersPage;
