const DOMAIN = 'localhost:3000';
const API_PATH = '/api/v1';
const BASE_URL = `http://${DOMAIN}${API_PATH}`

function getJWT () {
  return localStorage.getItem('JWT');
}

// REQUEST METHODS

export const Question = {
  one(id) {
    return fetch(
      `${BASE_URL}/questions/${id}`,
      { headers: { 'Authorization' : getJWT() } }
    ).then(response => response.json())
  },
  all() {
    return fetch(
      `${BASE_URL}/questions`,
      { headers: { 'Authorization' : getJWT() } }
    ).then(response => response.json())
  },
  create(params) {
    return fetch(
      `${BASE_URL}/questions`,
      {
        method: 'POST',
        headers: {
          'Authorization' : getJWT(),
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(params)
      }
    ).then(response => response.json())
  }
}

// export { Question };
