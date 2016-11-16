/**
 * Docker command wrapper
 * @module adocker
 * @version 1.4.0
 */

'use strict'

const adocker = require('./adocker')

let lib = adocker.bind(this)

Object.assign(lib, adocker, {
  adocker
})

module.exports = lib
