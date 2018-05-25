import React from 'react'
import './scss/style.scss'

class Slicer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
      currentPage: props.initialPage,
      itemsPerPage: props.itemsPerPage
    }
  }

  handlePageNumberClick(e) {
    this.setState({
      currentPage: Number(e.target.id)
    })
  }

  renderItems(items, currentPage, itemsPerPage) {
    const lastItemIndex = currentPage * itemsPerPage,
        firstItemIndex = lastItemIndex - itemsPerPage,
        currentItems = items.slice(firstItemIndex, lastItemIndex);

    return currentItems.map((item, index) => <div key={index}>{item}</div>);
  }

  renderPagination(items, itemsPerPage) {
    let pagination = [];
    for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
      pagination.push(i);
    }
    return pagination.map(number =>
          <li
              className={'react-slicer__page-num'}
              key={number}
              id={number}
              onClick={(e) => this.handlePageNumberClick(e)}
          >
            {number}
          </li>
      );
  }

  render() {
    const {items, currentPage, itemsPerPage} = this.state;

    return (
        <div className={'react-slicer'}>

        <div className={'react-slicer__view'}>{this.renderItems(items, currentPage, itemsPerPage)}</div>
          <ul className={'react-slicer__pagination'}>{this.renderPagination(items, itemsPerPage)}</ul>
        </div>
    );
  }
}

export default Slicer;