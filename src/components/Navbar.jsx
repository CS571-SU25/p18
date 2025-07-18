import React from 'react';
import { Link } from 'react-router';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/calendar">Calendar</Link>
      <Link to="/catalog">Catalog</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/favorites">Favorites</Link>
    </nav>
  );
}

export default Navbar;