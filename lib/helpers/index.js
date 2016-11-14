/**
 * Docker helpers
 * @module helpers
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get docker () { return d(require('./docker')) },
  get parseArgs () { return d(require('./parse_args')) }
}
