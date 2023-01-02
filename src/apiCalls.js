export const fetchTricks = () => {
  return fetch('http://localhost:3001/api/v1/tricks')
  .then(response => response.json())
}

export const postTrick = (trick) => {
  return fetch('http://localhost:3001/api/v1/tricks', {
    method: 'POST',
    body: JSON.stringify(trick),
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(response => response.json())
}

export const deleteTrick = (id) => {
  console.log(id)
  return fetch(`http://localhost:3001/api/v1/tricks/${id}`, {
    method: 'DELETE'
  })
}