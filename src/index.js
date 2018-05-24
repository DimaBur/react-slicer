import React from 'react'

class Slicer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: ['a','b','c','d','e','f','g','h','i','j','k'],
      currentPage: 1,
      itemsPerPage: 3
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

        <div className={'react-slicer__wrapper'}>{this.renderItems(items, currentPage, itemsPerPage)}</div>
          <ul>{this.renderPagination(items, itemsPerPage)}</ul>
        </div>
    );
  }
}

export default Slicer;