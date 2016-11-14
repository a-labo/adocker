/**
 * Spawn docker command
 * @function docker
 * @returns {Promise}
 */
'use strict'

const co = require('co')
const hasbin = require('hasbin')
const debug = require('debug')('adocker:docker')
const { spawn } = require('child_process')

const hasAsync = (cmd) => new Promise((resolve) =>
  hasbin(cmd, (has) => resolve(has))
)

const flatten = (result, value) => [].concat(result, value)

const parseArgs = (args) => args.map((arg) => {
  if (typeof arg === 'object') {
    return Object.keys(arg).map((key) => {
      let prefix = (key.length === 1 ? '-' : '--')
      let value = arg[ key ]
      if (value === false) {
        return []
      }
      if (value === true) {
        return [ prefix ]
      }
      return [ prefix + key, value ].filter(Boolean)
    }).reduce(flatten, [])
  } else {
    return arg
  }
}).reduce(flatten, [])

/** @lends docker */
function docker (...args) {
  let COMMAND = 'docker'
  return co(function * () {
    let has = yield hasAsync(COMMAND)
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
