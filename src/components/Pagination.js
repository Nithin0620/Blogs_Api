import React from 'react'
import {AppContext} from "../context/AppContext";
import {useContext} from "react";

function Pagination() {
   const{page,totalPages,setPage}=useContext(AppContext);
   return (
    <div>
     <div>
         <button disabled={page<=1} onClick={()=>(setPage(page-1))}>Previous</button>
         <button disabled={page>=totalPages} onClick={()=>(setPage(page+1))}>Next</button>
     </div>
     <div>
      <p>page {page} of {totalPages}</p>
     </div>
    </div>
   )
}

export default Pagination;
