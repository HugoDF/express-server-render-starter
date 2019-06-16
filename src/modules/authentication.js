const bcrypt = require('bcrypt');

const Session = require('../persistence/sessions');
const User = require('../persistence/users');

module.exports = {
  async getSession(sessionId) {
    const session = await Session.find(sessionId);
    return session;
  },
  async createSession(email, password) {
    const user = await User.find(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return null;
    }

    const sessionId = await Session.create(user.id);
    return sessionId;
  }
};
