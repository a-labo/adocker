/**
 * Build docker image
 * @function build
 */
'use strict'

const { docker } = require('../helpers')

/** @lends exec */
function exec (...args) {
  return docker('exec', ...args)
}

module.exports = exec
