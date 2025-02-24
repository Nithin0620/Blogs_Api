import "./App.css";
// import Header from "./components/Header";
// import Blogs from "./components/Blogs";
// import Pagination from "./components/Pagination";
import {useContext, useEffect} from "react";
import {Outlet} from "react-router-dom";
import {useSearchParams} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {AppContext} from "./context/AppContext";

function App() {
  const {fetchBlogs} = useContext(AppContext);
  const [searchParams,setSearchParams] = useSearchParams();
  const Location = useLocation();


  useEffect(()=>{
    const page=searchParams.get("page") ?? 1;
    
    if(Location.pathname.includes("/category")){
      const category = Location.pathname.split("/").at(-1).replaceAll("-"," ");

      fetchBlogs(Number(page),null,category);
    }
    else if(Location.pathname.includes("/tags")){
      const tags=Location.pathname.split('/').at(-1).replaceAll("-"," ");
      fetchBlogs(Number(page),tags);
    }
    else {
      fetchBlogs(Number(page));
    }
  },[fetchBlogs,Location.pathname,searchParams,]);
  return (
    <Outlet/>
  );
}

export default App;
