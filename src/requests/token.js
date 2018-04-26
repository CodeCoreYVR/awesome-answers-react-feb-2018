const DOMAIN = 'localhost:3000';
const API_PATH = '/api/v1';
const BASE_URL = `http://${DOMAIN}${API_PATH}`

// REQUEST METHODS

export const Token = {
  create(params) {
    return fetch(
      `${BASE_URL}/tokens`,
      {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(params)
      }
    ).then(response => response.json())
  }
}

// export { Question };
