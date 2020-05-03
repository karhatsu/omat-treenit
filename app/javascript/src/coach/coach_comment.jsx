import React, { useState } from 'react'
import format from 'date-fns/format'
import { saveCoachComment } from './api'

import './coach_comment.scss'

export default function CoachComment({ coachKey, playerId, coachComment, commentedAt, onSave }) {
  const [comment, setComment] = useState(coachComment || '')
  const [editing, setEditing] = useState(false)
  const [error, setError] = useState(undefined)

  const submit = e => {
    e.preventDefault()
    saveCoachComment(coachKey, playerId, comment, (err, json) => {
      if (err) {
        setError(err)
      } else {
        setEditing(false)
        onSave(playerId, json)
      }
    })
  }

  const cancel = () => setEditing(false)

  const renderForm = () => {
    return (
      <form className="form form--vertical box" onSubmit={submit}>
        {error && <div className="form__error">{error}</div>}
        <textarea value={comment} onChange={e => setComment(e.target.value)} />
        <div className="form__buttons">
          <input type="submit" value="Tallenna" className="button button--primary" />
          <input type="button" value="Peruuta" className="button" onClick={cancel} />
        </div>
      </form>
    )
  }

  return (
    <div className="coach-comment">
      <div className="coach-comment__title">
        Valmentajan terveiset {commentedAt ? `(${format(new Date(commentedAt), 'd.M.Y HH:mm')})` : ''}
      </div>
      {editing && renderForm()}
      {!editing && coachComment && <div className="coach-comment__text">{coachComment}</div>}
      {!editing && <div onClick={() => setEditing(true)} className="coach-comment__editLink">Muokkaa</div>}
    </div>
  )
}
