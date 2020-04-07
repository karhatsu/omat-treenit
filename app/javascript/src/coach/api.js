import { handleApiConnectionError, handleApiResponse } from '../player/api'

export function fetchTasks(coachKey, callback) {
  fetch(`/api/coach/${coachKey}/tasks`, {
    headers: { 'Content-Type': 'application/json' },
  }).then(response => {
    handleApiResponse(response, callback)
  }).catch(() => handleApiConnectionError(callback))
}

export function createTask(coachKey, data, callback) {
  fetch(`/api/coach/${coachKey}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(response => {
    handleApiResponse(response, callback)
  }).catch(() => handleApiConnectionError(callback))
}

export function updateTask(coachKey, taskId, data, callback) {
  fetch(`/api/coach/${coachKey}/tasks/${taskId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(response => {
    handleApiResponse(response, callback)
  }).catch(() => handleApiConnectionError(callback))
}
