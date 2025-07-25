import React, { useState } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import { BsBarChartFill } from 'react-icons/bs';
import { FaSearch, FaHeart } from 'react-icons/fa';

const Fitur1 = () => {
  const [heart, setHeart] = useState(false);

  const ifClick = () => {
    setHeart(!heart);
  };

  return (
    <div className="container">
      {/* START NAVBAR */}
      <div className="lg:w-full bg-cyan-400 lg:h-20 flex justify-between items-center">
        <h1 className="lg:ml-10 font-bold text-2xl">Lokalin</h1>
        <div className="lg:w-140 lg:h-full mr-0 flex items-center justify-evenly  ">
          <SearchBar className="text-3xl "></SearchBar>
          <FaHeart onClick={ifClick} className={`cursor-pointer text-3xl transition duration-200  ${heart ? 'text-red-600' : 'text-white'}`} />
          <CiMenuBurger className="text-3xl" />
        </div>
      </div>
      {/* END NAVBAR */}
      <LeaderBoard />
    </div>
  );
};

// SearchBar component (pisahkan di luar Fitur1)
const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    console.log('Mencari:', query);
  };

  return (
    <div className="relative w-70 max-w-full mt-0">
      <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search..." className="w-full pl-5 pr-10 py-3 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400" />
      <button onClick={handleSearch} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-blue-600">
        <FaSearch />
      </button>
    </div>
  );
};

const LeaderBoard = () => {
  return (
    <div>
      <div className="w-[80%] h-30 mx-auto rounded-b-4xl drop-shadow-xl/35 bg-zinc-300 flex justify-between items-center">
        <div className="flex bg-amber-400">
          <BsBarChartFill />
          <h1>Leaderboard</h1>
        </div>
        <div className="flex w-2xl mx-auto justify-around items-center">
          <div className="rounded-full w-20 h-20 bg-zinc-50 drop-shadow-none"></div>
          <div className="rounded-full w-20 h-20 bg-zinc-50 drop-shadow-none"></div>
          <div className="rounded-full w-20 h-20 bg-zinc-50 drop-shadow-none"></div>
          <div className="rounded-full w-20 h-20 bg-zinc-50 drop-shadow-none"></div>
        </div>
      </div>
    </div>
  );
};

export default Fitur1;
