import React from 'react'

import './task.scss'

function Task({ task }) {
  const { publishDate, title, description, youtubeUrl } = task
  return (
    <div className="task">
      <div className="task__title">{publishDate} {title}</div>
      <div className="task__description">{description}</div>
      {youtubeUrl && <a className="task__youtube-url" href={youtubeUrl} target="_blank">Katso YouTube-video</a>}
    </div>
  )
}

export default Task
