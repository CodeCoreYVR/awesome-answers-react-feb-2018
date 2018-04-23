const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6NywiZmlyc3RfbmFtZSI6IkpvbiIsImxhc3RfbmFtZSI6IlNub3cifQ.5L_rwzPjV8Te4VbA3AVx77juTudf98GgeGhvaFQhDRU';
const DOMAIN = 'localhost:3000';
const API_PATH = '/api/v1';
const BASE_URL = `http://${DOMAIN}${API_PATH}`

// REQUEST METHODS

export const Question = {
  one(id) {
    return fetch(
      `${BASE_URL}/questions/${id}`,
      { headers: { 'Authorization' : TOKEN } }
    ).then(response => response.json())
  },
  all() {
    return fetch(
      `${BASE_URL}/questions`,
      { headers: { 'Authorization' : TOKEN } }
    ).then(response => response.json())
  },
  create(params) {
    return fetch(
      `${BASE_URL}/questions`,
      {
        method: 'POST',
        headers: {
          'Authorization' : TOKEN,
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(params)
      }
    ).then(response => response.json())
  }
}

// export { Question };
