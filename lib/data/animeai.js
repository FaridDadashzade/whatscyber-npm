const request = require('request')
const fs = require('fs')
const exec = require('child_process').exec
const os = require('os')
async function anime_download () {
  const download = async (uri, filename, callback) => {
    await request.head(uri, async (err, res, body) => {
      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback)
    })
  }
  const totalImages = 100000
  id = Math.floor(Math.random() * totalImages)
  const data = 'https://www.thiswaifudoesnotexist.net/example-' + id + '.jpg'
  return data
}
module.exports = anime_download
