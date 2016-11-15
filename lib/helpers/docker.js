/**
 * Spawn docker command
 * @function docker
 * @returns {Promise}
 */
'use strict'

const co = require('co')
const debug = require('debug')('adocker:docker')
const parseArgs = require('./parse_args')
const { spawn } = require('child_process')
const hasBinAsync = require('./has_bin_async')

/** @lends docker */
function docker (...args) {
  let COMMAND = 'docker'
  return co(function * () {
    let has = yield hasBinAsync(COMMAND)
    if (!has) {
      let msg = `[adocker] Command: ${COMMAND} not found. Please install one from official page: \n    https://docs.docker.com/engine/installation/`
      throw new Error(msg)
    }
    yield new Promise((resolve, reject) => {
      let dockerArgs = parseArgs(args)
      debug('dockerArgs', dockerArgs)
      let spawned = spawn(COMMAND, dockerArgs, {
        stdio: 'inherit',
        env: process.env
      })
      spawned.on('error', (err) => reject(err))
      spawned.on('exit', () => resolve())
    })
  })
}

module.exports = docker
