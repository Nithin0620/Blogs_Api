import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { blogUrl } from '../Baseurl';
import Header from '../components/Header';
import myVideo from '../assets/Video.mp4'
import BlogDetails from '../components/BlogDetails';

function BlogPage() {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${blogUrl}get-blog?blogId=${id}`);
        const data = await response.json();
        
        if (data.blog) {
          setBlog(data.blog);
          setRelatedBlogs(data.relatedBlogs || []);
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBlogData();
    }
  }, [id]);

  return (
    <div className="w-full h-full flex flex-col mt-[50px] items-center">
      <video autoPlay loop muted className="fixed top-0 left-0 w-full h-full object-cover -z-1">
        <source src={myVideo} type="video/mp4" />        
      </video>
      
      <Header/>
      <div className="w-11/12 max-w-[670px] z-0 py-8">
        <button 
          onClick={() => navigate(-1)}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Back
        </button>
        <h1 className="text-3xl font-bold flex justify-center mb-6">Blog Details</h1>
        
        {loading ? (
          <div className="text-center">
            <p>Loading...</p>
          </div>
        ) : blog ? (
          <div>
            <BlogDetails post={blog} />
            {relatedBlogs.length > 0 && (
              <>
                <h2 className="text-2xl font-bold mt-8 mb-4">Related Blogs</h2>
                {relatedBlogs.map((post) => (
                  <BlogDetails key={post.id} post={post} />
                ))}
              </>
            )}
          </div>
        ) : (
          <div className="text-center">
            <p>No Blog Found</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogPage;
