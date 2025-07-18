import React from 'react';
import CountdownTimer from './CountdownTimer';
import ShoeCard from './ShoeCard';
import jordan11 from '../assets/jordan11.webp';
import { useOutletContext } from 'react-router';

function Home() {
  const { handleAddToCart, handleFavorite } = useOutletContext();

  const nextRelease = {
    name: "Jordan 11",
    brand: "Jordan",
    colorway: "White/Blue",
    price: "$200",
    releaseDate: "2025-08-01T00:00:00",
    image: jordan11
  };

  return (
    <div>
      <h1>Welcome to Unboxed</h1>
      <h2>Next Release:</h2>
      <CountdownTimer targetDate={new Date(nextRelease.releaseDate)} />
      <ShoeCard shoe={nextRelease} onAddToCart={handleAddToCart} onFavorite={handleFavorite} />
    </div>
  );
}

export default Home;