import React from "react";
import ReactPaginate from "react-paginate";

export default function Pagination({
  pageCount,
  handlePageClick,
  currentPage
}) {
  return (
    <ReactPaginate
      className="paginate"
      previousLabel={"← Previous"}
      nextLabel={"Next →"}
      breakLabel={<span className="gap">...</span>}
      pageCount={pageCount}
      onPageChange={handlePageClick}
      forcePage={currentPage}
      containerClassName={"pagination"}
      previousLinkClassName={"previous_page"}
      nextLinkClassName={"next_page"}
      disabledClassName={"disabled"}
      activeClassName={"active"}
    />
  );
}
