/**
 * Docker helpers
 * @module helpers
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get docker () { return d(require('./docker')) },
  get hasBinAsync () { return d(require('./has_bin_async')) },
  get parseArgs () { return d(require('./parse_args')) }
}
