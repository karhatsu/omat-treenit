import React from 'react'
import { format } from "date-fns"
import { likingEmoji } from '../emojis'

function Task({ task, onEdit }) {
  const { publishDate, title, description, youtubeUrl, accomplishments } = task
  return (
    <div className="box task">
      <div className="box__title">{format(new Date(publishDate), 'd.M.Y')} {title}</div>
      <div className="box__section" dangerouslySetInnerHTML={{ __html: marked(description) }} />
      <a className="youtube-link" href={youtubeUrl} target="_blank">YouTube</a>
      <div className="title-3">Suorittaneet ({accomplishments.length})</div>
      {accomplishments.map(accomplishment => {
        return (
          <div className="task__accomplisher" key={accomplishment.id}>
            <div className="task__accomplisher-emoji">{likingEmoji(accomplishment.liking)}</div>
            <div>{accomplishment.player.name}</div>
            {accomplishment.comment && <div className="task__accomplisher-comment">{accomplishment.comment}</div>}
          </div>
        )
      })}
      <div className="form__buttons">
        <div className="button" onClick={onEdit}>Muokkaa</div>
      </div>
    </div>
  )
}

export default Task
