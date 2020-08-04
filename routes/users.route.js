var express = require("express");
var router = express.Router();
var controller = require('../controllers/users.controller.js')
var validate = require('../middleware/validate/createUser.validate.js')

router.get('/', controller.index);
router.get('/create', controller.create);
router.post('/create',validate.postCreate, controller.postCreate);
router.get('/search', controller.search);
router.get('/:id', controller.get);

module.exports = router;