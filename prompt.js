const inquirer = require('inquirer')

const showPrompt = roles =>
  inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: 'Choose the role you wish to assume',
      choices: roles,
    },
  ])

module.exports = {
  showPrompt,
}
