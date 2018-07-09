import React from 'react'
import classNames from 'classnames'
import './scss/style.scss'

class Slicer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
      currentPage: props.initialPage,
      itemsPerPage: props.itemsPerPage
    };
    this.numberOfPages = Math.ceil(props.items.length / props.itemsPerPage)
  }

  handlePageNumberClick(e) {
    this.setState({
      currentPage: Number(e.target.id)
    })
  }

  renderItems() {
    const {items, currentPage, itemsPerPage} = this.state;
    const lastItemIndex = currentPage * itemsPerPage,
        firstItemIndex = lastItemIndex - itemsPerPage,
        currentItems = items.slice(firstItemIndex, lastItemIndex);

    return currentItems.map((item) => item);
  }

  renderPagination() {
    let pagination = [];
    for (let i = 1; i <= this.numberOfPages; i++) {
      pagination.push(i);
    }
    return pagination.map(number =>
          <li
              className={classNames('react-slicer__pagination-item', {
                'react-slicer__pagination-item_active': number === this.state.currentPage
              })}
              key={number}
              id={number}
              onClick={(e) => this.handlePageNumberClick(e)}
          >
            {number}
          </li>
      );
  }

  handleClickArrow(direction) {
    const {currentPage} = this.state;
    if (direction === 'prev' && currentPage > 1) {
      this.setState({
        currentPage: currentPage - 1
      });
    } else if (direction === 'next' && currentPage < this.numberOfPages) {
      this.setState({
        currentPage: currentPage + 1
      });
    }
  }

  render() {
    const {prevBtn, nextBtn} = this.props;

    return (
        <div className={'react-slicer'}>

        <div className={'react-slicer__view'}>{this.renderItems()}</div>
          <ul className={'react-slicer__pagination'}>
            <li className={'react-slicer__pagination-item react-slicer__pagination-item_prev'} onClick={() => this.handleClickArrow('prev')}>{prevBtn}</li>
            {this.renderPagination()}
            <li className={'react-slicer__pagination-item react-slicer__pagination-item_next'} onClick={() => this.handleClickArrow('next')}>{nextBtn}</li>
          </ul>
        </div>
    );
  }
}

Slicer.defaultProps = {
  initialPage: 1,
  itemsPerPage: 4,
  prevBtn: <span className={'react-slicer__arrow react-slicer__arrow_prev'}>{'<'}</span>,
  nextBtn: <span className={'react-slicer__arrow react-slicer__arrow_next'}>{'>'}</span>
};

export default Slicer;