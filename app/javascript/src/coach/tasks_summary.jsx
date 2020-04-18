import React from 'react'
import { format } from "date-fns"

function TasksSummary({ coachKey, history, latestTasks }) {
  const tasksButton = title => {
    return <div className="button" onClick={() => history.push(`/coach/${coachKey}/tasks`)}>{title}</div>
  }

  if (!latestTasks.length) {
    return (
      <>
        <div className="title-2">Tehtävät</div>
        <div className="box">
          {tasksButton('Aloita tehtävien lisäys')}
        </div>
      </>
    )
  }

  return (
    <>
      <div className="title-2">Viimeisimmät tehtävät</div>
      <div className="box">
        {latestTasks.map(task => {
          return (
            <div key={task.id} className="box__section">
              {format(new Date(task.publishDate), 'd.M.Y')} {task.title} &ndash; {task.accomplishmentCount} suoritusta
            </div>
          )
        })}
        <div className="form__buttons">
          {tasksButton('Kaikki tehtävät')}
        </div>
      </div>
    </>
  )
}

export default TasksSummary
