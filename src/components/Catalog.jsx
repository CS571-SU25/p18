import React from 'react';
import ShoeCard from './ShoeCard';
import dunklow from '../assets/dunklow.webp'
import jordan3 from '../assets/jordan3.webp'
import { useOutletContext } from 'react-router';


const pastShoes = [
  {
    name: "Dunk Low",
    brand: "Nike",
    colorway: "White/Gray",
    price: "$180",
    image: dunklow
  },
  {
    name: "Jordan 3",
    brand: "Jordan",
    colorway: "White/Gray",
    price: "$220",
    image: jordan3
  }
];

function Catalog() {
  const { handleAddToCart, handleFavorite } = useOutletContext();

  return (
    <div>
      <h1>Past Shoe Releases</h1>
      {pastShoes.map((shoe, index) => (
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

export default Catalog;