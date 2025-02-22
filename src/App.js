import "./App.css";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import {useContext,useEffect} from "react";
import {AppContext} from "./context/AppContext";

function App() {
  const {fetchBlogs} = useContext(AppContext);
  // console.log();

  useEffect(()=>{
    fetchBlogs(1);3
  },[fetchBlogs])

  return (
    <div>
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}

export default App;
