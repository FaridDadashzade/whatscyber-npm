const request = require('request')
const fs = require('fs')
const exec = require('child_process').exec
const os = require('os')
async function update (Language) {
  let data = ''
  if (Language == 'TR') {
    data = '```Güncellemek İçin``` *.update now* ```Yazın.``` \n\n'
  } else if (Language == 'AZ') {
    data = '```WhatsCyber-i Yeniləmək üçün``` *.update now* \n\n'
  } else if (Language == 'EN') {
    data = '```To Update WhatsCyber``` use *.update now* \n\n'
  } else if (Language == 'RU') {
    data = '```Чтобы обновить WhatsCyber, используйте``` *.update now* \n\n'
  } else if (Language == 'HI') {
    data = '```WhatsCyber को अपडेट करने के लिए``` *.update now* ```का उपयोग करें``` \n\n'
  } else if (Language == 'ML') {
    data = '```WhatsCyber അപ്‌ഡേറ്റ് ചെയ്യുന്നതിന്``` *.update now* ```ഉപയോഗിക്കുക```'
  } else if (Language == 'ES') {
    data = '```Para actualizar WhatsCyber use``` *.update now* \n\n'
  } else if (Language == 'PT') {
    data = '```Para atualizar o WhatsCyber, use``` *.update now* \n\n'
  } else if (Language == 'ID') {
    data = '```Untuk Memperbarui WhatsCyber gunakan``` *.update now* \n\n'
  }
  return data
}
module.exports = update
