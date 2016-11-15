/**
 * Build docker image
 * @function build
 */
'use strict'

const { spawn } = require('child_process')
const co = require('co')
const { hasBinAsync } = require('../helpers')

/** @lends build */
function build (tag, dockerfile) {
  let COMMAND = 'docker'
  return co(function * () {
    let has = yield hasBinAsync(COMMAND)
    if (!has) {
      let msg = `[adocker] Command: ${COMMAND} not found. Please install one from official page: \n    https://docs.docker.com/engine/installation/`
      throw new Error(msg)
    }
    yield new Promise((resolve, reject) => {
      let spawned = spawn('docker', [
        'build',
        '--tag',
        tag,
        '-'
      ], {
        stdio: [ 'pipe', 'inherit', 'inherit' ]
      })
      spawned.stdin.write(dockerfile)
      spawned.stdin.end()
    })
  })
}

module.exports = build
