import React, { FC } from 'react';

interface PaginationProps {
    items?: number; // Making items optional
}

const Pagination: FC<PaginationProps> = ({ items = 5 }) => {
    // Generate an array of length equal to the number of items
    const pages = Array.from({ length: items }, (_, index) => index + 1);

    return (
        <nav aria-label="Page navigation example" className="mt-4 flex justify-center">
            <ul className="inline-flex -space-x-px text-base h-10">
                <li>
                    <a href="#"
                       className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                </li>
                {/* Render each page dynamically */}
                {pages.map((page) => (
                    <li key={page}>
                        <a href="#"
                           className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            {page}
                        </a>
                    </li>
                ))}
                <li>
                    <a href="#"
                       className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
