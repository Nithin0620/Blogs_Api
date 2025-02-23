import React from "react";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import BlogDetails from "./BlogDetails";
import Spinner from "./Spinner";
import myVideo from "../assets/Video.mp4"


function Blogs() {
  const { loading, posts } = useContext(AppContext);

  return (
    <div className='w-11/12 max-w-[670px] min-h-screen py-8 flex flex-col gap-y-7 mt-[66px] mb-[70px]'>
      <video autoPlay loop muted className="fixed top-0 left-0 w-full h-full object-cover -z-1">
          <source src={myVideo} type="video/mp4" />
                
      </video>
      <section className="w-full relative z-10">
        {loading ? (
          <div className="flex justify-center items-center h-[50vh]">
            <Spinner />
          </div>
        ) : !posts || posts.length === 0 ? (
          <p className="text-center font-bold text-3xl">No Blogs Found !</p>
        ) : (
          posts.map((post) => (
            <BlogDetails key={post.id || post._id} blog={post} />
          ))
        )}
      </section>
    </div>
  );
}

export default Blogs;
