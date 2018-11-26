[![npm version](https://badge.fury.io/js/react-slicer.svg)](https://badge.fury.io/js/react-slicer)

# `react-slicer`

React component to separate array of elements on pages with pagination ([demo](https://dimabur.github.io/react-slicer/demo/)).

### Installation

```
yarn add react-slicer
```

```
npm i react-slicer
```

### Usage

```js
import React, { Component } from 'react';
import Slicer from 'react-slicer'
import 'react-slicer/build/react-slicer.css'

class App extends Component {
  render() {
    
    return (
        <Slicer
            initialPage={1}
            itemsPerPage={4}
        >
            <div key={1}>Item 1</div>
            <div key={2}>Item 2</div>
            <div key={3}>Item 3</div>
            <div key={4}>Item 4</div>
            <div key={5}>Item 5</div>
            <div key={6}>Item 6</div>
            <div key={7}>Item 7</div>
            <div key={8}>Item 8</div>
        </Slicer>
    );
  }
}

export default App;
```
### Props

| Name | Type | Default | Description
|:------ |:------ |:------ | :------ |
| customClass | string | "react-slicer" | Custom class for component elements. Previous and next buttons classes don't depend on this prop. You should change their classes in `prevBtn` and `nextBtn` props.|
| initialPage | integer | 1 | Initial page number. |
| itemsPerPage | integer | 4 | Items amount on each page.|
| pagination | boolean | true | Show or not show pagination.|
| nextBtn | string (html) | `<span className={'react-slicer__arrow react-slicer__arrow_next'}>{'>'}</span>` | Next arrow template in page number panel.|
| prevBtn | string (html) | `<span className={'react-slicer__arrow react-slicer__arrow_prev'}>{'<'}</span>` | Previous arrow template in page number panel.|

### Methods

Methods can be called on the component. You should use `ref` attribute to call them:

```js
<Slicer ref={(component) => {this.slicer = component}}>
    ...
</Slicer>

this.slicer.nextPage()
```

| Function | Arguments | Description 
|:------ |:------ |:------ |
| prevPage() | - | Switch to the previous page |
| nextPage() | - | Switch to the next page |
| setPage(index) | `index` (type: number) - page index | Switch to the wanted page index. The `index` argument should be between `1` and number of pages. |


