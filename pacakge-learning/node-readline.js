// https://nodejs.org/dist/latest-v18.x/docs/api/readline.html
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});

rl.on('SIGINT', () => {
  // 敲击 CTRL + C，该回调会被触发！
  process.emit('SIGINT');
});

process.on('SIGINT', () => {
  console.log('[SIGINT]CTRL + C is input so the process is terminaled.');
  process.exit();
});