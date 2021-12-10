import React from "react";

const Pagination = (props) => {
  let pages = Math.ceil(props.count / props.pageSize);
  let pagesArray = [];
  for (let i = 1; i <= pages; i++) {
    pagesArray.push(i);
  }
  return (
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        {pagesArray.map((page) => (
          <li
            onClick={() => props.onActivePageChange(page)}
            class={page == props.activePage ? "page-item active" : "page-item"}
          >
            <a class="page-link" href="#">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
