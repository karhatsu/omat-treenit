import React, { useState } from 'react'

import './task.scss'
import Accomplished from './accomplished'
import AccomplishmentForm from './accomplishment_form'
import YoutubeIframe from './youtube_iframe'

function Task({ task, accomplishment, accessKey, accomplished }) {
  const [formOpen, setFormOpen] = useState(false)

  const { publishDate, title, description, youtubeUrl } = task
  const classNames = ['task']
  classNames.push(accomplishment ? 'task--accomplished' : 'task--unfinished')

  const onSave = response => {
    setFormOpen(false)
    accomplished(response)
  }

  return (
    <div className={classNames.join(' ')}>
      <div className="task__title">{publishDate} {title}</div>
      <div className="task__description">{description}</div>
      {youtubeUrl && <YoutubeIframe url={youtubeUrl} />}
      {!formOpen && accomplishment && <Accomplished accomplishment={accomplishment} onEdit={() => setFormOpen(true)} />}
      {!formOpen && !accomplishment && <div className="button button--primary" onClick={() => setFormOpen(true)}>Olen suorittanut haasteen...</div>}
      {formOpen && (
        <AccomplishmentForm
          accessKey={accessKey}
          taskId={task.id}
          accomplished={onSave}
          accomplishment={accomplishment}
        />
      )}
    </div>
  )
}

export default Task
