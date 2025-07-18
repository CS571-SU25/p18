import React from 'react';

function ShoeCard({ shoe, onAddToCart, onFavorite, showActions = true }) {
  return (
    <div className="shoe-card">
      <img src={shoe.image} alt={shoe.name} />
      <h3>{shoe.name}</h3>
      <p>{shoe.brand}</p>
      <p>{shoe.colorway}</p>
      <p>{shoe.price}</p>
      {showActions && (
        <div>
          <button onClick={() => onAddToCart?.(shoe)}>Add to Cart</button>
          <button onClick={() => onFavorite?.(shoe)}>Favorite</button>
        </div>
      )}
    </div>
  );
}

export default ShoeCard;