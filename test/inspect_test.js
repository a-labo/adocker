/**
 * Test case for inspect.
 * Runs with mocha.
 */
'use strict'

const inspect = require('../lib/commands/inspect.js')
const assert = require('assert')


describe('inspect', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Inspect', async () => {
    assert.deepEqual(await inspect('__not_exists__'), [])
  })
})

/* global describe, before, after, it */
