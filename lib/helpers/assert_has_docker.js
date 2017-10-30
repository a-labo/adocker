/**
 * Assert hasdocker
 * @function assertHasDocker
 */
'use strict'

const hasBinAsync = require('./has_bin_async')

/** @lends assertHasDocker */
async function assertHasDocker () {
  const COMMAND = 'docker'
  const has = await hasBinAsync(COMMAND)
  if (!has) {
    let msg = `[adocker] Command: ${COMMAND} not found. Please install one from official page: \n    https://docs.docker.com/engine/installation/`
    throw new Error(msg)
  }
}

module.exports = assertHasDocker
