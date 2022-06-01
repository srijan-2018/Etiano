import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, restaurant_id }) => {
  const allProducts = products.map((product) => {
    return (
      <ProductItem
        key={product.product_id}
        product={product}
        restaurant_id={restaurant_id}
      />
    );
  });

  return (
    <div className='grid gap-10 mb-16 md:mb-28 lg:mb-40 lg:gap-16 md:grid-cols-3 lg:grid-cols-4 place-content-center place-items-center'>
      {allProducts}
    </div>
  );
};

export default ProductList;
