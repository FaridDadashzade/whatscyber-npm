const fs = require('fs')
const exec = require('child_process').exec
const os = require('os')
const NetworkSpeed = require('network-speed') // ES5
const testNetworkSpeed = new NetworkSpeed()

async function speedy_server () {
  const data = {
    bps: '',
    kbps: '',
    mbps: '',
    gbps: ''
  }
  const baseUrl = 'https://eu.httpbin.org/stream-bytes/100000000'
  const fileSizeInBytes = 50000000
  const speed = await testNetworkSpeed.checkDownloadSpeed(baseUrl, fileSizeInBytes)
  data.bps = speed.bps
  data.kbps = speed.kbps
  data.mbps = speed.mbps
  const GBPS = Number(speed.mbps) / 1000
  const onceGBPS = GBPS.toString().split('')
  const finalGBPS = onceGBPS[0] + onceGBPS[1] + onceGBPS[2]
  data.gbps = finalGBPS
  return data
}
module.exports = speedy_server
