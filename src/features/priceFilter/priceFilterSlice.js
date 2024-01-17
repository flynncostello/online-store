
export const setPrice = newMaxPrice => {
    return {
        type: 'priceFilter/setPrice',
        payload: newMaxPrice
    };
};

const initialPriceFilter = 100;
export const priceFilterReducer = (priceFilter = initialPriceFilter, action) => {
    switch(action.type) {
        case 'priceFilter/setPrice': {
            return action.payload
        }
        default: {
            return priceFilter
        }
    }
}


