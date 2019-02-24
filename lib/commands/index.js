/**
 * Docker commands
 * @module commands
 */

'use strict'


const build = require('./build')
const exec = require('./exec')
const inspect = require('./inspect')
const logs = require('./logs')
const network = require('./network')
const purge = require('./purge')
const remove = require('./remove')
const run = require('./run')
const start = require('./start')
const stop = require('./stop')

exports.build = build
exports.exec = exec
exports.inspect = inspect
exports.logs = logs
exports.network = network
exports.purge = purge
exports.remove = remove
exports.run = run
exports.start = start
exports.stop = stop

module.exports = {
  build,
  exec,
  inspect,
  logs,
  network,
  purge,
  remove,
  run,
  start,
  stop
}
