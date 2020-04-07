import React from 'react'

import './accomplished.scss'
import { likingEmoji } from './emojis'

function Accomplished({ accomplishment, onEdit }) {
  const { comment, liking } = accomplishment
  return (
    <div className="accomplished">
      <div className="accomplished__title">Haaste suoritettu!</div>
      <div className="accomplished__feedback">
        <div className="accomplished__liking">{likingEmoji(liking)}</div>
        {comment && <div className="accomplished__comment">{comment}</div>}
      </div>
      <div className="accomplished__edit" onClick={onEdit}>Muuta</div>
    </div>
  )
}

export default Accomplished
