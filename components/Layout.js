// components/Layout.js
import React from 'react';
import Navbar from '../pages/Navbar';

function Layout({ children }) {
  return (
    <div className="flex">
      <Navbar />
      <main className="w-5/6 p-4">
        {children}
      </main>
    </div>
  );
}

export default Layout;
