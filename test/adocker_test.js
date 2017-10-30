/**
 * Test case for adocker.
 * Runs with mocha.
 */
'use strict'

const adocker = require('../lib/adocker.js')
const assert = require('assert')


describe('adocker', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Network command', async () => {
    let { network } = adocker
    await network.create('hoge')
    await network.inspect('hoge')
    await network.remove('hoge')
  })
})

/* global describe, before, after, it */
