const bcrypt = require('bcrypt');
const User = require('../src/persistence/users');

async function run() {
  await User.create('hugo@boss.com', await bcrypt.hash('password', 10));
  console.log('Added users');
}

run()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error.stack);
    process.exit(1);
  });
