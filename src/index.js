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

  render() {
    const {items, currentPage, itemsPerPage} = this.state;

    const lastItemIndex = currentPage * itemsPerPage;
    const firstItemIndex = lastItemIndex - itemsPerPage;
    const currentItems = items.slice(firstItemIndex, lastItemIndex);

    console.log(currentItems)

    const renderItems = currentItems.map((item, index) => <div key={index}>{item}</div>);

    return (
        <div>{renderItems}</div>
    );
  }
}

export default Slicer;