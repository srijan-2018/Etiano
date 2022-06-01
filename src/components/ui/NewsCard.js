import React from 'react';

const NewsCard = ({ img, title, body }) => {
  return (
    <div>
      <div className='mx-auto max-w-max'>
        <img src={img} alt='' className='mb-4 rounded-lg md:mb-6' />
      </div>
      <h4 className='mb-4 text-xl font-medium text-gray-200 md:mb-6 md:text-2xl'>
        {title}
      </h4>
      <p className='mb-4 text-sm text-gray-400 md:mb-6 md:text-base'>{body}</p>
    </div>
  );
};

export default NewsCard;
