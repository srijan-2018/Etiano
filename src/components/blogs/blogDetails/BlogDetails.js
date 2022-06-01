import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Details from './Details';

const BlogDetails = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const { id } = useParams();

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

  const newBlog = allBlogs.filter((blog) => blog.blog_id === +id);
  console.log(newBlog);

  const newBlogDetails = newBlog.map((blogDetails) => {
    return <Details key={blogDetails.blog_id} details={blogDetails} />;
  });

  return (
    <div className='container mt-32 lg:mt-48 font-rubik'>
      <h1>{newBlogDetails}</h1>
    </div>
  );
};

export default BlogDetails;
