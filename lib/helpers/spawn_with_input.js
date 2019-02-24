/**
 * @function spawnWithInput
 */
'use strict'

const { spawn } = require('child_process')

/** @lends spawnWithInput */
function spawnWithInput(cmd, cmdArgs, input) {
  return new Promise((resolve, reject) => {
    const spawned = spawn(cmd, cmdArgs, {
      stdio: ['pipe', 'inherit', 'inherit'],
      env: process.env
    })
    spawned.stdin.write(input)
    spawned.stdin.end()

    spawned.stdout && spawned.stdout.on('data', (d) => console.log(String(d)))
    spawned.stderr && spawned.stderr.on('data', (d) => console.error(String(d)))

    spawned.on('error', (err) => reject(err))
    spawned.on('exit', () => resolve())

    return spawned
  })
}

module.exports = spawnWithInput
