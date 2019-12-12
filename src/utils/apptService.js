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

function updateStatus(toUpdate) {
  return fetch(`${BASE_URL}${toUpdate.id}/updateStatus`, {
      method: 'PATCH',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken()
      }),
      body: JSON.stringify(toUpdate)
    })
    .then(res => {
      if (res.status) return res.json();
      throw new Error('uhoh');
    })
    .then(data => data);
}

function createMessage(msg, id) {
  return fetch(`${BASE_URL}${id}/createMessage`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken()
      }),
      body: JSON.stringify(msg)
    })
    .then(res => {
      if (res.status) return res.json();
      throw new Error('uhhh')
    })
    .then(data => data)
}

function updateDate(date, id) {
  return fetch(`${BASE_URL}${id}/updateDate`, {
      method: 'PATCH',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken()
      }),
      body: JSON.stringify(new Date(date))
    })
    .then(res => {
      if (res.status) return res.();
      throw new Error('nope')
    })
    .then(data => data)
}

export default {
  create,
  updateStatus,
  createMessage,
  updateDate
};