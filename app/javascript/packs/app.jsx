import React from 'react'
import ReactDOM from 'react-dom'
import StartForm from '../src/start_form'

import '../src/app.scss'

const Application = props => {
  return (
    <div>
      <div className="title">FC Kontu P11 - omatoiminen harjoittelu</div>
      <StartForm />
    </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Application />,
    document.getElementById('react-app'),
  )
})
