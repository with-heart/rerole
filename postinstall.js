const path = require('path')
const emoji = require('node-emoji')
const chalk = require('chalk')

const reroleFile = path.join(__dirname, 'rerole')

const symbol = emoji.emojify(':fire::fire::fire:')

const explanation = chalk.red(
  `In order for rerole to function, you ${chalk.bold(
    'MUST',
  )} first source the rerole sh script file. To do that, run the following command:`,
)

const sourceCommand = chalk.bold.underline.red(`source ${reroleFile}`)

const rcMessage = chalk.red(
  'To load this script each time you open your terminal, add the command line to your .bashrc or .zshrc file.',
)

console.log(
  `
    ${symbol} ${explanation}

      ${sourceCommand}

    ${rcMessage} ${symbol}
  `,
)
