const {Router} = require('express');
const pages = require('./pages');
const login = require('./pages/login');

const router = new Router();

router.get('/', pages.home);
router.get('/about', pages.about);
router.get('/dashboard', pages.dashboard);

router.get('/login', login.get);
router.post('/login', login.post);

module.exports = router;
