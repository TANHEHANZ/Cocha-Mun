import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/private/navbar";

const LayoutDashboard = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <div className="flex min-h-screen">
      <Navbar isNavOpen={isNavOpen} />
      <main className="w-full  p-8 md:ml-2">
        <button
          className="md:hidden fixed top-4 right-4 p-2 bg-gray-700 text-white rounded"
          onClick={toggleNav}   
        >
          Menu
        </button>
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutDashboard;
