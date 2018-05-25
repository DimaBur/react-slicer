# `react-slicer`

React component to separate array of elements on pages with pagination.

### Installation

```
yarn add react-slicer
```

```
npm i react-slicer --save
```

### Usage

```js
import React, { Component } from 'react';
import Slicer from 'react-slicer'
import 'react-slicer/build/react-slicer.css'

class App extends Component {
  render() {
    const items = ['a','b','c','d','e','f','g','h','i','j','k'];
    
    return (
      <div>
        <Slicer
            items={items}
            initialPage={1}
            itemsPerPage={4}
        />
      </div>
    );
  }
}

export default App;
```

