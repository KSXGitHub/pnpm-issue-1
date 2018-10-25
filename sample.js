const chalk = require('chalk').default

const title = branch => [
  chalk.bold(`packages/${branch}`),
  chalk.cyanBright('test$'),
  'node ./test.js'
].join(' ')

const done = chalk.dim('done. (status: 0)')

console.log(`
  ${title('foo')}
    | Maecenas vitae lectus sit ...
    | Maecenas maximus arcu ...
    | Cras sed magna sed ...
    ${done}

  ${title('bar')}
    | Maecenas vitae lectus sit ...
    | Maecenas maximus arcu ...
    | Cras sed magna sed ...
    ${done}

`)
