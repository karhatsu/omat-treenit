import React, { useEffect, useState } from 'react'
import DataPage from '../data_page'
import { fetchPlayers } from './api'
import { likingEmoji } from '../emojis'

function Players({ match }) {
  const { params: { coachKey } } = match
  const [error, setError] = useState(undefined)
  const [data, setData] = useState(undefined)

  useEffect(() => {
    fetchPlayers(coachKey, (err, json) => {
      if (err) {
        setError(err)
      } else {
        setData(json)
      }
    })
  }, [])

  const content = () => {
    return data.players.map(player => {
      return (
        <div key={player.id} className="task">
          <div className="task__title">{player.name} ({player.accomplishments.length})</div>
          {player.accomplishments.map(accomplishment => {
            return (
              <div className="task__accomplisher" key={accomplishment.id}>
                <div className="task__accomplisher-emoji">{likingEmoji(accomplishment.liking)}</div>
                <div>{accomplishment.task.title}</div>
                {accomplishment.comment && <div className="task__accomplisher-comment">{accomplishment.comment}</div>}
              </div>
            )
          })}
        </div>
      )
    })
  }

  return <DataPage content={content} data={data} error={error} title="Valmentajan sivut - Pelaajat" />
}

export default Players