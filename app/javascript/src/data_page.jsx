import React from 'react'

function DataPage({ data, error, title, content }) {
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
