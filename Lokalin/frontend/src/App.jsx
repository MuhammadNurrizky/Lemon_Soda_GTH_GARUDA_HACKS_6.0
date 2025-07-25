// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';
// import Navbar from './components/Navbar';
// import Beranda from './components/Beranda';
// import Fitur1 from './components/Fitur1';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Beranda />} />
//           <Route path="/fitur1" element={<Fitur1 />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Beranda from './components/Beranda';
import Fitur1 from './components/Fitur1';
import Navbar from './components/Navbar';

// Komponen pembungkus biar bisa akses lokasi
const Layout = () => {
  const location = useLocation();

  const hideNavbar = location.pathname === '/fitur1';

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/fitur1" element={<Fitur1 />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default App;
