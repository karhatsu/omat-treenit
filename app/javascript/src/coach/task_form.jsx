import React, { useState } from 'react'
import { format } from 'date-fns'
import { createTask, updateTask } from './api'

const emptyTask = { publishDate: format(new Date(), 'y-MM-dd'), title: '', description: '', youtubeUrl: '' }

function TaskForm({ coachKey, task, onSave, onCancel }) {
  const [errors, setErrors] = useState(undefined)
  const [data, setData] = useState(task || emptyTask)

  const changeData = field => e => {
    setData({ ...data, [field]: e.target.value })
  }

  const apiCallback = (err, json) => {
    if (err) {
      setErrors(err)
    } else {
      onSave(json)
    }
  }

  const submit = e => {
    e.preventDefault()
    if (task) {
      const { publishDate, title, description, youtubeUrl } = data
      const taskData = { publishDate, title, description, youtubeUrl }
      updateTask(coachKey, task.id, { task: taskData }, apiCallback)
    } else {
      createTask(coachKey, { task: data }, apiCallback)
    }
  }

  return (
    <form className="form task" onSubmit={submit}>
      {errors && <div className="form__error">{errors.join('. ')}</div>}
      <div className="form__field">
        <input type="date" value={data.publishDate} placeholder="yyyy-mm-dd" onChange={changeData('publishDate')} />
      </div>
      <div className="form__field">
        <input type="text" value={data.title} placeholder="Otsikko" onChange={changeData('title')} />
      </div>
      <div className="form__field">
        <input type="url" value={data.youtubeUrl} placeholder="YouTube URL" onChange={changeData('youtubeUrl')} />
      </div>
      <div className="form__field">
        <textarea value={data.description} placeholder="Kuvaus" onChange={changeData('description')} />
      </div>
      <div className="form__buttons">
        <input type="submit" value="Tallenna" className="button button--primary" />
        <input type="button" value="Peruuta" className="button" onClick={onCancel} />
      </div>
    </form>
  )
}

export default TaskForm
