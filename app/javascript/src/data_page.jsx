import React, { useEffect, useState } from 'react'

function DataPage({ fetch, setData, data, title, content }) {
  const [error, setError] = useState(undefined)

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
      return <div className="task"><div className="form__error">{error}</div></div>
    } else if (!data) {
      return <div className="task">Ladataan...</div>
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
