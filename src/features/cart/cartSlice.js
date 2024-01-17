export const addItem = (itemToAdd) => {
    return {
        type: 'cart/addItem',
        payload: itemToAdd
    };
};
  
export const changeItemQuantity = (newQuantity, name) => {
    return {
        type: 'cart/changeItemQuantity',
        payload: { newQuantity, name } 
    };
};

export const removeItem = (itemToRemove) => {
    return {
        type: 'cart/removeItem',
        payload: itemToRemove
    }
}
  
const initialCart = {};
/*
{
    'item X': { 12.50, 12 },
    ...
}
*/
export const cartReducer = (cart = initialCart, action) => {
    switch (action.type) {
        case 'cart/addItem': {
            const { name, price } = action.payload;

            const quantity = cart[name] ? cart[name].quantity + 1 : 1;
            const newItem = { price, quantity };

            return { 
                ...cart, 
                [name]: newItem 
            };
        }
        case 'cart/changeItemQuantity': {
            const { name, newQuantity } = action.payload;
            const itemToUpdate = cart[name];

            const updatedItem = {
                ...itemToUpdate,
                quantity: newQuantity,
            };
    
            return {
                ...cart,
                [name]: updatedItem,
            };        
        }
        case 'cart/removeItem': {
            const { [action.payload]: _, ...rest } = cart;
            return rest;
        }
        default: {
            return cart;
        }
    }
};