import React, { useEffect, useState } from 'react'
import { fetchTasks } from './api'

function Tasks({ match }) {
  const { params: { coachKey } } = match
  const [error, setError] = useState(undefined)
  const [data, setData] = useState(undefined)

  useEffect(() => {
    fetchTasks(coachKey, (err, json) => {
      if (err) {
        setError(err)
      } else {
        setData(json)
      }
    })
  }, [])

  const resolveContent = () => {
    if (error) {
      return <div className="task"><div className="form__error">{error}</div></div>
    } else if (!data) {
      return <div className="task">Ladataan tehtäviä...</div>
    } else {
      return (
        <div>
          <div className="title-2">Tehtävät</div>
          {data.tasks.map(task => {
            return <div key={task.id}>{task.title}</div>
          })}
        </div>
      )
    }
  }

  return (
    <div>
      <div className="title">Valmentajan sivut</div>
      {resolveContent()}
    </div>
  )
}

export default Tasks
