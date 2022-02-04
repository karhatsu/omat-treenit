import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import HomePage from './home_page'
import PlayerPage from './player/player_page'
import CoachIndexPage from './coach/coach_index_page'
import PlayersPage from './coach/players_page'
import TasksPage from './coach/tasks_page'

import './app.scss'

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
