/**
 * Docker commands
 * @module commands
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get network () { return d(require('./network')) }
}
