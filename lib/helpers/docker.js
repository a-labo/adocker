/**
 * Spawn docker command
 * @function docker
 * @returns {Promise}
 */
'use strict'

const debug = require('debug')('adocker:docker')
const parseArgs = require('./parse_args')
const assertHasDocker = require('./assert_has_docker')
const spawnInherit = require('./spawn_inherit')

/** @lends docker */
async function docker (...args) {
  await assertHasDocker()
  const dockerArgs = parseArgs(args)
  debug('dockerArgs', dockerArgs)
  return spawnInherit('docker', dockerArgs)
}

module.exports = docker
