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
    fetchBlogs(1);
  },[fetchBlogs])

  return (
    <main className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
      <Header />
      <Blogs />
      <Pagination />
    </main>
  );
}

export default App;
