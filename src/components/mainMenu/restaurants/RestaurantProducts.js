import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ProductList from './ProductList';

const RestaurantProducts = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [searchProducts, setSearchProducts] = useState([]);
  const [sortingValue, setSortingValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(
        `https://achievexsolutions.in/current_work/eatiano/api/restaurant_product/${id}`
      );

      const resData = res.data;
      console.log(resData.data);
      setProducts(resData.data);
    };

    getProducts();
  }, []);

  console.log(products);

  const sortHandler = (e) => {
    setSortingValue(e.target.value);
  };

  const sortedProducts = products.sort((a, b) => {
    if (sortingValue === 'highLowRating') {
      return b.product_rating - a.product_rating;
    } else if (sortingValue === 'lowHighPrice') {
      return a.product_selling_price - b.product_selling_price;
    } else if (sortingValue === 'highLowPrice') {
      return b.product_selling_price - a.product_selling_price;
    } else {
      return products;
    }
  });

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
    if (searchTerm !== '') {
      const filteredProducts = sortedProducts.filter((product) => {
        return Object.values(product)
          .join(' ')
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchProducts(filteredProducts);
    } else {
      setSearchProducts(sortedProducts);
    }
  };

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    setSearchTerm('');
  };

  return (
    <div className='container mt-28 md:mt-32 lg:mt-48 font-rubik'>
      <h1 className='mb-12 text-xl font-semibold text-center text-gray-200 md:text-2xl lg:text-3xl md:mb-16 lg:mb-20'>
        Give your Taste Buds A Treat!
      </h1>

      <div className='grid gap-6 mb-20 md:grid-cols-2 lg:grid-cols-4 md:place-content-center md:place-items-center md:mb-24 lg:mb-32'>
        <form className='w-full lg:col-span-3' onSubmit={searchSubmitHandler}>
          <input
            type='text'
            placeholder='Search Items by name, category & cuisine'
            className='w-full px-4 py-2 text-gray-200 border-2 rounded-md border-secondary lg:text-lg bg-primary focus:ring-2 ring-offset-2 ring-offset-secondary'
            value={searchTerm}
            onChange={searchHandler}
          />
        </form>

        <select
          onChange={sortHandler}
          className='w-full px-4 py-2 text-gray-200 border-2 rounded-md bg-secondary border-secondary lg:text-lg lg:col-span-1'
        >
          <option defaultValue='' selected disabled hidden>
            Sort Items...
          </option>
          <option
            value='highLowRating'
            className='py-8 text-base text-gray-300'
          >
            Highest To Lowest (Rating)
          </option>
          <option value='lowHighPrice' className='mb-8 text-base text-gray-300'>
            Lowest To Highest (Price)
          </option>
          <option value='highLowPrice' className='mb-8 text-base text-gray-300'>
            Highest To Lowest (Price)
          </option>
        </select>
      </div>

      <ProductList
        products={searchTerm.length < 1 ? sortedProducts : searchProducts}
        restaurant_id={id}
      />
    </div>
  );
};

export default RestaurantProducts;
