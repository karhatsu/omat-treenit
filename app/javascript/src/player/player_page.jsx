import React, { useEffect, useState } from 'react'
import { fetchPlayer } from './api'
import Task from './task'

import './player_page.scss'
import { likingEmoji } from '../emojis'
import DataPage from '../data_page'

function getColor(value){
  const hue=(value * 120).toString(10)
  return ["hsl(",hue,",100%,50%)"].join("")
}

function PlayerPage({ match }) {
  const [data, setData] = useState(undefined)
  const [barAnimated, setBarAnimated] = useState(false)
  const { params: { accessKey } } = match

  const fetch = callback => fetchPlayer(accessKey, callback)

  useEffect(() => {
    localStorage && localStorage.setItem('accessKey', accessKey)
  }, [])

  useEffect(() => {
    if (data && !barAnimated) {
      setTimeout(() => {
        setBarAnimated(true)
      }, 500)
    }
  }, [data, barAnimated])

  useEffect(() => {
    if (data && !data.team.visible && localStorage) {
      localStorage.removeItem('accessKey')
    }
  }, [data && data.team.visible])

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
    if (!data.team.visible) {
      return (
        <div className="box">
          <div className="form__error">Oma sivusi on poistunut käytöstä</div>
          <div><a href="/">Siirry aloitussivulle</a></div>
        </div>
      )
    }

    if (!data.tasks.length) {
      return <div className="box">Tehtäviä ei ole vielä lisätty</div>
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

    const statsDoneStyle = barAnimated ? { backgroundColor: getColor(accomplishedPercentage), width: `${100 * accomplishedPercentage}%` } : { width: 0 }
    return (
      <>
        <div className="box player-page">
          <div className="player-page__stats-summary">
            Tehtäviä tehty {data.accomplishments.length} / {data.tasks.length}
            <div className="player-page__coach-emoji">{likingEmoji(coachLiking)}</div>
          </div>
          <div className="player-page__stats-bar">
            <div className="player-page__stats-done" style={statsDoneStyle} id="tmp" />
          </div>
          {!data.accomplishments.length && <div className="player__intro">Aloita etsimällä tehtävä, jonka olet suorittanut ja paina "Olen suorittanut tehtävän"-nappia!</div>}
        </div>
        {data.player.coachComment && (
          <>
            <div className="title-2">Valmentajan terveiset</div>
            <div className="box player-page__coach-comment">{data.player.coachComment}</div>
          </>
        )}
        <div className="title-2">Linkki omalle sivulle</div>
        <div className="box">
          <div className="player-page__url-title">Tällä osoitteella pääset takaisin omalle sivullesi, ota osoite talteen:</div>
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

  const title = data ? `${data.team.name} — ${data.player.name}` : 'Omat treenit'
  return <DataPage fetch={fetch} setData={setData} content={content} data={data} title={title} />
}

export default PlayerPage
