const fs = require('fs')
const os = require('os')
const {readConfigFile, findRoleNames, writeRoleFile} = require('./fns')

jest.mock('fs')
jest.mock('os')

const fileContents = `
[default]
key=value

[profile profile1]
key=value

[profile profile2]
key=value

[profile pro.file-3]
key=value
`

afterEach(() => {
  jest.resetAllMocks()
})

test('readConfigFile returns contents of ~/.aws/config', () => {
  const homeDirectory = '/Users/username'

  os.homedir.mockReturnValue(homeDirectory)
  fs.readFileSync.mockReturnValue(fileContents)

  const contents = readConfigFile()

  expect(contents).toEqual(fileContents)
  expect(fs.readFileSync).toHaveBeenCalledWith(
    `${homeDirectory}/.aws/config`,
    'utf8',
  )
})

test('findRoleNames returns all valid role names from config file', () => {
  const roleNames = findRoleNames(fileContents)

  expect(roleNames).toEqual(['default', 'profile1', 'profile2', 'pro.file-3'])
})

test('writeRoleFile writes the provided role to "__reroleRoleName"', () => {
  const pwd = process.cwd()
  const role = 'AWSRole'

  writeRoleFile(role)

  expect(fs.writeFileSync).toHaveBeenCalledWith(`${pwd}/__reroleRoleName`, role)
})
