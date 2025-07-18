import React from 'react';
import ShoeCard from './ShoeCard';
import jordan1low from '../assets/jordan1low.webp'
import airforce1 from '../assets/airforce1.webp'
import { useOutletContext } from 'react-router';


const releases = [
  {
    name: "Jordan 1 Low",
    brand: "Jordan",
    colorway: "White/Red",
    price: "$150",
    releaseDate: "2025-08-05",
    image: jordan1low
  },
  {
    name: "Air Force 1",
    brand: "Nike",
    colorway: "White",
    price: "$150",
    releaseDate: "2025-08-10",
    image: airforce1
  }
];

function Calendar() {
  const { handleAddToCart, handleFavorite } = useOutletContext();

  return (
    <div>
      <h1>Upcoming Releases</h1>
      {releases.map((shoe, index) => (
        <ShoeCard
          key={index}
          shoe={shoe}
          onAddToCart={handleAddToCart}
          onFavorite={handleFavorite}
        />
      ))}
    </div>
  );
}

export default Calendar;