import React from 'react'

import './task.scss'
import YoutubeIframe from './youtube_iframe'

function Task({ task }) {
  const { publishDate, title, description, youtubeUrl } = task
  return (
    <div className="task">
      <div className="task__title">{publishDate} {title}</div>
      <div className="task__description">{description}</div>
      {youtubeUrl && <YoutubeIframe url={youtubeUrl} />}
    </div>
  )
}

export default Task
