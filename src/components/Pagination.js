import React from "react";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

function Pagination() {
  const { page, totalPages, setPage, fetchBlogs } = useContext(AppContext);

  const handlePageChange = (newPage) => {
    setPage(newPage);
    fetchBlogs(newPage);
  };

  return (
    <footer className="fixed flex justify-between items-center bottom-0 inset-x-0 bg-white py-3 shadow-md z-10">
      <div className="w-11/12 max-w-2xl mx-auto flex justify-between items-center">
        <div className="flex gap-x-4">
          {page > 1 && (
            <button
              onClick={() => handlePageChange(page - 1)}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              Previous
            </button>
          )}
          {page < totalPages && (
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
              onClick={() => handlePageChange(page + 1)}
            >
              Next
            </button>
          )}
        </div>
        <p className="text-sm font-semibold text-gray-600">
          Page {page} of {totalPages}
        </p>
      </div>
    </footer>
  );
}

export default Pagination;
