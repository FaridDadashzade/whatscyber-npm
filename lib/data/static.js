const request = require('request');
const fs = require('fs');
const exec = require('child_process').exec;
const os = require("os");
async function static_remove_bg(color) {
  var sdn = 'RUN git clone https://github.com/ByMisakiMey/WhatsSiri /root/WhatsSiri' + '\n'
  exec('sed -n 3p /root/WhatsSiri/whatssiri/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  var ttl = color.toLowerCase() 
  var data = 'chromakey=' + ttl
  return data;
}
module.exports = static_remove_bg
