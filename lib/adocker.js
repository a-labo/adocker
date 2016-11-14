/**
 * A docker
 * @function adocker
 */
'use strict'

const docker = require('./helpers/docker')
const commands = require('./commands')

const adocker = docker.bind(this)

Object.assign(adocker, commands, { commands })

module.exports = adocker
