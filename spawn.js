const { spawn } = require('child_process');

const child = spawn('cmd', ['/']);

child.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

child.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

//error event
child.on('error', (error) => console.log(`error: ${error.message}`));
