/**
 * Test case for adocker.
 * Runs with mocha.
 */
'use strict'

const adocker = require('../lib/adocker.js')
const assert = require('assert')
const co = require('co')

describe('adocker', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Network command', () => co(function * () {
    let { network } = adocker
    yield network.create('hoge')
    yield network.inspect('hoge')
    yield network.remove('hoge')
  }))
})

/* global describe, before, after, it */
