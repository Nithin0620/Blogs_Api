import React from 'react'
import Blogs from '../components/Blogs'
import Header from '../components/Header'
import Pagination from '../components/Pagination'
import {useLocation, useNavigate} from 'react-router-dom'

const TagPage = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
  return (
    <div className='w-full h-full flex flex-col z-0 mt-[50px] items-center'>
      <Header/>
      <div className='flex flex-col items-baseline  z-0 mt-[50px] -mb-[50px]'>
         <button className='bg-blue-500 w-20 mb-7 text-white  py-2 rounded-md hover:bg-blue-600' onClick={() => navigate(-1)}>Back</button>
         <h1 className='text-3xl font-bold flex justify-center '>Blogs on {tag}</h1>
      </div>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default TagPage
