import React from 'react'
import classNames from 'classnames'

const Pagination = (props) => {
  const {numberOfPages, currentPage, setPage, prevPage, nextPage, prevBtn, nextBtn} = props;

  function renderPagination () {
    const pagination = []
    for (let i = 1; i <= numberOfPages; i++) {
      pagination.push(i)
    }
    return pagination.map(number => (
      <li
        className={classNames('react-slicer__pagination-item', {
          'react-slicer__pagination-item_active': number === currentPage
        })}
        key={number}
        id={`num-${number}`}
        onClick={() => setPage(number)}
      >
        {number}
      </li>
    ))
  }

  return (
    <ul className="react-slicer__pagination">
      <li className="react-slicer__pagination-item react-slicer__pagination-item_prev" onClick={prevPage}>
        {prevBtn}
      </li>
      {renderPagination()}
      <li className="react-slicer__pagination-item react-slicer__pagination-item_next" onClick={nextPage}>
        {nextBtn}
      </li>
    </ul>
  )
}

export default Pagination
