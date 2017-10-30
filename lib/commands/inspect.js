/**
 * Inspect container or image
 * @function inspect
 * @returns {Promise}
 */
'use strict'

const debug = require('debug')('adocker:docker')
const {spawnToJson, assertHasDocker, parseArgs} = require('../helpers')

/** @lends inspect */
async function inspect (...args) {
  await assertHasDocker()
  const dockerArgs = ['inspect', ...parseArgs(args)]
  debug('dockerArgs', dockerArgs)
  return spawnToJson('docker', dockerArgs)
}

module.exports = inspect
