import React from 'react'

import './accomplished.scss'

function Accomplished({ accomplishment }) {
  const { comment, liking } = accomplishment
  return (
    <div className="accomplished">
      <div className="accomplished__title">Haaste suoritettu!</div>
      <div className="accomplished__feedback">
        {liking && <div className="accomplished__liking">{liking}</div>}
        {comment && <div className="accomplished__comment">{comment}</div>}
      </div>
    </div>
  )
}

export default Accomplished
