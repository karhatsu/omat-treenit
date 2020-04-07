import React from 'react'

function YoutubeIframe({ url }) {
  if (url.indexOf('watch?v=') === -1) {
    return <a className="youtube-link" href={url} target="_blank">Katso YouTube-video</a>
  }
  const embedUrl = url.replace('watch?v=', 'embed/')
  return <iframe src={embedUrl} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
}

export default YoutubeIframe
