const mapObjectVanilla = require('./functions/mapObjectVanilla')
const mapObjectRamda = require('./functions/mapObjectRamda')
const mapObjectRamdaEquivalent = require('./functions/mapObjectRamdaEquivalent')
const mapObjectVanillaRamda = require('./functions/mapObjectVanillaRamda')

console.log (
  'mapObjectVanilla:\n',
  mapObjectVanilla({ a: 5, b: 0, c: 50 })
)

console.log (
  'mapObjectRamdaEquivalent:\n',
  mapObjectRamdaEquivalent({ a: 5, b: 0, c: 50 })
)

console.log (
  'mapObjectRamda:\n',
  mapObjectRamda ({ a: 5, b: 0, c: 50 })
)

console.log (
  'mapObjectVanillaRamda:\n',
  mapObjectVanillaRamda({ a: 5, b: 0, c: 50 })
)
