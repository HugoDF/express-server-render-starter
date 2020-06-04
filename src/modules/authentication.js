const bcrypt = require('bcrypt');

const Session = require('../persistence/sessions');
const User = require('../persistence/users');

module.exports = {
  async getSession(sessionId) {
    // eslint-disable-next-line unicorn/no-fn-reference-in-iterator
    const session = await Session.find(sessionId);
    return session;
  },
  async createSession(email, password) {
    // eslint-disable-next-line unicorn/no-fn-reference-in-iterator
    const user = await User.find(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return null;
    }

    const sessionId = await Session.create(user.id);
    return sessionId;
  }
};
