const authentication = require('../modules/authentication');

module.exports = async function(req, res) {
  const sessionId = req.session && req.session.sessionId;
  if (!sessionId) {
    return res.redirect('/login');
  }

  const session = await authentication.getSession(sessionId);
  if (!session) {
    return res.redirect('/login');
  }

  return res.render('dashboard.html', {userId: session.userId});
};
