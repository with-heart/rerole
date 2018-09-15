const fs = require('fs')
const os = require('os')
const path = require('path')

const OPTIONS_REGEX = /\[(default)|profile (.*)\]/g

const readConfigFile = () => {
  const file = path.join(os.homedir(), '.aws', 'config')
  return fs.readFileSync(file, 'utf8')
}

const findRoleNames = contents => {
  const matches = []
  let match = OPTIONS_REGEX.exec(contents)

  while (match !== null) {
    if (match[1] || match[2]) {
      matches.push(match[1] || match[2])
    }
    match = OPTIONS_REGEX.exec(contents)
  }

  return matches
}

const writeRoleFile = role => {
  const file = path.join(__dirname, '__reroleRoleName')
  fs.writeFileSync(file, role)
}

module.exports = {
  readConfigFile,
  findRoleNames,
  writeRoleFile,
}
