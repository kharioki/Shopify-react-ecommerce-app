import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { ShopContext } from '../context/shopContext';

const ProductPage = () => {
  let { id } = useParams();

  const { fetchProductWithId, product } = useContext(ShopContext);

  useEffect(() => {
    fetchProductWithId(id);
  }, [fetchProductWithId]);

  return (
    <div>
      Product
      {id}
    </div>
  );
};

export default ProductPage;
