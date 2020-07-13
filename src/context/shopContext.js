import React, { createContext, useState } from 'react';
import Client from 'shopify-buy';

export const ShopContext = createContext();

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: 'plugdd.myshopify.com',
  storefrontAccessToken: 'cafb605cf1da325ae8a590ff01a3104d'
});

const ShopProvider = props => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [checkout, setCheckout] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [test, setTest] = useState('test');

  return (
    <ShopContext.Provider value={{ products, product, checkout, isCartOpen }}>
      {props.children}
    </ShopContext.Provider>
  );
};

export const ShopConsumer = ShopContext.Consumer;

export default ShopProvider;
