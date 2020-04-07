import React from 'react'
import { likingEmoji } from '../emojis'

import './accomplished.scss'

function Accomplished({ accomplishment, onEdit }) {
  const { comment, liking } = accomplishment
  return (
    <div className="accomplished">
      <div className="accomplished__title">Tehtävä suoritettu!</div>
      <div className="accomplished__feedback">
        <div className="accomplished__liking">{likingEmoji(liking)}</div>
        {comment && <div className="accomplished__comment">{comment}</div>}
      </div>
      <div className="accomplished__edit" onClick={onEdit}>Muuta</div>
    </div>
  )
}

export default Accomplished
