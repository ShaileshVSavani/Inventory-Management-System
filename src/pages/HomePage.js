
import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex flex-col justify-center items-center text-center p-6 pt-28">
      {/* Hero Section */}
      <div className="bg-white shadow-2xl rounded-lg p-8 max-w-3xl w-full  mb-12">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-6 tracking-tight">
          Welcome to Inventory App
        </h1>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          Effortlessly manage your inventory and suppliers. Track products, manage stock levels, and streamline your workflows—all in one place.
        </p>
        <p className="text-gray-500 text-sm sm:text-base mb-6">
          Use the navigation bar to get started with inventory and supplier management. Experience a smoother, more efficient way of doing business.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition-colors">
          Get Started
        </button>
      </div>

      {/* Features Section */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">Why Choose Inventory App?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Real-Time Inventory Tracking</h3>
              <p className="text-gray-700 text-lg">
                Keep track of your inventory in real-time, ensuring you're always aware of stock levels and product movement.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Supplier Management</h3>
              <p className="text-gray-700 text-lg">
                Manage your suppliers with ease, keep track of their contact details, and view the items they provide.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">User-Friendly Interface</h3>
              <p className="text-gray-700 text-lg">
                With an intuitive interface, you can quickly access all features and perform tasks with minimal clicks.
              </p>
            </div>
          </div>
        </div>
      </section>

    

      {/* Call to Action Section */}
      <section className="w-full bg-blue-600 py-16">
        <div className="container mx-auto text-center text-white px-6">
          <h2 className="text-3xl font-semibold mb-6">Start Managing Your Inventory Today</h2>
          <p className="text-lg mb-8">
            Simplify your business operations with an efficient and reliable inventory management solution.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg hover:bg-gray-100 transition-colors">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-gray-800 py-6 text-white">
        <div className="container mx-auto text-center px-6">
            <p>&copy; 2024 Inventory App. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
