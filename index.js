'use strict'

module.exports = function removeHtmlExtension(filePath) {
  if (typeof filePath !== 'string') {
    throw new TypeError('remove-html-extension expected a string')
  }

  htmlExtensions = ['html', 'html']
  var regex = new RegExp('\\.(' + htmlExtensions.join('|') + ')$', 'i')
  return filePath.replace(regex, '')
}
