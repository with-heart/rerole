const {readConfigFile, findRoleNames, writeRoleFile} = require('./fns')
const {showPrompt} = require('./prompt')

const contents = readConfigFile()
const roles = findRoleNames(contents)

showPrompt(roles).then(({role}) => {
  writeRoleFile(role)
})
