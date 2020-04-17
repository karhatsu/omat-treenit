import React, { useEffect, useState } from 'react'
import StartForm from './player/start_form'

function HomePage({ history }) {
  const [keyChecked, setKeyChecked] = useState(false)

  useEffect(() => {
    if (localStorage) {
      const accessKey = localStorage.getItem('accessKey')
      if (accessKey) {
        history.push(`/players/${accessKey}`)
      } else {
        setKeyChecked(true)
      }
    } else {
      setKeyChecked(true)
    }
  }, [])

  if (!keyChecked) {
    return (
      <div>
        <div className="title">Omat treenit</div>
        <div className="box">Ladataan...</div>
      </div>
    )
  }
  return <StartForm history={history} />
}

export default HomePage
