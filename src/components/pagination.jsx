import React, { useState, useEffect } from 'react';
import Card from './Card'; // Assuming Card component is in the same directory
import NotFound from './Not_Found';

const Pagination = ({ posts, searchTerm }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;
    const pageNumbersToShow = 3;

    // Calculate the current posts for the current page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Calculate total pages
    const totalPages = Math.ceil(posts.length / postsPerPage);

    // Pagination handler to set the correct page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0);  // Optionally scroll to the top when switching pages
    };

    // Generate the array of page numbers to display
    const getPageNumbers = () => {
        let startPage = Math.max(1, currentPage - Math.floor(pageNumbersToShow / 2));
        let endPage = Math.min(totalPages, startPage + pageNumbersToShow - 1);

        // Adjust the start page if we're near the end
        if (endPage - startPage + 1 < pageNumbersToShow) {
            startPage = Math.max(1, endPage - pageNumbersToShow + 1);
        }

        return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
    };

    if (posts.length === 0 && searchTerm) {
        return <NotFound />;
      }

    return (
        <div className="flex flex-col items-center">
            {/* Display current posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentPosts.map((post) => (
                    <Card key={post.post_id} post={post} />
                ))}
            </div>

            {/* Pagination controls */}
            <div className="mt-6 flex justify-center items-center space-x-2">
                {/* First page button */}
                <button
                    onClick={() => paginate(1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-2 text-sm font-medium ${
                        currentPage === 1 ? 'bg-gray-100 text-gray-400' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    } rounded`}
                >
                    First
                </button>

                {/* Previous page button */}
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-2 text-sm font-medium ${
                        currentPage === 1 ? 'bg-gray-100 text-gray-400' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    } rounded`}
                >
                    Prev
                </button>

                {/* Page number buttons */}
                {getPageNumbers().map((number) => (
                    <button
                        key={number}
                        onClick={() => paginate(number)}
                        className={`px-3 py-2 text-sm font-medium ${
                            currentPage === number
                                ? 'bg-blue-700 text-white'
                                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                        } rounded`}
                    >
                        {number}
                    </button>
                ))}

                {/* Next page button */}
                <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-2 text-sm font-medium ${
                        currentPage === totalPages ? 'bg-gray-100 text-gray-400' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    } rounded`}
                >
                    Next
                </button>

                {/* Last page button */}
                <button
                    onClick={() => paginate(totalPages)}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-2 text-sm font-medium ${
                        currentPage === totalPages ? 'bg-gray-100 text-gray-400' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    } rounded`}
                >
                    Last
                </button>
            </div>
        </div>
    );
};

export default Pagination;