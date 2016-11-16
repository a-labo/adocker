/**
 * Build docker image
 * @function build
 */
'use strict'

const co = require('co')
const { assertHasDocker } = require('../helpers')
const spawnWithInput = require('../helpers/spawn_with_input')

/** @lends build */
function build (tag, dockerfile) {
  return co(function * () {
    yield assertHasDocker()
    return spawnWithInput('docker', [
      'build',
      '--tag',
      tag,
      '-'
    ], dockerfile)
  })
}

module.exports = build
