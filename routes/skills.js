var express = require('express');
var router = express.Router();

//require the controller that exports skills CRUD functions
var skillsCtrl = require('../controllers/skills')

/* GET skills listing. */
router.get('/', skillsCtrl.index);

//get individual skills
router.get('/:id', skillsCtrl.show);

module.exports = router;