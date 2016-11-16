/**
 * Docker network command
 * @function network
 * @param {...string} args - Network command args
 * @returns {Promise}
 */
'use strict'

const { docker } = require('../helpers')
const { spawnToJson, assertHasDocker, parseArgs } = require('./helpers')

/** @lends network */
function network (...args) {
  return docker('network', ...args)
}

Object.assign(network, {
  /**
   * Create docker network
   * @param {string} name - Network name
   */
  create: network.bind(null, 'create'),
  /**
   * Inspect docker network
   */
  inspect: (...args) => assertHasDocker().then(() =>
    spawnToJson('docker', [ 'inspect', ...parseArgs(args) ])
  ),
  /**
   * Remove docker network
   * @param {string} name - Network name
   */
  remove: network.bind(null, 'rm'),
  /**
   * List docker networks
   * @param {string} name - Network name
   */
  ls: network.bind(null, 'ls')
})

module.exports = network
