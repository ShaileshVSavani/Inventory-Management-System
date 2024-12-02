
import React from "react";

const SupplierTable = ({ suppliers, onEdit }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden p-4">
      <h2 className="text-xl font-bold p-4">Suppliers</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-3 text-center bg-gray-200 font-semibold">Supplier Name</th>
              <th className="px-4 py-3 text-center bg-gray-200 font-semibold">Contact</th>
              <th className="px-4 py-3 text-center bg-gray-200 font-semibold">Items</th>
              <th className="px-4 py-3 text-center bg-gray-200 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.length > 0 ? (
              suppliers.map((supplier) => (
                <tr key={supplier.id} className="border-b">
                  <td className="px-4 py-2 text-center">{supplier.name}</td>
                  <td className="px-4 py-2 text-center">{supplier.contact}</td>
                  <td className="px-4 py-2 text-center">{supplier.items.join(", ")}</td>
                  <td className="px-4 py-2 text-center">
                    <button
                      onClick={() => onEdit(supplier)}
                      className="bg-yellow-400 text-white px-2 py-1 rounded"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  No suppliers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupplierTable;
