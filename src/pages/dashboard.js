const authentication = require('../modules/authentication');

module.exports = async function(req, res) {
  try {
    const sessionId = req.session && req.session.sessionId;
    if (!sessionId) {
      return res.redirect('/login');
    }

    const session = await authentication.getSession(sessionId);
    if (!session) {
      return res.redirect('/login');
    }

    return res.render('dashboard.html', {userId: session.userId});
  } catch (error) {
    console.error(`dashboard >> Error: ${error.stack}`);
    return res.status(500).render('500.html', {message: error.toString()});
  }
};
