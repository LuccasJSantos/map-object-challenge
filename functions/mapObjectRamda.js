const R = require ('ramda')

module.exports = 
  R.map (R.ifElse (R.equals (0))
                  (R.always ('Infinity'))
                  (R.divide (100)))
