import React from "react";
import { NavLink } from "react-router-dom";

function BlogDetails({ post }) {
  if (!post) {
    return null;
  }

  return (
    <article className="bg-white rounded-lg shadow-md p-6 mb-8">
      <NavLink to={`/blogs/${post.id}`}> 
        <h2 className="font-bold text-xl text-gray-800 mb-3">{post.title}</h2>
      </NavLink>
      <div className="text-sm text-gray-600">
        <p>
          By <span className="italic">{post.author}</span> in{" "}
          <NavLink to={`/category/${post.category.replaceAll(" ","-")}`}>
            <span className="text-blue-600 font-semibold">{post.category}</span>
          </NavLink>
        </p>
        <p className="mt-1">{post.date}</p>
      </div>
      <div className="text-gray-700 mt-4 leading-relaxed">{post.content}</div>
      <div className="flex gap-x-3 mt-4">
        {post.tags?.map((tag, index) => (
          <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
            <span className="text-blue-600 text-sm font-semibold">
              #{tag}
            </span>
          </NavLink>
        ))}
      </div>
    </article>
  );
}

export default BlogDetails;
