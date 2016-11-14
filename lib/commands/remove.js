/**
 * Remove docker container
 * @function remove
 */
'use strict'

const { docker } = require('../helpers')

/** @lends remove */
function remove (...args) {
  return docker('rm', ...args)
}

module.exports = remove
