const authentication = require('../modules/authentication');

module.exports = async function (request, response) {
  try {
    const sessionId = request.session && request.session.sessionId;
    if (!sessionId) {
      return response.redirect('/login');
    }

    const session = await authentication.getSession(sessionId);
    if (!session) {
      return response.redirect('/login');
    }

    return response.render('dashboard.html', {userId: session.userId});
  } catch (error) {
    console.error(`dashboard >> Error: ${error.stack}`);
    return response.status(500).render('500.html', {message: error.toString()});
  }
};
