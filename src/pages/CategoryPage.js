import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'
import {useLocation} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

const CategoryPage = () => {
   const Navigate = useNavigate();
   const Location = useLocation();
   const category=Location.pathname.split("/").at(-1).replaceAll("-"," ");
  return (
    <div className='w-full h-full flex flex-col z-0 mt-[50px] items-center'>
      <Header/>
      <div className='flex flex-col items-baseline  z-1 mt-[50px] -mb-[50px]'>
         <button className='bg-blue-500 w-20 mb-7 text-white  py-2 rounded-md hover:bg-blue-600' onClick={()=>Navigate(-1)}>Back</button>
         <h1 className='text-3xl font-bold flex justify-center '>BLogs On {category}</h1>
      </div>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default CategoryPage
