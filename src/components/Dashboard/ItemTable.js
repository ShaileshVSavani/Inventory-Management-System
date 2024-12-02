
import React, { useState, useEffect } from "react";

const ItemTable = () => {
  const [items, setItems] = useState([]);

  // Function to determine the stock level color based on quantity
  const getStockClass = (quantity) => {
    if (quantity <= 5) return "bg-red-500 text-white"; 
    return "bg-green-500 text-white"; 
  };

  // Load items from localStorage when the component mounts
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("inventoryItems")) || [];
    setItems(storedItems);
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-full p-4">
      {/* Responsive Table with horizontal scrolling on small screens */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="text-sm md:text-base">
              <th className="px-4 py-3 text-center bg-gray-200 font-semibold">Item Name</th>
              <th className="px-4 py-3 text-center bg-gray-200 font-semibold">Quantity</th>
              <th className="px-4 py-3 text-center bg-gray-200 font-semibold">Category</th>
              <th className="px-4 py-3 text-center bg-gray-200 font-semibold">Supplier</th>
              <th className="px-4 py-3 text-center bg-gray-200 font-semibold">Stock</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-4 py-3 text-center text-gray-500">
                  No items available.
                </td>
              </tr>
            ) : (
              items.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="px-4 py-3 text-center">{item.name}</td>
                  <td className="px-4 py-3 text-center">{item.quantity}</td>
                  <td className="px-4 py-3 text-center">{item.category}</td>
                  <td className="px-4 py-3 text-center">{item.supplier}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`px-2 py-1 rounded ${getStockClass(item.quantity)}`}>
                      {item.quantity <= 5 ? "Low" : "Sufficient"}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ItemTable;
