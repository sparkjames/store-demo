import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems = [], productToAdd) => {

  // find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // If found, increment quantity
  if (existingCartItem) {
    return cartItems.map( (cartItem) =>
      cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
  }

  // return new array with modified cartItems/ new cart item
  return [...cartItems, {...productToAdd, quantity: 1}];
};

const decrementCartItem = (cartItems = [], productToDecrement) => {

  return cartItems.map((cartItem) =>
    cartItem.id === productToDecrement.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
  ).filter((cartItem) =>
    cartItem.quantity > 0
  );

};

const removeCartItem = (cartItems = [], productToRemove) => {

  return cartItems.filter((cartItem) =>
    cartItem.id !== productToRemove.id
  );

};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  decrementItemFromCart: () => {},
  removeItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({children}) => {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect( ()=> {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect( () => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + (cartItem.quantity * cartItem.price),
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems( addCartItem(cartItems, productToAdd) );
  };

  const decrementItemFromCart = (productToDecrement) => {
    setCartItems(decrementCartItem(cartItems, productToDecrement));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const value = { isCartOpen, setIsCartOpen, addItemToCart, decrementItemFromCart, removeItemFromCart, cartItems, cartCount, cartTotal };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
};
