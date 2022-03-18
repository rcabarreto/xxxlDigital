import React from 'react';

const Pagination: React.FC<{
  currentPage: number;
  pageCount: number;
  changePage: React.Dispatch<React.SetStateAction<number>>;
}> = ({ currentPage, pageCount, changePage }) => {
  const optionArray = Array.from(Array(pageCount).keys());

  return (
    <nav aria-label="Product navigation">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <button
            className="page-link"
            aria-label="Previous"
            onClick={() => changePage(--currentPage)}
            disabled={currentPage === 0}
          >
            Previous
          </button>
        </li>

        {optionArray.map((pageNum) => (
          <li key={`page-${pageNum}`} className={`page-item ${pageNum === currentPage && 'active'}`}>
            <button className="page-link" onClick={() => changePage(pageNum)}>
              {pageNum + 1}
            </button>
          </li>
        ))}

        <li className="page-item">
          <button
            className="page-link"
            aria-label="Next"
            onClick={() => changePage(++currentPage)}
            disabled={currentPage === pageCount - 1}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
