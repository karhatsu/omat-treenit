import React, { useEffect, useState } from 'react'
import { createPlayer, fetchTeams } from './api'
import DataPage from '../data_page'

function StartForm({ history }) {
  const [form, setForm] = useState({ teamId: '', name: '' })
  const [error, setError] = useState(undefined)
  const [teams, setTeams] = useState(undefined)

  const fetch = callback => fetchTeams(callback)

  const changeFormValue = field => e => {
    setForm({ ...form, [field]: e.target.value })
  }

  const submit = e => {
    setError(undefined)
    e.preventDefault()
    createPlayer(form, (err, json) => {
      if (err) {
        setError(err)
      } else {
        history.push(`/players/${json.accessKey}`)
      }
    })
  }

  const content = () => (
    <div>
      <form className="form form--vertical form--start" onSubmit={submit}>
        {error && <div className="form__error">{error}</div>}
        <div className="form__field">
          <select onChange={changeFormValue('teamId')} value={form.teamId}>
            <option>- Valitse joukkue -</option>
            {teams.map(team => <option key={team.id} value={team.id}>{team.name}</option>)}
          </select>
        </div>
        <div className="form__field">
          <input type="text" placeholder="Pelaajan nimi" value={form.name} onChange={changeFormValue('name')} />
        </div>
        <div className="form__buttons">
          <input type="submit" value="Jatka" className="button button--primary" disabled={!form.teamId || !form.name} />
        </div>
      </form>
    </div>
  )

  return <DataPage fetch={fetch} data={teams} setData={setTeams} content={content} title="Omat treenit" />
}

export default StartForm
