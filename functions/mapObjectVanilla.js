module.exports = object =>
  Object.entries(object)
    .reduce((acc, [k, v]) => ({
      ...acc,
      [k]: v ? 100 / v : 'Infinity'
    }), {})
