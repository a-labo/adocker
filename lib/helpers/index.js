/**
 * Docker helpers
 * @module helpers
 */

'use strict'


const assertHasDocker = require('./assert_has_docker')
const docker = require('./docker')
const hasBinAsync = require('./has_bin_async')
const parseArgs = require('./parse_args')
const spawnInherit = require('./spawn_inherit')
const spawnToJson = require('./spawn_to_json')
const spawnWithInput = require('./spawn_with_input')

exports.assertHasDocker = assertHasDocker
exports.docker = docker
exports.hasBinAsync = hasBinAsync
exports.parseArgs = parseArgs
exports.spawnInherit = spawnInherit
exports.spawnToJson = spawnToJson
exports.spawnWithInput = spawnWithInput

module.exports = {
  assertHasDocker,
  docker,
  hasBinAsync,
  parseArgs,
  spawnInherit,
  spawnToJson,
  spawnWithInput
}
