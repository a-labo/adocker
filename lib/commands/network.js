/**
 * Docker network command
 * @function network
 * @param {...string} args - Network command args
 * @returns {Promise}
 */
'use strict'

const { docker } = require('../helpers')

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
   * @param {string} name - Network name
   */
  inspect: network.bind(null, 'inspect'),
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
