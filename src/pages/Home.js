import React from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'
import myVideo from '../assets/Video.mp4'

function Home() {
  return (
   
   <main className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
   
   <Header />
   <Blogs />
   <Pagination />
 </main>
  )
}

export default Home
