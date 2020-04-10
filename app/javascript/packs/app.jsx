import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import StartForm from '../src/player/start_form'
import PlayerPage from '../src/player/player_page'
import CoachIndex from '../src/coach/coach_index'
import PlayersPage from '../src/coach/players_page'
import TasksPage from '../src/coach/tasks_page'

import '../src/app.scss'

const Application = () => {
  return (
    <Switch>
      <Route path="/coach/:coachKey/players" component={PlayersPage} />
      <Route path="/coach/:coachKey/tasks" component={TasksPage} />
      <Route path="/coach/:coachKey" component={CoachIndex} />
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
