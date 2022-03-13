const request = require('request')
const fs = require('fs')
const exec = require('child_process').exec
const os = require('os')
const google = require('googlethis')
async function imgs (q) {
  var data = ''
  const images = await google.image(q, { safe: true })
  const len = images.length

  // 1
  const min1 = 0
  const max1 = len
  const fin1 = Math.floor(Math.random() * (Number(max1) - Number(min1) + 1) + min1)

  // 2
  const min2 = 0
  const max2 = len
  const fin2 = Math.floor(Math.random() * (Number(max2) - Number(min2) + 1) + min2)

  // 3
  const min3 = 0
  const max3 = len
  const fin3 = Math.floor(Math.random() * (Number(max3) - Number(min3) + 1) + min3)

  // 4
  const min4 = 0
  const max4 = len
  const fin4 = Math.floor(Math.random() * (Number(max4) - Number(min4) + 1) + min4)

  // 5
  const min5 = 0
  const max5 = len
  const fin5 = Math.floor(Math.random() * (Number(max5) - Number(min5) + 1) + min5)

  var data = {
    link1: images[fin1].url,
    link2: images[fin2].url,
    link3: images[fin3].url,
    link4: images[fin4].url,
    link5: images[fin5].url
  }
  return data
}
module.exports = imgs
