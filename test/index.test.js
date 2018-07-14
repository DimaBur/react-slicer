import React from 'react'
import renderer from 'react-test-renderer'
import enzyme, {shallow} from 'enzyme'

import Slicer from '../src/index'

import Adapter from 'enzyme-adapter-react-16'

enzyme.configure({adapter: new Adapter()})

const defaultComponent = <Slicer
  itemsPerPage={3}
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

test('Render without crashing', () => {
  const component = renderer.create(defaultComponent)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Pages changing', () => {
  const component = shallow(defaultComponent)
  const fn = () => { throw new Error('The index must be an integer greater than 0 and less than or equal to the number of pages.') }
  expect(component.html()).toMatchSnapshot()
  component.instance().nextPage()
  expect(component.html()).toMatchSnapshot()
  component.instance().nextPage()
  expect(component.html()).toMatchSnapshot()
  component.instance().prevPage()
  expect(component.html()).toMatchSnapshot()
})

test('Setting page', () => {
  const component = shallow(defaultComponent)
  const fn = () => { throw new Error('The index must be an integer greater than 0 and less than or equal to the number of pages.') }
  component.instance().setPage(2)
  expect(component.html()).toMatchSnapshot()
  component.instance().setPage(0)
  expect(fn).toThrow('The index must be an integer greater than 0 and less than or equal to the number of pages.')
  component.instance().setPage(3)
  expect(component.html()).toMatchSnapshot()
  component.instance().setPage(11)
  expect(fn).toThrow('The index must be an integer greater than 0 and less than or equal to the number of pages.')
})

test('Items per page amount', () => {
  const component = shallow(defaultComponent)

  component.setState({
    itemsPerPage: 1
  })

  expect(component.instance().renderItems()).toHaveLength(1)

  component.setState({
    itemsPerPage: 4
  })

  expect(component.instance().renderItems()).toHaveLength(4)

  component.setState({
    itemsPerPage: 10
  })

  expect(component.instance().renderItems()).toHaveLength(8)
})
