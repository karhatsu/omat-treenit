import React from 'react'
import { format } from "date-fns"
import Accomplishment from './accomplishment'

function Task({ task, onEdit }) {
  const { publishDate, title, description, youtubeUrl, accomplishments } = task
  return (
    <div className="box task">
      <div className="box__title">{format(new Date(publishDate), 'd.M.Y')} {title}</div>
      <div className="box__section" dangerouslySetInnerHTML={{ __html: marked(description) }} />
      {youtubeUrl && <a className="youtube-link" href={youtubeUrl} target="_blank">YouTube</a>}
      <div className="form__buttons">
        <div className="button" onClick={onEdit}>Muokkaa</div>
      </div>
      <div className="title-3">Suorittaneet ({accomplishments.length})</div>
      {accomplishments.map(accomplishment => {
        return <Accomplishment key={accomplishment.id} accomplishment={accomplishment} title={accomplishment.player.name} />
      })}
    </div>
  )
}

export default Task
