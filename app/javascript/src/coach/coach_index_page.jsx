import React, { useState } from 'react'
import { format } from "date-fns"
import { fetchCoachSummary } from './api'
import DataPage from '../data_page'
import { likingEmoji } from '../emojis'

function CoachIndexPage({ match, history }) {
  const { params: { coachKey } } = match
  const [data, setData] = useState(undefined)

  const fetch = callback => fetchCoachSummary(coachKey, callback)

  const content = () => {
    return (
      <>
        <div className="title-2">Pelaajat</div>
        <div className="box">
          <div className="box__title">Yhteensä: {data.players.length}</div>
          {data.players.map(player => {
            return <div key={player.id}>{player.name} ({player.accomplishmentCount} / {data.taskCount})</div>
          })}
          <div className="form__buttons">
            <div className="button" onClick={() => history.push(`/coach/${coachKey}/players`)}>Pelaajat</div>
          </div>
        </div>
        <div className="title-2">Viimeisimmät tehtävät</div>
        <div className="box">
          {data.latestTasks.map(task => {
            return (
              <div key={task.id} className="box__section">
                {format(new Date(task.publishDate), 'd.M.Y')} {task.title} &ndash; {task.accomplishmentCount} suoritusta
              </div>
            )
          })}
          <div className="form__buttons">
            <div className="button" onClick={() => history.push(`/coach/${coachKey}/tasks`)}>Kaikki tehtävät</div>
          </div>
        </div>
        <div className="title-2">Viimeisimmät suoritusmerkinnät</div>
        <div className="box">
          {data.latestAccomplishments.map(accomplishment => {
            return (
              <div key={accomplishment.id} className="box__section">
                {format(new Date(accomplishment.createdAt), 'd.M.Y HH:mm')} &ndash; {accomplishment.task
                .title} &ndash; {likingEmoji(accomplishment.liking)} {accomplishment.player.name} {accomplishment.comment
                && <i>({accomplishment.comment})</i>}
              </div>
            )
          })}
        </div>
      </>
    )
  }

  const title = data ? data.team.name : 'Valmentajan sivut'
  return <DataPage fetch={fetch} setData={setData} content={content} data={data} title={title} />
}

export default CoachIndexPage
