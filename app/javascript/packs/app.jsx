import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import StartForm from '../src/start_form'
import PlayerPage from '../src/player_page'

import '../src/app.scss'

const Application = () => {
  return (
    <div>
      <div className="title">FC Kontu P11 - omatoiminen harjoittelu</div>
      <Switch>
        <Route path="/players/:accessKey" component={PlayerPage} />
        <Route path="/" component={StartForm} />
      </Switch>
    </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BrowserRouter>
      <Route path="/" component={Application} />
    </BrowserRouter>,
    document.getElementById('react-app'),
  )
})
