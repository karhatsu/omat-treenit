import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import StartForm from '../src/player/start_form'
import PlayerPage from '../src/player/player_page'
import Tasks from '../src/coach/tasks'

import '../src/app.scss'

const Application = () => {
  return (
    <Switch>
      <Route path="/coach/:coachKey" component={Tasks} />
      <Route path="/players/:accessKey" component={PlayerPage} />
      <Route path="/" component={StartForm} />
    </Switch>
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
