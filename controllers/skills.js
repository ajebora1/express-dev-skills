const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkills,
    create,
    delete: deleteSkills,
    edit,
    update
};

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
};

function show(req, res) {
    res.render('skills/show', {
      skill: Skill.getOne(req.params.id)  
    });
}

function newSkills(req, res) {
    res.render('skills/new');
}

function create(req, res) {
    Skill.create(req.body)
    res.redirect('/skills');
}

function deleteSkills(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

function edit(req, res) {
    res.render('skills/edit', {
        skill: Skill.getOne(req.params.id)
    });
}

function update(req, res) {
    Skill.update(req.body, req.params.id);
    res.redirect(`/skills/${req.params.id}`);
}
