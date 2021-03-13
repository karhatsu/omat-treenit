import React, { useState } from 'react'
import DataPage from '../data_page'
import { fetchPlayers } from './api'
import CoachComment from './coach_comment'
import Accomplishment from './accomplishment'

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
            return <Accomplishment key={accomplishment.id} accomplishment={accomplishment} title={accomplishment.task.title} />
          })}
          <div className="box__section"><a href={url} target="_blank">{url}</a></div>
        </div>
      )
    })
  }

  return <DataPage fetch={fetch} setData={setData} content={content} data={data} title="Valmentajan sivut - Pelaajat" />
}

export default PlayersPage
