/**
 * Start docker container
 * @function start
 */
'use strict'

const { docker } = require('../helpers')

/** @lends start */
function start (...args) {
  return docker('start', ...args)
}

module.exports = start
