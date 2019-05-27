'use strict'

const longest = obj => {
  let currentLongest = 0
  Object.keys(obj).forEach(key => {
    if (key.length > currentLongest) currentLongest = key.length
  })

  return currentLongest
}

const padRight = (base, length) =>
  base +
  Array(length - base.length)
    .fill(' ')
    .join('')

module.exports = { longest, padRight }
