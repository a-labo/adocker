/**
 * Docker commands
 * @module commands
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get build () { return d(require('./build')) },
  get exec () { return d(require('./exec')) },
  get logs () { return d(require('./logs')) },
  get network () { return d(require('./network')) },
  get purge () { return d(require('./purge')) },
  get remove () { return d(require('./remove')) },
  get run () { return d(require('./run')) },
  get start () { return d(require('./start')) },
  get stop () { return d(require('./stop')) }
}
