import React, { useEffect, useState } from 'react'
import { fetchPlayer } from './api'

import './player.scss'

function PlayerPage({ match }) {
  const [error, setError] = useState(undefined)
  const [player, setPlayer] = useState(undefined)
  useEffect(() => {
    fetchPlayer(match.params.accessKey, (err, json) => {
      if (err) {
        setError(err)
      } else {
        setPlayer(json)
      }
    })
  }, [])

  return (
    <div className="player">
      {error && <div className="form__error">{error}</div>}
      {player && <div className="player__name">{player.name}</div>}
    </div>
  )
}

export default PlayerPage
