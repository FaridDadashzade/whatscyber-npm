const request = require('request')
const fs = require('fs')
const exec = require('child_process').exec
const os = require('os')
async function carbon () {
  const rgbafmin = 0
  const rgbafmax = 255
  const rgbafirst = Math.floor(Math.random() * (Number(rgbafmax) - Number(rgbafmin)) + Number(rgbafmin))
  const rgbasmin = 0
  const rgbasmax = 255
  const rgbasecond = Math.floor(Math.random() * (Number(rgbasmax) - Number(rgbasmin)) + Number(rgbasmin))
  const rgbatmin = 0
  const rgbatmax = 255
  const rgbathird = Math.floor(Math.random() * (Number(rgbatmax) - Number(rgbatmin)) + Number(rgbatmin))
  let data = ''
  data = rgbafirst + ',' + rgbasecond + ',' + rgbathird
  return data
}
module.exports = carbon
