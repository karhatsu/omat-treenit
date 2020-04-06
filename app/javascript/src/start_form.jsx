import React, { useState } from 'react'
import { createPlayer } from './api'

function StartForm() {
  const [name, setName] = useState('')
  const [error, setError] = useState(undefined)
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
        console.log(err, json)
      }
    })
  }

  return (
    <form className="form form--vertical form--start" onSubmit={submit}>
      {error && <div className="form__error">{error}</div>}
      <div className="form__field">
        <input type="text" placeholder="Pelaajan nimi" value={name} onChange={changeName} />
      </div>
      <div className="form__buttons">
        <input type="submit" value="Jatka" className="button button--primary" disabled={!name} />
      </div>
    </form>
  )
}

export default StartForm
