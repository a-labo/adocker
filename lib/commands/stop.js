/**
 * Stop docker container
 * @function stop
 */
'use strict'

const { docker } = require('../helpers')

/** @lends stop */
function stop (...args) {
  return docker('stop', ...args)
}

module.exports = stop
