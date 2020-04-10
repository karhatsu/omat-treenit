import React, { useEffect, useState } from 'react'
import { createPlayer } from './api'

function StartForm({ history }) {
  const [name, setName] = useState('')
  const [error, setError] = useState(undefined)

  useEffect(() => {
    if (localStorage) {
      const accessKey = localStorage.getItem('accessKey')
      if (accessKey) {
        history.push(`/players/${accessKey}`)
      }
    }
  }, [])

  const changeName = e => {
    setName(e.target.value)
  }

  const submit = e => {
    setError(undefined)
    e.preventDefault()
    createPlayer(name, (err, json) => {
      if (err) {
        setError(err)
      } else {
        history.push(`/players/${json.accessKey}`)
      }
    })
  }

  return (
    <div>
      <div className="title">FC Kontu P11 &mdash; omatoiminen harjoittelu</div>
      <form className="form form--vertical form--start" onSubmit={submit}>
        {error && <div className="form__error">{error}</div>}
        <div className="form__field">
          <input type="text" placeholder="Pelaajan nimi" value={name} onChange={changeName} />
        </div>
        <div className="form__buttons">
          <input type="submit" value="Jatka" className="button button--primary" disabled={!name} />
        </div>
      </form>
    </div>
  )
}

export default StartForm
