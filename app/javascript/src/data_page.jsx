import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

function DataPage({ fetch, setData, data, title, content }) {
  const [error, setError] = useState(undefined)
  const location = useLocation()

  useEffect(() => {
    const fetchCallback = (err, json) => {
      if (err) {
        setError(err)
      } else {
        setData(json)
      }
    }

    fetch(fetchCallback)

    const onVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        fetch(fetchCallback)
      }
    }
    document.addEventListener('visibilitychange', onVisibilityChange)
    return () => {
      document.removeEventListener('visibilitychange', onVisibilityChange)
    }
  }, [])

  const resolveContent = () => {
    if (error) {
      return (
        <div className="box">
          <div className="form__error">{error}</div>
          <a href={location.pathname} className="form__error-link">Päivitä sivu</a>
        </div>
      )
    } else if (!data) {
      return <div className="box">Ladataan...</div>
    } else {
      return content()
    }
  }

  return (
    <div>
      <div className="title">{title}</div>
      {resolveContent()}
    </div>
  )
}

export default DataPage
