import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = ({ blog }) => {
  const blogImgSrc = `https://achievexsolutions.in/current_work/eatiano${blog.blog_main_image}`;
  return (
    <div className='mb-8 md:mb-14'>
      <img src={blogImgSrc} alt='' className='w-full mb-3 md:mb-6' />
      <h2 className='mb-4 text-xl font-medium text-gray-200 md:mb-6 md:text-2xl'>
        {blog.blog_heading}
      </h2>
      <h6 className='mb-3 text-sm text-gray-400 md:mb-5 md:text-base'>
        {blog.blog_subheading}
      </h6>

      <div className='flex items-center justify-between'>
        <Link
          to={`/news/newsDetails/${blog.blog_id}`}
          className='text-sm transition-all duration-200 max-w-max md:text-base text-brand-text hover:text-border'
        >
          Read More
        </Link>
        <p className='text-xs italic font-light text-gray-300 lg:text-sm'>
          {blog.created_at}
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
