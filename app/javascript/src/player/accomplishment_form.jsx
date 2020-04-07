import React, { useState } from 'react'
import { likingEmoji } from '../emojis'

import './accomplishment_form.scss'
import { accomplishTask } from './api'

function AccomplishmentForm({ accessKey, taskId, accomplished, onCancel, accomplishment }) {
  const [error, setError] = useState(undefined)
  const [liking, setLiking] = useState(accomplishment ? accomplishment.liking : undefined)
  const [comment, setComment] = useState(accomplishment ? accomplishment.comment : '')

  const likingClasses = l => {
    if (l === liking) return 'accomplishment-form__liking accomplishment-form__liking--selected'
    return 'accomplishment-form__liking'
  }

  const changeComment = e => {
    setComment(e.target.value)
  }

  const submit = e => {
    e.preventDefault()
    accomplishTask(accessKey, { taskId, liking, comment }, (err, json) => {
      if (err) {
        setError(err)
      } else {
        accomplished(json)
      }
    })
  }

  return (
    <form className="form accomplishment-form" onSubmit={submit}>
      <div className="accomplishment-form__sub-title">Tykkäsitkö?</div>
      <div className="accomplishment-form__likings">
        {[2, 1, 0, -1].map(l => {
          return <div key={l} className={likingClasses(l)} onClick={() => setLiking(l)}>{likingEmoji(l)}</div>
        })}
      </div>
      <div className="accomplishment-form__sub-title">Kerro lisää!</div>
      <div className="accomplishment-form__comment">
        <textarea
          placeholder="Miten harjoitus meni? Mikä oli kivaa tai tylsää? Oliko jokin vaikeaa tai liian helppoa? ..."
          value={comment}
          onChange={changeComment}
        />
      </div>
      {error && <div className="form__error">{error}</div>}
      <div className="form__buttons">
        <input type="submit" className="button button--primary" value="Tallenna" disabled={typeof liking === 'undefined'} />
        <input type="button" className="button" value="Peruuta" onClick={onCancel} />
      </div>
    </form>
  )
}

export default AccomplishmentForm
