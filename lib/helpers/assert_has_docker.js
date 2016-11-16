/**
 * Assert hasdocker
 * @function assertHasDocker
 */
'use strict'

const hasBinAsync = require('./has_bin_async')
const co = require('co')

/** @lends assertHasDocker */
function assertHasDocker () {
  const COMMAND = 'docker'
  return co(function * () {
    let has = yield hasBinAsync(COMMAND)
    if (!has) {
      let msg = `[adocker] Command: ${COMMAND} not found. Please install one from official page: \n    https://docs.docker.com/engine/installation/`
      throw new Error(msg)
    }
  })
}

module.exports = assertHasDocker
