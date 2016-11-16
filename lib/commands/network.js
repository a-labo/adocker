/**
 * Docker network command
 * @function network
 * @param {...string} args - Network command args
 * @returns {Promise}
 */
'use strict'

const { docker } = require('../helpers')
const { spawnToJson, assertHasDocker, parseArgs } = require('../helpers')

/** @lends network */
function network (...args) {
  return docker('network', ...args)
}

Object.assign(network, {
  /**
   * Create docker network
   * @param {string} name - Network name
   * @returns {Promise}
   */
  create: network.bind(null, 'create'),
  /**
   * Inspect docker network
   * @returns {Promise}
   */
  inspect: (...args) => assertHasDocker().then(() =>
    spawnToJson('docker', [ 'network', 'inspect', ...parseArgs(args) ])
  ),
  /**
   * CHeck if has promise
   * @returns {Promise}
   */
  has: (...args) => assertHasDocker().then(() =>
    spawnToJson('docker', [ 'network', 'inspect', ...parseArgs(args) ]).then(([info]) => !!info)
  ),
  /**
   * Remove docker network
   * @param {string} name - Network name
   * @returns {Promise}
   */
  remove: network.bind(null, 'rm'),
  /**
   * List docker networks
   * @param {string} name - Network name
   * @returns {Promise}
   */
  ls: network.bind(null, 'ls')
})

module.exports = network
