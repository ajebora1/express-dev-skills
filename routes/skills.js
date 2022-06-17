var express = require('express');
var router = express.Router();

//require the controller that exports skills CRUD functions
var skillsCtrl = require('../controllers/skills')

/* GET skills listing. */
router.get('/', skillsCtrl.index);

// create a new form
router.get('/new', skillsCtrl.new);

//get individual skills
router.get('/:id', skillsCtrl.show);

router.get('/:id/edit', skillsCtrl.edit);

// create a new route for post

router.post('/', skillsCtrl.create);

//delete route
router.delete('/:id', skillsCtrl.delete);

router.put('/:id', skillsCtrl.update);

module.exports = router;