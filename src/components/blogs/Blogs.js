import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogList from './allBlogs/BlogList';

const Blogs = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [sortValue, setSortValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getAllBlogs = async () => {
      const result = await axios.get(
        'https://achievexsolutions.in/etiano/api/all_blogs'
      );
      const allBlogsData = await result.data.data;
      console.log(allBlogsData);
      setAllBlogs(allBlogsData);
    };

    getAllBlogs();
  }, []);

  const sortHandler = (e) => {
    setSortValue(e.target.value);
  };

  const sortedArticles = allBlogs.sort((a, b) => {
    if (sortValue === 'oldestNewest') {
      return a.blog_id - b.blog_id;
    } else if (sortValue === 'newestOldest') {
      return b.blog_id - a.blog_id;
    } else {
      return allBlogs;
    }
  });

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
    if (searchTerm !== '') {
      const filteredProducts = sortedArticles.filter((article) => {
        return Object.values(article)
          .join(' ')
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setFilteredBlogs(filteredProducts);
    } else {
      setFilteredBlogs(sortedArticles);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setSearchTerm('');
  };

  return (
    <div className='container mt-16 md:mt-20 lg:mt-24 font-rubik'>
      <div className='grid gap-6 mb-20 md:grid-cols-2 lg:grid-cols-3 md:place-content-center md:place-items-center md:mb-24 lg:mb-32'>
        <form className='w-full lg:col-span-2' onSubmit={submitHandler}>
          <input
            type='text'
            placeholder='Search Blogs by Heading or Subheading'
            className='w-full px-4 py-2 text-gray-200 border-2 rounded-md border-secondary lg:text-lg bg-primary focus:ring-2 ring-offset-2 ring-offset-secondary'
            value={searchTerm}
            onChange={searchHandler}
          />
        </form>

        <select
          className='w-full px-4 py-2 text-gray-200 border-2 rounded-md bg-secondary border-secondary lg:text-lg lg:col-span-1'
          onChange={sortHandler}
        >
          <option defaultValue='' selected disabled hidden>
            Sort Articles...
          </option>
          <option value='oldestNewest' className='py-8 text-base text-gray-300'>
            Oldest To Newest
          </option>
          <option value='newestOldest' className='mb-8 text-base text-gray-300'>
            Newest To Oldest
          </option>
        </select>
      </div>

      <BlogList
        allBlogs={searchTerm.length < 1 ? sortedArticles : filteredBlogs}
      />
    </div>
  );
};

export default Blogs;
