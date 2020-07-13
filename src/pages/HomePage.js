import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context/shopContext';

export const HomePage = () => {
  const { test } = useContext(ShopContext);
  return <div>{test}</div>;
};
