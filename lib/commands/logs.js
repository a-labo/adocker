/**
 * Show logs of docker container
 * @function logs
 */
'use strict'

const { docker } = require('../helpers')

/** @lends logs */
function logs (...args) {
  return docker('logs', ...args)
}

module.exports = logs
