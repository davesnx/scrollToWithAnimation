const fs = require('fs')
const package = require('./package.json')

fs.writeFileSync('./src/package-info.json', JSON.stringify({
  name: package.name,
  version: package.version,
  repository: package.repository
}))
