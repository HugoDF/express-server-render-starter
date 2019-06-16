const auth = require('../modules/authentication');

module.exports = {
  async get(req, res) {
    return res.render('login.html');
  },
  async post(req, res) {
    const {email, password} = req.body;
    if (!email || !password) {
      return res.render('login.html', {error: true, form: {email, password}});
    }

    const sessionId = await auth.createSession(email, password);

    if (!sessionId) {
      return res.render('login.html', {error: true, form: {email, password}});
    }

    req.session.sessionId = sessionId;

    return res.redirect('/dashboard');
  }
};
