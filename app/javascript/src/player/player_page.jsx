import React, { useEffect, useState } from 'react'
import { fetchPlayer } from './api'
import Task from './task'

import './player.scss'
import { likingEmoji } from '../emojis'
import DataPage from '../data_page'

function getColor(value){
  const hue=(value * 120).toString(10)
  return ["hsl(",hue,",100%,50%)"].join("")
}

function PlayerPage({ match }) {
  const [error, setError] = useState(undefined)
  const [data, setData] = useState(undefined)
  const { params: { accessKey } } = match

  useEffect(() => {
    const fetchCallback = (err, json) => {
      if (err) {
        setError(err)
      } else {
        setData(json)
      }
    }

    fetchPlayer(accessKey, fetchCallback)

    const onVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        fetchPlayer(accessKey, fetchCallback)
      }
    }
    document.addEventListener('visibilitychange', onVisibilityChange)
    return () => {
      document.removeEventListener('visibilitychange', onVisibilityChange)
    }
  }, [])

  const findAccomplishment = task => data.accomplishments.find(a => a.taskId === task.id)

  const taskAccomplished = accomplishment => {
    const accomplishments = [...data.accomplishments]
    const index = accomplishments.findIndex(a => a.taskId === accomplishment.taskId)
    if (index !== -1) {
      accomplishments[index] = accomplishment
    } else {
      accomplishments.push(accomplishment)
    }
    setData({ ...data, accomplishments })
  }

  const content = () => {
    if (!data.tasks.length) {
      return <div className="player">Tehtäviä ei ole vielä lisätty</div>
    }

    const accomplishedPercentage = data.accomplishments.length / data.tasks.length
    let coachLiking = undefined
    if (accomplishedPercentage < 0.25) {
      coachLiking = -1
    } else if (accomplishedPercentage < 0.5) {
      coachLiking = 0
    } else if (accomplishedPercentage < 0.75) {
      coachLiking = 1
    } else {
      coachLiking = 2
    }

    return (
      <>
        <div className="player">
          <div className="player__stats-summary">
            Tehtäviä tehty {data.accomplishments.length} / {data.tasks.length}
            <div className="player__coach-emoji">{likingEmoji(coachLiking)}</div>
          </div>
          <div className="player__stats-bar">
            <div className="player__stats-done" style={{ backgroundColor: getColor(accomplishedPercentage), width: `${100 * accomplishedPercentage}%` }} />
          </div>
          {!data.accomplishments.length && <div className="player__intro">Aloita etsimällä tehtävä, jonka olet suorittanut ja paina "Olen suorittanut tehtävän"-nappia!</div>}
        </div>
        <div className="title-2">Linkki omalle sivulle</div>
        <div className="player">
          <div className="player__url-title">Tällä osoitteella pääset takaisin omalle sivullesi, ota osoite talteen:</div>
          <div>{window.location.href}</div>
        </div>
        <div className="title-2">Tehtävät</div>
        {data.tasks.map(task => {
          return (
            <Task
              key={task.id}
              task={task}
              accomplishment={findAccomplishment(task)}
              accessKey={accessKey}
              accomplished={taskAccomplished}
            />
          )
        })}
      </>
    )
  }

  const title = data ? `FC Kontu P11 — ${data.player.name}` : 'FC Kontu P11'
  return <DataPage content={content} data={data} error={error} title={title} />
}

export default PlayerPage
