import React from 'react';
import { useOutletContext } from 'react-router';
import ShoeCard from './ShoeCard';

function Favorites() {
  const { favorites } = useOutletContext();

  return (
    <div>
      <h1>Your Favorited Shoes</h1>
      {favorites.length === 0 ? (
        <p style={{ fontSize: '1.1rem', color: '#666' }}>
          You haven't favorited any shoes yet.
        </p>
      ) : (
        favorites.map((shoe, index) => (
          <ShoeCard key={index} shoe={shoe} showActions={false} />
        ))
      )}
    </div>
  );
}

export default Favorites;