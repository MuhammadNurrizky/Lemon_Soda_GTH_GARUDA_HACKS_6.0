import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-[#6287D8] lg:w-screen size-20 flex justify-between items-center fixed top-0 left-0 z-50">
      <h1 className="ml-8  font-inter font-bold text-2xl">Lokalin</h1>
      <div className="nav-link mr-8">
        <ul className=" w-lg h-full flex justify-evenly items-center text-xl">
          <li className="font-inter">
            <Link to="/">Beranda</Link>
          </li>
          <li className="font-inter">
            <Link to="/fitur1">Fitur 1</Link>
          </li>
          <li className="font-inter">Fitur 2</li>
          <li className="font-inter">Help</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
