import React from 'react';

const MenuItemCard = ({ img, name, type, subType, price, rating }) => {
  return (
    <div>
      <div className='p-6 mb-20 rounded-lg shadow-md lg:mb-0 bg-secondary'>
        <div>
          <img src={img} alt='' className='-mt-20' />
        </div>
        <h5 className='my-3 text-xl font-medium text-center text-gray-100'>
          {name}
        </h5>
        <h6 className='mb-3 font-light text-center text-gray-300'>{type}</h6>
        <h5 className='mb-6 text-xl font-medium text-center text-cta'>
          {subType}
        </h5>
        <div className='flex items-center justify-center gap-4'>
          <div className='p-1 rounded-xl bg-cta'>
            <p className='text-lg font-medium text-gray-900'>Rs. {price}</p>
          </div>
          <div>
            <p className='text-sm text-gray-200'>
              <span className='fa fa-star text-brand-text'></span> {rating}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
