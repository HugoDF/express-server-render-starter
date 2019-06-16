const {Router} = require('express');
const pages = require('./pages');

const router = new Router();

router.get('/', pages.home);
router.get('/about', pages.about);
router.get('/dashboard', pages.dashboard);

module.exports = router;
