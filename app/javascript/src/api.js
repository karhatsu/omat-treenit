const unexpectedErrorMsg = 'Odottamaton virhe, yritä uudestaan.'

export function fetchPlayer(accessKey, callback) {
  fetch(`/api/players/${accessKey}`, {
    headers: { 'Content-Type': 'application/json' },
  }).then(response => {
    handleApiResponse(response, callback)
  }).catch(() => handleApiConnectionError(callback))
}

export function createPlayer(playerName, callback) {
  fetch('/api/players', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ player: { name: playerName } })
  }).then(response => {
    handleApiResponse(response, callback)
  }).catch(() => handleApiConnectionError(callback))
}

export function accomplishTask(accessKey, data, callback) {
  fetch(`/api/players/${accessKey}/accomplishment`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(response => {
    handleApiResponse(response, callback)
  }).catch(() => handleApiConnectionError(callback))
}

export function handleApiResponse(response, callback) {
  if (response.status === 201 || response.status === 204) {
    callback()
  } else if (response.ok) {
    response.json().then(data => {
      callback(null, data)
    }).catch(() => callback([unexpectedErrorMsg]))
  } else {
    response.json().then(({ errors }) => {
      callback(errors)
    }).catch(() => callback([unexpectedErrorMsg]))
  }
}

export function handleApiConnectionError(callback) {
  callback(['Yhteysvirhe, yritä uudestaan'])
}
