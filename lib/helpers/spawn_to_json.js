/**
 * @function spawnToJson
 */
'use strict'

const { spawn } = require('child_process')

/** @lends spawnToJson */
function spawnToJson (cmd, cmdArgs) {
  return new Promise((resolve, reject) => {
    let spawned = spawn(cmd, cmdArgs, {
      env: process.env
    })
    let result = ''
    spawned.stdout.on('data', (data) => {
      result += data.toString()
    })
    spawned.on('error', (err) => reject(err))
    spawned.on('exit', () => resolve(JSON.parse(result)))
  })
}

module.exports = spawnToJson
