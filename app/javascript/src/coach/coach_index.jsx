import React, { useEffect, useState } from 'react'
import { fetchCoachSummary } from './api'
import DataPage from '../data_page'

function CoachIndex({ match, history }) {
  const { params: { coachKey } } = match
  const [error, setError] = useState(undefined)
  const [data, setData] = useState(undefined)
  useEffect(() => {
    fetchCoachSummary(coachKey, (err, json) => {
      if (err) {
        setError(err)
      } else {
        setData(json)
      }
    })
  }, [])

  const content = () => {
    return (
      <>
        <div className="task">
          <div>Pelaajia: {data.playerCount}</div>
          <div>Tehtäviä: {data.taskCount}</div>
        </div>
        <div className="task">
          <div className="form__buttons">
            <div className="button" onClick={() => history.push(`/coach/${coachKey}/tasks`)}>Tehtävät</div>
            <div className="button" onClick={() => history.push(`/coach/${coachKey}/players`)}>Pelaajat</div>
          </div>
        </div>
      </>
    )
  }

  return <DataPage content={content} data={data} error={error} title="Valmentajan sivut" />
}

export default CoachIndex
