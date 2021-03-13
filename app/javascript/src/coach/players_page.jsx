import React, { useState } from 'react'
import DataPage from '../data_page'
import { fetchPlayers } from './api'
import { likingEmoji } from '../emojis'
import CoachComment from './coach_comment'
import { format } from "date-fns"

function PlayersPage({ match }) {
  const { params: { coachKey } } = match
  const [data, setData] = useState(undefined)

  const fetch = callback => fetchPlayers(coachKey, callback)

  const buildUrl = accessKey => {
    return `${window.location.protocol}//${window.location.host}/players/${accessKey}`
  }

  const onCommentSave = (playerId, newData) => {
    const players = [...data.players]
    const index = players.findIndex(p => p.id === playerId)
    players[index] = { ...players[index], ...newData }
    setData({ ...data, players })
  }

  const content = () => {
    return data.players.map(player => {
      const url = buildUrl(player.accessKey)
      const percentage = Math.round(100 * player.accomplishments.length / data.taskCount)
      return (
        <div key={player.id} className="box task">
          <div className="box__title">{player.name} ({player.accomplishments.length} / {data.taskCount} = {percentage}%)</div>
          <CoachComment coachKey={coachKey} playerId={player.id} coachComment={player.coachComment} commentedAt={player.coachCommentedAt} onSave={onCommentSave} />
          {player.accomplishments.map(accomplishment => {
            return (
              <div className="task__accomplisher" key={accomplishment.id}>
                <div className="task__accomplisher-title-row">
                  <div className="task__accomplisher-emoji">{likingEmoji(accomplishment.liking)}</div>
                  <div className="task__accomplisher-title">
                    {format(new Date(accomplishment.createdAt), 'd.M.Y HH:mm')} &ndash; {accomplishment.task.title}
                  </div>
                </div>
                {accomplishment.comment && <div className="task__accomplisher-comment">{accomplishment.comment}</div>}
              </div>
            )
          })}
          <div className="box__section"><a href={url} target="_blank">{url}</a></div>
        </div>
      )
    })
  }

  return <DataPage fetch={fetch} setData={setData} content={content} data={data} title="Valmentajan sivut - Pelaajat" />
}

export default PlayersPage
