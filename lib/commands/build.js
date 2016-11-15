/**
 * Build docker image
 * @function build
 */
'use strict'

const { spawn } = require('child_process')

/** @lends build */
function build (tag, dockerfile) {
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
}

module.exports = build
