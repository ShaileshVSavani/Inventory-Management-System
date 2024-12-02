import React from "react";

const InventoryTable = ({
  items,
  onEdit,
  onDelete,
  emptyMessage = "No items found.",
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 overflow-x-auto">
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border-b p-2">Name</th>
            <th className="border-b p-2">Quantity</th>
            <th className="border-b p-2">Category</th>
            <th className="border-b p-2">Supplier</th>
            <th className="border-b p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 ? (
            items.map((item) => (
              <tr key={item.id}>
                <td className="border-b p-2 text-center">{item.name}</td>
                <td className="border-b p-2 text-center">{item.quantity}</td>
                <td className="border-b p-2 text-center">{item.category}</td>
                <td className="border-b p-2 text-center">{item.supplier}</td>
                <td className="border-b p-2 text-center flex gap-2 justify-center">
                  <button
                    onClick={() => onEdit(item)}
                    className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center text-gray-500 p-4">
                {emptyMessage}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
