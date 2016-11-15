/**
 * Remove docker image
 * @function purge
 */
'use strict'

const { docker } = require('../helpers')

/** @lends purge */
function purge (...args) {
  return docker('rmi', ...args)
}

module.exports = purge
