import React from 'react'
import { format } from 'date-fns'

import './accomplishment.scss'
import { likingEmoji } from '../emojis'

export default function Accomplishment({ accomplishment, title }) {
  const { createdAt, comment, liking } = accomplishment
  let titleText = title
  if (createdAt) {
    titleText = `${format(new Date(createdAt), 'd.M.Y HH:mm')} – ${title}`
  }
  return (
    <div className="accomplishment">
      <div className="accomplishment__title-row">
        <div className="accomplishment__emoji">{likingEmoji(liking)}</div>
        <div className="accomplishment__title">{titleText}</div>
      </div>
      {comment && <div className="accomplishment__comment">{comment}</div>}
    </div>
  )
}
