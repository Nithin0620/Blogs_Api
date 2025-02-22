import React from 'react'

function BlogDetails(props) {
   const blog=props.blog;
   return (
    <div>
      <p>{blog.title}</p>
      <p>By {blog.author} on {blog.catagory}</p>
      <p> Posted on {blog.date}</p>
      <p>{blog.content}</p>
      <p>
         {
            blog.tags.map((tag,index)=>(
               <span key={index}>#{tag}</span>
            ))
         }
      </p>
    </div>
   )
}

export default BlogDetails;
