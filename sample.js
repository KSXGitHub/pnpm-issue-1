const chalk = require('chalk').default

const title = branch => [
  chalk.bold(`packages/${branch}`),
  chalk.cyanBright('test$'),
  'node ./test.js'
].join(' ')

const done = status => status
  ? chalk.red('error!') + ' ' + chalk.dim(`(status: ${status})`)
  : chalk.dim('done.')

console.log(`
  ${title('foo')}
    | Maecenas vitae lectus sit ...
    | Maecenas maximus arcu ...
    | Cras sed magna sed ...
    ${done(0)}

  ${title('bar')}
    | Maecenas vitae lectus sit ...
    | Maecenas maximus arcu ...
    | Cras sed magna sed ...
    ${done(1)}

`)
