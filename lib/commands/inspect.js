/**
 * Inspect container or image
 * @function inspect
 * @returns {Promise}
 */
'use strict'

const co = require('co')
const debug = require('debug')('adocker:docker')
const { spawnToJson, assertHasDocker, parseArgs } = require('../helpers')

/** @lends inspect */
function inspect (...args) {
  return co(function * () {
    yield assertHasDocker()
    let dockerArgs = [ 'inspect', ...parseArgs(args) ]
    debug('dockerArgs', dockerArgs)
    return spawnToJson('docker', dockerArgs)
  })
}

module.exports = inspect
