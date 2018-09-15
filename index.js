#!/usr/bin/env node

const cmd = process.argv[2]

if (cmd && cmd === 'showCommand') {
  require('./postinstall')
  process.exit(0)
}

const {readConfigFile, findRoleNames, writeRoleFile} = require('./fns')
const {showPrompt} = require('./prompt')

const contents = readConfigFile()
const roles = findRoleNames(contents)

showPrompt(roles).then(({role}) => {
  writeRoleFile(role)
})
