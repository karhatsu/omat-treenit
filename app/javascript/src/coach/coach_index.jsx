import React, { useEffect, useState } from 'react'
import { fetchCoachSummary } from './api'

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

  if (error) {
    return <div className="task"><div className="form__error">{error}</div></div>
  } else if (!data) {
    return <div className="task">Ladataan...</div>
  }

  return (
    <div>
      <div className="title">Valmentajan sivut</div>
      <div className="task">
        <div>Pelaajia: {data.playerCount}</div>
        <div>Tehtäviä: {data.taskCount}</div>
      </div>
      <div className="task">
        <div className="button" onClick={() => history.push(`/coach/${coachKey}/tasks`)}>Tehtävät</div>
      </div>
    </div>
  )
}

export default CoachIndex
