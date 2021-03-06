const { concat, trim, toLower, replace, compose } = require('ramda')

// returns "medication_amlodipine_20mg_syrup"
// prefix: "med_"  value:  "Amlodipine 20mg Syrup"  =>  "med_amlodipine_20mg_syrup"

module.exports = prefix => value =>
  compose(trim, toLower, replace(/ /g, '_'), concat(prefix))(value)
