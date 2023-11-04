// Sidebar.jsx
import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-black text-white w-[256px] p-4 h-screen text-xl">
      <ul>
        <li className="mb-2 px-6 py-6 rounded-xl group hover:bg-red-400">
            <div className="flex items-center">
                <img src="/movie-logos.svg" alt="" className="invert w-5 mr-3" />
                <a href="#" className="block hover:text-blue-500">Film</a>
            </div>
        </li>
        <li className="mb-2 px-6 py-6 rounded-xl group hover:bg-red-400">
            <div className="flex items-center">
                <img src="/ticket.svg" alt="" className="invert w-5 mr-3" />
                <a href="#" className="block hover:text-blue-500">Ticket</a>
            </div>
        </li>
        <li className="mb-2 px-6 py-6 rounded-xl group hover:bg-red-400">
            <div className="flex items-center">
                <img src="/cinema.svg" alt="" className="invert w-5 mr-3" />
                <a href="#" className="block hover:text-blue-500">Bioskop</a>
            </div>
        </li>

        <li className="mb-2 px-6 py-6 rounded-xl group hover:bg-red-400">
            <div className="flex items-center">
                <img src="/schedule.svg" alt="" className="invert w-5 mr-3" />
                <a href="#" className="block hover:text-blue-500">Schedule</a>
            </div>
        </li>
        <li className="mb-2 px-6 py-6 rounded-xl group hover:bg-red-400">
            <div className="flex items-center">
                <img src="/history.svg" alt="" className="invert w-5 mr-3" />
                <a href="#" className="block hover:text-blue-500">History</a>
            </div>
        </li>
        <li className="mb-2 px-6 py-6 rounded-xl group hover:bg-red-400">
            <div className="flex items-center">
                <img src="/studio.svg" alt="" className="invert w-5 mr-3" />
                <a href="#" className="block hover:text-blue-500">Studio</a>
            </div>
        </li>
        <li className="mb-2 px-6 py-6 rounded-xl group hover:bg-red-400">
            <div className="flex items-center">
                <img src="/customer.svg" alt="" className="invert w-5 mr-3" />
                <a href="#" className="block hover:text-blue-500">Customer</a>
            </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
