import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import TagPage from "./pages/TagPage";
import CategoryPage from "./pages/CategoryPage";

export const router = createBrowserRouter([
   {
      path:"/",
      element:<App/>,
      children:[
         {
            path:"/",
            element:<Home/>,

         },
         {
            path:"/blogs/:id",
            element:<BlogPage/>,

         },{
            path:"/category/:category",
            element:<CategoryPage/>,

         },{
            path:"/tags/:tag",
            element:<TagPage/>,

         }
      ]
   }
])