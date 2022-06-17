const skills = [
    {id: 101, skill: 'CSS', done: true},
    {id: 102, skill: 'HTML', done: true},
    {id: 103, skill: 'JavaScript', done: true},
    {id: 104, skill: 'Node.js', done: true},
    {id: 105, skill: 'Express', done: true},
    {id: 106, skill: 'React', done: false},
    {id: 107, skill: 'Python', done: false}
  ];

  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update,
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id);
  }

  function create(skill) {
    skill.id = Date.now() % 10000000;
    skill.done = false;
    skills.push(skill)
  }

  function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1)
  }

  function update(editContent, id) {
    id = parseInt(id);
    const skillUpdate = skills.find(skill => skill.id === id);
    skillUpdate.skill = editContent.skill
  }