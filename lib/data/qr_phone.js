async function phone (number, name) {
  if (!number || !name) {
    throw new Error('Missin Phone Number or Name!')
  }
  let data = ''
  data = number.startsWith('90') ? '*Bu Kodu Heçkəslə Paylaşmayın!*' + ' ' + name : '*Do Not Share This Code With Anyone!*' + ' ' + name
  return data
}
module.exports = phone
