const axios = require('axios').default
const exec = require('child_process').exec
const os = require('os')
async function url_to_img (url) {
  const pay = 'N2Q1NzgzODIwM21zaDBjNWNmNjVjOTBhNzIzMXAxM2I0NjFqc243N2M4Y2ZhNTU4NzE'
  const buff = Buffer.from(pay, 'base64')
  const text = buff.toString('utf-8')
  const options = {
    method: 'GET',
    url: 'https://web-capture.p.rapidapi.com/image',
    params: { url: url, width: '1920', height: '1080' },
    headers: {
      'x-rapidapi-host': 'web-capture.p.rapidapi.com',
      'x-rapidapi-key': text
    }
  }
  const basesc = await axios.request(options)
  return basesc
}
module.exports = url_to_img
