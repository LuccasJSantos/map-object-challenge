const R = require ('ramda')

module.exports =
  R.pipe(
    R.toPairs,
    R.reduce((acc, [k, v]) => ({
      ...acc,
      [k]: v ? 100 / v : 'Infinity'
    }), {})
  )
