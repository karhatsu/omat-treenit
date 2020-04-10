import React, { useState } from 'react'
import { fetchTasks } from './api'
import Task from './task'
import TaskForm from './task_form'
import DataPage from '../data_page'

function TasksPage({ match }) {
  const { params: { coachKey } } = match
  const [data, setData] = useState(undefined)
  const [newTaskFormOpen, setNewTaskFormOpen] = useState(false)
  const [editTask, setEditTask] = useState(undefined)

  const fetch = callback => fetchTasks(coachKey, callback)

  const onSave = task => {
    const tasks = [...data.tasks]
    const index = tasks.findIndex(t => t.id === task.id)
    if (index !== -1) {
      tasks[index] = task
      setEditTask(undefined)
    } else {
      tasks.unshift(task)
      setNewTaskFormOpen(false)
    }
    setData({ ...data, tasks })
  }

  const onCancel = id => {
    if (id) {
      setEditTask(undefined)
    } else {
      setNewTaskFormOpen(false)
    }
  }

  const content = () => {
    return (
      <>
        <div className="title-2">Uusi tehtävä</div>
        {newTaskFormOpen && <TaskForm coachKey={coachKey} onSave={onSave} onCancel={() => onCancel()} />}
        {!newTaskFormOpen && <div className="box"><div className="button" onClick={() => setNewTaskFormOpen(true)}>Uusi tehtävä...</div></div>}
        <div className="title-2">Tehtävät</div>
        {data.tasks.map(task => {
          if (editTask && editTask.id === task.id) {
            return <TaskForm key={task.id} coachKey={coachKey}task={editTask} onSave={onSave} onCancel={() => onCancel(task.id)} />
          }
          return <Task key={task.id} task={task} onEdit={() => setEditTask(task)} />
        })}
      </>
    )
  }

  return <DataPage fetch={fetch} setData={setData} content={content} data={data} title="Valmentajan sivut - Tehtävät" />
}

export default TasksPage
