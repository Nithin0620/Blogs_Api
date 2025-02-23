import { createContext, useState, useCallback } from "react";
import { baseUrl } from "../Baseurl";

// Create the context
export const AppContext = createContext();

// Create provider component
export default function AppContextProvider({ children }) {
   const [posts, setPosts] = useState([]);
   const [loading, setLoading] = useState(false);
   const [page, setPage] = useState(1);
   const [totalPages, setTotalPages] = useState(null);

   // Define the fetchBlogs function
   const fetchBlogs = useCallback(async (pageNum) => {
      setLoading(true);
      try {
         const response = await fetch(`${baseUrl}?page=${pageNum}`);
         if (!response.ok) {
            throw new Error('Network response was not ok');
         }
         const data = await response.json();
         setPosts(data.posts);
         setPage(data.page);
         setTotalPages(data.totalPages);
      } catch (error) {
         console.error("Error fetching blogs:", error);
         setPosts([]);
         setPage(1);
         setTotalPages(null);
      } finally {
         setLoading(false);
      }
   }, []);

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