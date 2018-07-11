import React from 'react'
import renderer from 'react-test-renderer';
import enzyme, { shallow } from 'enzyme'

import Slicer from './index'

import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });

test('Render without crashing', () => {
  const component = renderer.create(
    <Slicer>
      <div key={1}>Item 1</div>
      <div key={2}>Item 2</div>
      <div key={3}>Item 3</div>
      <div key={4}>Item 4</div>
      <div key={5}>Item 5</div>
      <div key={6}>Item 6</div>
      <div key={7}>Item 7</div>
      <div key={8}>Item 8</div>
    </Slicer>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Controls exists', () => {
    const component = shallow(<Slicer>
        <div key={1}>Item 1</div>
        <div key={2}>Item 2</div>
        <div key={3}>Item 3</div>
        <div key={4}>Item 4</div>
        <div key={5}>Item 5</div>
        <div key={6}>Item 6</div>
        <div key={7}>Item 7</div>
        <div key={8}>Item 8</div>
    </Slicer>)

    expect(component.find('.react-slicer__pagination')).toBeTruthy()

})
