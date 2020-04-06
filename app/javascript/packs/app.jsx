import React from 'react'
import ReactDOM from 'react-dom'

const Application = props => (
  <div>Hello</div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Application />,
    document.getElementById('react-app'),
  )
})
