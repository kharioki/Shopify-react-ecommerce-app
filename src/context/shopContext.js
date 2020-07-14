import React, { createContext, useState, useEffect } from 'react';
import Client from 'shopify-buy';

export const ShopContext = createContext();

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: 'plugdd.myshopify.com',
  storefrontAccessToken: '73bf4bf50ba473a4ce094ec8f57c39db'
});

const ShopProvider = props => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [checkout, setCheckout] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [test, setTest] = useState('test');

  const createCheckout = async () => {
    const checkout = await client.checkout.create();
    console.log(checkout);
  };

  const addItemToCart = async (variantId, quantity) => {};

  const fetchAllProducts = async () => {};

  const fetchProductWithId = async id => {};

  const closeCart = () => {};

  const openCart = () => {};

  useEffect(() => {
    createCheckout();
  }, []);

  return (
    <ShopContext.Provider
      value={{ products, product, checkout, isCartOpen, test }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export const ShopConsumer = ShopContext.Consumer;

export default ShopProvider;
