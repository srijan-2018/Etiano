import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import MenuItemCard from './MenuItemCard';
import menuItem1 from '../../../assests/menuItem1.png';
import menuItem2 from '../../../assests/menuItem2.png';
import menuItem3 from '../../../assests/menuItem3.png';

const MenuItems = () => {
  // const [selectedTab, setSelectedTab] = useState({
  //   breakfast: true,
  //   lunch: false,
  //   dinner: false,
  //   dessert: false,
  //   snacks: false,
  //   drinks: false,
  // });

  return (
    <Tabs>
      <div className='grid gap-8 lg:grid-cols-6 place-content-center place-items-center'>
        <div className='lg:col-span-1 mt-28'>
          <TabList className='flex flex-wrap justify-start gap-6 lg:flex-col'>
            <Tab className='text-lg font-medium text-gray-300 transition-all duration-200 border-gray-400 cursor-pointer md:text-xl hover:text-brand-text'>
              Breakfast
            </Tab>
            <Tab className='mx-8 text-lg font-medium text-gray-300 transition-all duration-200 border-gray-400 cursor-pointer lg:mx-0 md:text-xl hover:text-brand-text'>
              Lunch
            </Tab>
            <Tab className='text-lg font-medium text-gray-300 transition-all duration-200 border-gray-400 cursor-pointer md:text-xl hover:text-brand-text'>
              Dinner
            </Tab>
            {/* <Tab className='text-lg font-medium text-gray-300 transition-all duration-200 border-gray-400 cursor-pointer md:text-xl hover:text-brand-text'>
              Desserts
            </Tab>
            <Tab className='mx-8 text-lg font-medium text-gray-300 transition-all duration-200 border-gray-400 cursor-pointer lg:mx-0 md:text-xl hover:text-brand-text'>
              Snacks
            </Tab>
            <Tab className='text-lg font-medium text-gray-300 transition-all duration-200 border-gray-400 cursor-pointer md:text-xl hover:text-brand-text'>
              Drinks
            </Tab> */}
          </TabList>
        </div>

        <div className='lg:col-span-5'>
          <TabPanel>
            <div className='grid gap-4 mt-28 md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center'>
              <MenuItemCard
                img={menuItem1}
                name='Chicken Masala'
                type='Continental'
                subType='BBQ'
                price='455'
                rating='4.3'
              />
              <MenuItemCard
                img={menuItem2}
                name='Western Sunrise'
                type='Continental'
                subType='BBQ'
                price='455'
                rating='4.3'
              />
              <MenuItemCard
                img={menuItem3}
                name='Sandwich Soup'
                type='Continental'
                subType='BBQ'
                price='455'
                rating='4.3'
              />
            </div>
          </TabPanel>

          <TabPanel>
            <div className='grid gap-4 mt-28 md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center'>
              {/* <MenuItemCard
              img={menuItem1}
              name='Chicken Masala'
              type='Continental'
              subType='BBQ'
              price='455'
              rating='4.3'
            /> */}
              <MenuItemCard
                img={menuItem2}
                name='Western Sunrise'
                type='Continental'
                subType='BBQ'
                price='455'
                rating='4.3'
              />
              <MenuItemCard
                img={menuItem3}
                name='Sandwich Soup'
                type='Continental'
                subType='BBQ'
                price='455'
                rating='4.3'
              />
            </div>
          </TabPanel>

          <TabPanel>
            <div className='grid gap-4 mt-28 md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center'>
              <MenuItemCard
                img={menuItem1}
                name='Chicken Masala'
                type='Continental'
                subType='BBQ'
                price='455'
                rating='4.3'
              />
              {/* <MenuItemCard
                img={menuItem2}
                name='Western Sunrise'
                type='Continental'
                subType='BBQ'
                price='455'
                rating='4.3'
              />
              <MenuItemCard
                img={menuItem3}
                name='Sandwich Soup'
                type='Continental'
                subType='BBQ'
                price='455'
                rating='4.3'
              /> */}
            </div>
          </TabPanel>
        </div>
      </div>
    </Tabs>
  );
};

export default MenuItems;
