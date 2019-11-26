import tokenService from './tokenService';

const BASE_URL = '/api/appts/';

function create(appt) {
  return fetch(BASE_URL + 'create', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken()
      }),
      body: JSON.stringify(appt)
    })
    .then(res => {
      if (res.status) return res.json();
      // Probably a duplicate email
      throw new Error('Email already taken!');
    })
    .then(data => data);
}

export default {
  create
};