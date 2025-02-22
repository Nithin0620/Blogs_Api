import React from 'react'
import {AppContext} from "../context/AppContext";
import {useContext, useEffect} from "react";
import BlogDetails from "./BlogDetails";
import Spinner from "./Spinner";

function Blogs() {
   const{loading,posts}=useContext(AppContext);

   // useEffect(()=>{
   //    // fetchBlogs is not needed here since it's already in App.jsx
   // },[page])

   return (
    <div>
      {
         loading? <Spinner/> :
         (!posts || posts.length === 0) ? "No data Found..." : 
            posts.map((post,index)=>(<BlogDetails key={index} blog={post}/>))
      }
    </div>
  )
}

export default Blogs;
