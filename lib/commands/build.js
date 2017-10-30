/**
 * Build docker image
 * @function build
 */
'use strict'

const {assertHasDocker} = require('../helpers')
const spawnWithInput = require('../helpers/spawn_with_input')

/** @lends build */
async function build (tag, dockerfile) {
  await assertHasDocker()
  return spawnWithInput('docker', [
    'build',
    '--tag',
    tag,
    '-'
  ], dockerfile)
}

module.exports = build
