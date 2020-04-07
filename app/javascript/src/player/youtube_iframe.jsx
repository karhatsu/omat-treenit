import React from 'react'

const resolveEmbedUrl = url => {
  if (url.indexOf('youtu.be/') !== -1) {
    return url.replace('youtu.be/', 'youtube.com/embed/')
  } else if (url.indexOf('watch?v=') !== -1) {
    return url.replace('watch?v=', 'embed/')
  }
}

function YoutubeIframe({ url }) {
  const embedUrl = resolveEmbedUrl(url)
  if (!embedUrl) {
    return <a className="youtube-link" href={url} target="_blank">Katso YouTube-video</a>
  }
  return <iframe src={embedUrl} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
}

export default YoutubeIframe
