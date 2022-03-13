const exec = require('child_process').exec
const os = require('os')
async function face_generator () {
  const data = 'https://thispersondoesnotexist.com/image?' + (new Date()).getTime()
  return data
}
module.exports = face_generator
