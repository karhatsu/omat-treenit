import { handleApiConnectionError, handleApiResponse } from '../player/api'

export function fetchTasks(coachKey, callback) {
  fetch(`/api/coach/${coachKey}/tasks`, {
    headers: { 'Content-Type': 'application/json' },
  }).then(response => {
    handleApiResponse(response, callback)
  }).catch(() => handleApiConnectionError(callback))
}
