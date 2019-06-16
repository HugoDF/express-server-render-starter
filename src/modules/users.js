const User = require('../persistence/users');

async function create(email, password) {
  return User.create(email, password);
}

module.exports = {
  create
};
