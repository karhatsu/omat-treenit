import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import HomePage from '../src/home_page'
import PlayerPage from '../src/player/player_page'
import CoachIndexPage from '../src/coach/coach_index_page'
import PlayersPage from '../src/coach/players_page'
import TasksPage from '../src/coach/tasks_page'

import '../src/app.scss'

const Application = () => {
  return (
    <Switch>
      <Route path="/coach/:coachKey/players" component={PlayersPage} />
      <Route path="/coach/:coachKey/tasks" component={TasksPage} />
      <Route path="/coach/:coachKey" component={CoachIndexPage} />
      <Route path="/players/:accessKey" component={PlayerPage} />
      <Route path="/" component={HomePage} />
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
