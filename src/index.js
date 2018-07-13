import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './scss/style.scss'

class Slicer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: props.children,
      currentPage: props.initialPage,
      itemsPerPage: props.itemsPerPage
    }
    this.numberOfPages = Math.ceil(props.children.length / props.itemsPerPage)
    this.prevPage = this.prevPage.bind(this)
    this.nextPage = this.nextPage.bind(this)
  }

  shouldComponentUpdate (nextProps, nextState) {
    return this.state.currentPage !== nextState.currentPage
  }

  setPage (index) {
    if (Number.isInteger(index) && index > 0 && index <= this.numberOfPages) {
      this.setState({
        currentPage: Number(index)
      })
    } else {
      console.error(new Error('The index must be an integer greater than 0 and less than or equal to the number of pages.'))
    }
  }

  renderItems () {
    const { items, currentPage, itemsPerPage } = this.state
    const lastItemIndex = currentPage * itemsPerPage
    const firstItemIndex = currentPage * itemsPerPage - itemsPerPage
    const currentItems = items.slice(firstItemIndex, lastItemIndex)

    return currentItems.map(item => item)
  }

  renderPagination () {
    const pagination = []
    for (let i = 1; i <= this.numberOfPages; i++) {
      pagination.push(i)
    }
    return pagination.map(number => (
      <li
        className={classNames('react-slicer__pagination-item', {
          'react-slicer__pagination-item_active': number === this.state.currentPage
        })}
        key={number}
        id={`num-${number}`}
        onClick={() => this.setPage(number)}
      >
        {number}
      </li>
    ))
  }

  prevPage () {
    const { currentPage } = this.state
    if (currentPage > 1) {
      this.setState({
        currentPage: currentPage - 1
      })
    }
  }

  nextPage () {
    const { currentPage } = this.state
    if (currentPage < this.numberOfPages) {
      this.setState({
        currentPage: currentPage + 1
      })
    }
  }

  render () {
    const { prevBtn, nextBtn } = this.props

    return (
      <div className="react-slicer">

        <div className="react-slicer__view">
          {this.renderItems()}
        </div>
        <ul className="react-slicer__pagination">
          <li className="react-slicer__pagination-item react-slicer__pagination-item_prev" onClick={this.prevPage}>
            {prevBtn}
          </li>
          {this.renderPagination()}
          <li className="react-slicer__pagination-item react-slicer__pagination-item_next" onClick={this.nextPage}>
            {nextBtn}
          </li>
        </ul>
      </div>
    )
  }
}

Slicer.defaultProps = {
  initialPage: 1,
  itemsPerPage: 4,
  prevBtn: <span className="react-slicer__arrow react-slicer__arrow_prev">
    {'<'}
  </span>,
  nextBtn: <span className="react-slicer__arrow react-slicer__arrow_next">
    {'>'}
  </span>
}

Slicer.propTypes = {
  initialPage: PropTypes.number,
  itemsPerPage: PropTypes.number,
  prevBtn: PropTypes.object,
  nextBtn: PropTypes.object,
  children: PropTypes.array
}

export default Slicer
