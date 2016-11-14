'use strict'

const { network } = require('adocker/commands')
const co = require('co')

co(function * () {
  network.create('my-docker-network-o1')

  /* ... */

  network.remove('my-docker-network-o1')
}).catch((err) => console.error(err))
