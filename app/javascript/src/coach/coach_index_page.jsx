import React, { useState } from 'react'
import { fetchCoachSummary } from './api'
import DataPage from '../data_page'

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
            return <div key={player.id}>{player.name}</div>
          })}
          <div className="form__buttons">
            <div className="button" onClick={() => history.push(`/coach/${coachKey}/players`)}>Pelaajat</div>
          </div>
        </div>
        <div className="title-2">Tehtävät</div>
        <div className="box">
          <div className="box__title">Yhteensä: {data.taskCount}</div>
          <div className="form__buttons">
            <div className="button" onClick={() => history.push(`/coach/${coachKey}/tasks`)}>Tehtävät</div>
          </div>
        </div>
      </>
    )
  }

  return <DataPage fetch={fetch} setData={setData} content={content} data={data} title="Valmentajan sivut" />
}

export default CoachIndexPage
