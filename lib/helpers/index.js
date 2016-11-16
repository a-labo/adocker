/**
 * Docker helpers
 * @module helpers
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get assertHasDocker () { return d(require('./assert_has_docker')) },
  get docker () { return d(require('./docker')) },
  get hasBinAsync () { return d(require('./has_bin_async')) },
  get parseArgs () { return d(require('./parse_args')) },
  get spawnInherit () { return d(require('./spawn_inherit')) },
  get spawnToJson () { return d(require('./spawn_to_json')) },
  get spawnWithInput () { return d(require('./spawn_with_input')) }
}
