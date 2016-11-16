/**
 * Spawn inherit
 * @function spawnInherit
 */
'use strict'

const { spawn } = require('child_process')

/** @lends spawnInherit */
function spawnInherit (cmd, cmdArgs) {
  return new Promise((resolve, reject) => {
    let spawned = spawn(cmd, cmdArgs, {
      stdio: 'inherit',
      env: process.env
    })
    spawned.on('error', (err) => reject(err))
    spawned.on('exit', () => resolve())
  })
}

module.exports = spawnInherit
