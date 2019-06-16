const User = require('../src/modules/users');

async function run() {
  await User.create('hugo@boss.com', 'password');
  console.log('Added users');
}

run()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error.stack);
    process.exit(1);
  });
