const request = require('request');
const fs = require('fs');
const exec = require('child_process').exec;
const os = require("os");
async function carbon() {

  var rgbafmin = 0; 
  var rgbafmax = 255;  
  var rgbafirst = Math.floor(Math.random() * (Number(rgbafmax) - Number(rgbafmin)) + Number(rgbafmin))
  var rgbasmin = 0; 
  var rgbasmax = 255;  
  var rgbasecond = Math.floor(Math.random() * (Number(rgbasmax) - Number(rgbasmin)) + Number(rgbasmin))
  var rgbatmin = 0; 
  var rgbatmax = 255;  
  var rgbathird = Math.floor(Math.random() * (Number(rgbatmax) - Number(rgbatmin)) + Number(rgbatmin))
  var data = ''
  data = rgbafirst + ',' + rgbasecond + ',' + rgbathird
  return data;
}
module.exports = carbon
