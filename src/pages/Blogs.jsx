import React, { useState } from 'react';
import Navbar from '../components/nav';
import Blog from '../components/Blog';

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 2; // Number of blogs per page
  const blogs = [
    {
      title: '6 Laws every UI UX designer should know',
      author: '@exteedesign',
      description: '6 laws every UI/UX Designer should know. Credits to Author: @exteedesign. Brought to you by: @theuxdesigners',
    },
    {
      title: '3 Neat mock-up tools for UX/UI Designers',
      author: 'Memorise.ly',
      description: '3 Neat mock-up tools for UX/UI Designers. Credits to Author: insta #Memorisely',
    },
    // Add more blog entries as needed
  ];

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const handleClick = (blog) => {
    alert(`Title: ${blog.title}\nAuthor: ${blog.author}\nDescription: ${blog.description}`);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(blogs.length / blogsPerPage); i++) {
      pageNumbers.push(i);
    }
    return (
      <div>
        {pageNumbers.map((number) => (
          <span
            key={number}
            onClick={() => handlePageChange(number)}
            style={{ cursor: 'pointer', padding: '5px', margin: '5px', border: number === currentPage ? '1px solid blue' : '1px solid gray' }}
          >
            {number}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      <div>
        {currentBlogs.map((blog, index) => (
          <Blog key={index} {...blog} onClick={() => handleClick(blog)} />
        ))}
      </div>
      {renderPagination()}
    </div>
  );
};

export default Blogs;
