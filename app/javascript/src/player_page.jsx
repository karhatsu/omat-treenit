import React, { useEffect, useState } from 'react'
import { fetchPlayer } from './api'
import Task from './task'

import './player.scss'

function PlayerPage({ match }) {
  const [error, setError] = useState(undefined)
  const [data, setData] = useState(undefined)
  const { params: { accessKey } } = match
  useEffect(() => {
    fetchPlayer(accessKey, (err, json) => {
      if (err) {
        setError(err)
      } else {
        setData(json)
      }
    })
  }, [])

  if (error) {
    return <div className="player"><div className="form__error">{error}</div></div>
  } else if (!data) {
    return <div className="player">Ladataan pelaajan tietoja...</div>
  }

  const findAccomplishment = task => data.accomplishments.find(a => a.taskId === task.id)

  const taskAccomplished = accomplishment => {
    const accomplishments = [...data.accomplishments]
    const index = accomplishments.findIndex(a => a.taskId === accomplishment.taskId)
    if (index !== -1) {
      accomplishments[index] = accomplishment
    } else {
      accomplishments.push(accomplishment)
    }
    setData({ ...data, accomplishments })
  }

  return (
    <>
      <div className="player">
        <div className="player__name">{data.player.name}</div>
      </div>
      {data.tasks.map(task => {
        return (
          <Task
            key={task.id}
            task={task}
            accomplishment={findAccomplishment(task)}
            accessKey={accessKey}
            accomplished={taskAccomplished}
          />
        )
      })}
    </>
  )
}

export default PlayerPage
