/* eslint-disable unicorn/no-process-exit */
const User = require('../src/modules/users');

async function run() {
  await User.create('user@example.com', 'password');
  console.log('Added users');
}

run()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error.stack);
    process.exit(1);
  });
