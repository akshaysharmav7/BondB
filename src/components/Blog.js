import React from 'react';
import BlogImage from '../assets/images/Blogs/blog.png'


const Blog = ({ title, author, description, onClick }) => {
  return (
    <div onClick={onClick} style={{ cursor: 'pointer', padding: '10px', borderBottom: '1px solid #ccc' }}>
      <h2>{title}</h2>
      <img src={BlogImage} alt={title} style={{ width: '100%', height: 'auto' }} />
      <p>{description}</p>
      <p><small>By {author}</small></p>
    </div>
  );
};

export default Blog;
