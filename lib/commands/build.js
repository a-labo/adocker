/**
 * Build docker image
 * @function build
 */
'use strict'

const { docker } = require('../helpers')

/** @lends build */
function build (...args) {
  return docker('build', ...args)
}

module.exports = build
