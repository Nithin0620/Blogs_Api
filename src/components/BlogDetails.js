import React from 'react';

function BlogDetails({ blog }) {
  return (
    <article className='bg-white rounded-lg shadow-md p-6 mb-8'>
      <h2 className="font-bold text-xl text-gray-800 mb-3">{blog.title}</h2>
      <div className='text-sm text-gray-600'>
        <p>By <span className='italic'>{blog.author}</span> in <span className='text-blue-600 font-semibold'>{blog.category}</span></p>
        <p className='mt-1'>{blog.date}</p>
      </div>
      <div className='text-gray-700 mt-4 leading-relaxed'>{blog.content}</div>
      <div className='flex gap-x-3 mt-4'>
        {blog.tags.map((tag, index) => (
          <span className="text-blue-600 text-sm font-semibold" key={`tag-${tag}-${index}`}>#{tag}</span>
        ))}
      </div>
    </article>
  );
}

export default BlogDetails;
