import React from 'react'
import App from './App.jsx'

import renderer from 'react-test-renderer'

it('renders without any errors', () => {
  const component = renderer.create(<App />)
})
