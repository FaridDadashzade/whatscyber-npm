const axios = require('axios')
const fs = require('fs')
const exec = require('child_process').exec
const os = require('os')
async function linkfl (query, html, loc) {
  const data = {
    image: '',
    status: false
  }
  const client_uri = html + encodeURIComponent(query) + loc // https://api.flamingtext.com/logo/Design-Comics?_variations=true&text=' + query + '&_loc=catdynamic'
  const data_uri = await axios.get(client_uri)
  const find_sc = data_uri.data.split('ft-justify-grid-item">')[2].split('href="')[1].split('" class')[0].replace('amp;', '')
  const get_image = await axios.get('https://api.flamingtext.com' + find_sc)
  const payload = get_image.data.split('alt="Image')[1].split('src="')[1].split('" />')[0]

  data.image = payload
  data.status = true
  return data
}
module.exports = linkfl
