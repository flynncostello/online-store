import { createStore, combineReducers } from 'redux';
import { cartReducer } from '../features/cart/cartSlice';
import { currencyFilterReducer } from '../features/currencyFilter/currencyFilterSlice';
import { inventoryReducer } from '../features/inventory/inventorySlice';
import { searchTermReducer } from '../features/searchTerm/searchTermSlice';
import { priceFilterReducer } from '../features/priceFilter/priceFilterSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  currencyFilter: currencyFilterReducer,
  priceFilter: priceFilterReducer,
  inventory: inventoryReducer,
  searchTerm: searchTermReducer
});

export const store = createStore(rootReducer);
