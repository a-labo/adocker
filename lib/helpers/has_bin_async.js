'use strict'

const hasbin = require('hasbin')

/** @lends hasBinAsync */
function hasBinAsync (cmd) {
  return new Promise((resolve) =>
    hasbin(cmd, (has) => resolve(has))
  )
}

module.exports = hasBinAsync
