import React from 'react';

import { priceRangeData } from '../../data.js';
import { setPrice } from './priceFilterSlice.js';

export const PriceFilter = ({ priceFilter, currencyFilter, dispatch }) => {
  const onClickHandler = (price) => {
    dispatch(setPrice(price));
  };

  return (
    <div id="price-filters-container">
      <h3>Choose a max price ({currencyFilter})</h3>
      {priceRangeData.map(createPriceButton)}
    </div>
  );

  function createPriceButton(price) {
    return (
      <button
        className={`price-button ${
          priceFilter === price && 'selected'
        }`}
        key={price}
        onClick={() => onClickHandler(price)}
      >
        {price}
      </button>
    );
  }
};
