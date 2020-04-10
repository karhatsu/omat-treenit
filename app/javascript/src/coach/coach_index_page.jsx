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
        <div className="box">
          <div>Pelaajia: {data.playerCount}</div>
          <div>Tehtäviä: {data.taskCount}</div>
          <div className="form__buttons">
            <div className="button" onClick={() => history.push(`/coach/${coachKey}/tasks`)}>Tehtävät</div>
            <div className="button" onClick={() => history.push(`/coach/${coachKey}/players`)}>Pelaajat</div>
          </div>
        </div>
      </>
    )
  }

  return <DataPage fetch={fetch} setData={setData} content={content} data={data} title="Valmentajan sivut" />
}

export default CoachIndexPage
