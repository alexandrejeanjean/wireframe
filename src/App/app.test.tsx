import React from 'react'
import { shallow } from 'enzyme'
import App from './index'

describe('Render App', () => {
  it('should render correctly', () => {
    const Component = shallow(<App />)
    expect(Component).toMatchSnapshot()
  })
})
