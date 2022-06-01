import React, { useState, useEffect } from 'react';
import NewsCard from '../ui/NewsCard';
import burger from '../../assests/burger.png';
import bigLegpiece from '../../assests/bigLegpiece.png';
import axios from 'axios';

const News = () => {
  const [news, setNews] = useState([]);
  const [threeNews, setThreeNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const result = await axios.get(
        'https://achievexsolutions.in/etiano/api/all_blogs'
      );

      const resData = result.data.data;
      setNews(resData);
    };

    getNews();

    const slicedNews = news.slice(0, 3);
    setThreeNews(slicedNews);
  }, []);

  const newsSection = threeNews.map((news) => {
    return (
      <div className='grid max-w-6xl gap-10 mx-auto md:grid-cols-3 place-content-center place-items-center'>
        <NewsCard
          img={`https://achievexsolutions.in/current_work/eatiano${news.blog_main_image}`}
          title={news.blog_heading}
          body={news.blog_subheading}
        />
      </div>
    );
  });

  console.log(threeNews);

  return (
    <div className='container relative mt-20 font-rubik md:mt-28 lg:mt-40'>
      <div className='hidden max-w-max lg:block'>
        <img
          src={burger}
          alt=''
          className='absolute -top-32 left-4 w-80 h-80'
        />
      </div>

      <div className='hidden max-w-max lg:block'>
        <img
          src={bigLegpiece}
          alt=''
          className='absolute -bottom-48 right-4 w-72 h-72'
        />
      </div>
      <h6 className='mb-8 text-2xl font-medium text-center text-brand-text md:mb-12 md:text-3xl'>
        News
      </h6>
      <h4 className='mb-8 text-3xl font-medium text-center text-gray-200 md:mb-12 md:text-4xl'>
        Latest Foodieee News
      </h4>

      {newsSection}
    </div>
  );
};

export default News;
