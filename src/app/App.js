import React from 'react';
import '../index.css';

import { Inventory } from '../features/inventory/Inventory.js';
import { CurrencyFilter } from '../features/currencyFilter/CurrencyFilter.js';
import { Cart } from '../features/cart/Cart.js';
import { SearchTerm } from '../features/searchTerm/SearchTerm.js';
import { PriceFilter } from '../features/priceFilter/PriceFilter.js';

export const App = (props) => {
  const { state, dispatch } = props;

  return (
    <div id="app">
      <h1 className='App-title'>Codecademy Online Clothing Store</h1>
      <SearchTerm
        searchTerm={state.searchTerm}
        dispatch={dispatch}
      />
      <div className='filters'>
        <CurrencyFilter
          currencyFilter={state.currencyFilter}
          dispatch={dispatch}
        />

        <PriceFilter
          priceFilter={state.priceFilter}
          currencyFilter={state.currencyFilter}
          dispatch={dispatch}
        />
      </div>


      <Inventory
        inventory={state.inventory}
        currencyFilter={state.currencyFilter}
        searchTerm={state.searchTerm}
        maxPrice={state.priceFilter}
        dispatch={dispatch}
      />

      <Cart
        cart={state.cart}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

    </div>
  );
};
