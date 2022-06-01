import React from 'react';

const Card = ({ icon, title, body }) => {
  return (
    <div className='p-8 rounded-md shadow-md bg-secondary'>
      <div className='mx-auto max-w-max'>
        <img src={icon} alt='' />
      </div>

      <h6 className='my-6 text-lg font-medium text-center text-gray-100 md:text-xl'>
        {title}
      </h6>
      <p className='leading-relaxed text-center text-gray-400'>{body}</p>
    </div>
  );
};

export default Card;
