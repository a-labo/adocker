/**
 * Run docker container
 * @function run
 */
'use strict'

const { docker } = require('../helpers')

/** @lends run */
function run (...args) {
  return docker('run', ...args)
}

module.exports = run
