const { Router } = require('express');
const controller = require('../controller/controller');

router = Router();

router.get('/', controller.home);
router.get('/login', controller.login_get);
router.get('/signup', controller.signup_get);
router.get('/post', controller.post_get);

module.exports = router