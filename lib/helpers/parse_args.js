/**
 * @function parseArgs
 */
'use strict'

const flatten = (result, value) => [].concat(result, value)

/** @lends parseArgs */
function parseArgs (args) {
  return args.map((arg) => {
    const needsParse = (typeof arg === 'object') && (arg !== null)
    if (needsParse) {
      return Object.keys(arg).map((key) => {
        let prefix = (key.length === 1 ? '-' : '--') + key
        return [].concat(arg[key])
          .map((value) => {
            if (value === false) {
              return []
            }
            if (value === true) {
              return [prefix]
            }
            return [prefix, value].filter(Boolean)
          })
          .reduce(flatten, [])
      }).reduce(flatten, [])
    } else {
      return arg
    }
  }).reduce(flatten, [])
}

module.exports = parseArgs
