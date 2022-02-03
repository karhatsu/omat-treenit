import { handleApiConnectionError, handleApiResponse } from '../player/api'

export function fetchCoachSummary(coachKey, callback) {
  fetch(`/api/coach/${coachKey}/summary`, {
    headers: { 'Content-Type': 'application/json' },
  }).then(response => {
    handleApiResponse(response, callback)
  }).catch(() => handleApiConnectionError(callback))
}

export function fetchPlayers(coachKey, callback) {
  fetch(`/api/coach/${coachKey}/players`, {
    headers: { 'Content-Type': 'application/json' },
  }).then(response => {
    handleApiResponse(response, callback)
  }).catch(() => handleApiConnectionError(callback))
}

export function deletePlayer(coachKey, playerId, callback) {
  fetch(`/api/coach/${coachKey}/players/${playerId}`, {
    method: 'DELETE',
  }).then(response => {
    handleApiResponse(response, callback)
  }).catch(() => handleApiConnectionError(callback))
}

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

export function saveCoachComment(coachKey, playerId, coachComment, callback) {
  fetch(`/api/coach/${coachKey}/players/${playerId}/coach_comment`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ coachComment }),
  }).then(response => {
    handleApiResponse(response, callback)
  }).catch(() => handleApiConnectionError(callback))
}
