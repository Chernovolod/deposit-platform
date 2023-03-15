import React from 'react'
import { shallow } from 'enzyme/build'
import App from './App'
import DashboardView from './views/dashboard/DashboardView.js'

it('mounts App without crashing', () => {
  const wrapper = shallow(<App />)
  wrapper.unmount()
})

it('mounts Dashboard without crashing', () => {
  const wrapper = shallow(<DashboardView />)
  wrapper.unmount()
})
