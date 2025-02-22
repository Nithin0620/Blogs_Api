import { createContext, useState } from "react";
import {baseUrl} from "../Baseurl";

// Create the context
export const AppContext = createContext();

// Create provider component
export default function AppContextProvider({ children }) {
   const [posts, setPosts] = useState([]);
   const [loading, setLoading] = useState(false);
   const [page, setPage] = useState(1);
   const [totalPages, setTotalPages] = useState(null);

   // Define the fetchBlogs function
   const fetchBlogs = async (page) => {
      setLoading(true);
      try {
         const response = await fetch(`${baseUrl}?page=${page}`);
         const data = await response.json();
         console.log(data);
         setPosts(data.posts);
         setPage(data.page);
         setTotalPages(data.totalPages);
      }
      catch(e){
         console.log("Error fetching blogs");
         setPosts([]);
         setPage(1);
         setTotalPages(null);
      }
      finally{    
         setLoading(false);
      }
   }

   const value = {
      posts,
      setPosts,
      loading,
      setLoading,
      page,
      setPage,
      totalPages,
      setTotalPages,
      fetchBlogs
   }

   return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}