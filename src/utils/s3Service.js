const BASE_URL = '/api/appts/';

function uploadPhoto(photo, id) {
  return fetch(`${BASE_URL}${id}/uploadPhoto`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(photo)
    })
    .then(res => {
      if (res.status) return res.json();
      throw new Error('uhhh')
    })
    .then(data => data)
}

export default {
  uploadPhoto
};