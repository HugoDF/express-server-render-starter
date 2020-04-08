const auth = require('../modules/authentication');

module.exports = {
  async get(request, response) {
    return response.render('login.html');
  },
  async post(request, response) {
    try {
      const {email, password} = request.body;
      if (!email || !password) {
        return response.render('login.html', {
          error: true,
          form: {email, password}
        });
      }

      const sessionId = await auth.createSession(email, password);

      if (!sessionId) {
        return response.render('login.html', {
          error: true,
          form: {email, password}
        });
      }

      request.session.sessionId = sessionId;

      return response.redirect('/dashboard');
    } catch (error) {
      console.error(`POST /login >> Error: ${error.stack}`);
      return response
        .status(500)
        .render('500.html', {message: error.toString()});
    }
  }
};
