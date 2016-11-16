/**
 * Test case for inspect.
 * Runs with mocha.
 */
'use strict'

const inspect = require('../lib/commands/inspect.js')
const assert = require('assert')
const co = require('co')

describe('inspect', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Inspect', () => co(function * () {
    assert.deepEqual(yield inspect('__not_exists__'), [])
  }))
})

/* global describe, before, after, it */
