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
    setCheckout(checkout);
  };

  const addItemToCheckout = async (variantId, quantity) => {
    const lineItemsToAdd = [
      {
        variantId,
        quantity: parseInt(quantity, 10)
      }
    ];

    const _checkout = await client.checkout.addLineItems(
      checkout.id,
      lineItemsToAdd
    );
    setCheckout(_checkout);
  };

  const fetchAllProducts = async () => {
    const products = await client.product.fetchAll();
    setProducts(products);
  };

  const fetchProductWithId = async id => {
    const product = await client.product.fetch(id);
    setProduct(product);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  useEffect(() => {
    createCheckout();
  }, []);

  return (
    <ShopContext.Provider
      value={{
        products,
        product,
        checkout,
        isCartOpen,
        test,
        fetchAllProducts,
        fetchProductWithId,
        addItemToCheckout,
        closeCart,
        openCart
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export const ShopConsumer = ShopContext.Consumer;

export default ShopProvider;
