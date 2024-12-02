
import React from 'react';
import ItemTable from './ItemTable';

const Dashboard = () => (
  <div className="p-5 bg-gray-100 min-h-screen pt-20">
    <h1 className="text-3xl font-bold mb-5">Inventory Dashboard</h1>
    <ItemTable />
  </div>
);

export default Dashboard;
