import React from 'react'

import './task.scss'
import Accomplished from './accomplished'
import AccomplishmentForm from './accomplishment_form'
import YoutubeIframe from './youtube_iframe'

function Task({ task, accomplishment, accessKey, accomplished }) {
  const { publishDate, title, description, youtubeUrl } = task
  const classNames = ['task']
  classNames.push(accomplishment ? 'task--accomplished' : 'task--unfinished')
  return (
    <div className={classNames.join(' ')}>
      <div className="task__title">{publishDate} {title}</div>
      <div className="task__description">{description}</div>
      {youtubeUrl && <YoutubeIframe url={youtubeUrl} />}
      {accomplishment && <Accomplished accomplishment={accomplishment} />}
      {!accomplishment && <AccomplishmentForm accessKey={accessKey} taskId={task.id} accomplished={accomplished} />}
    </div>
  )
}

export default Task
