import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem('cart')) || [];
  });

  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem('favorites')) || [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleAddToCart = (shoe) => {
    if (!cart.find(s => s.name === shoe.name)) {
      setCart([...cart, shoe]);
    }
  };

  const handleFavorite = (shoe) => {
    if (!favorites.find(s => s.name === shoe.name)) {
      setFavorites([...favorites, shoe]);
    }
  };

  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Outlet context={{ handleAddToCart, handleFavorite, cart, favorites }} />
      </main>
    </div>
  );
}

export default App;