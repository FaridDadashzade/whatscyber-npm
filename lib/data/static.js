const request = require('request')
const fs = require('fs')
const exec = require('child_process').exec
const os = require('os')
async function static_remove_bg (color) {
  const ttl = color.toLowerCase()
  const data = 'chromakey=' + ttl
  return data
}
module.exports = static_remove_bg
