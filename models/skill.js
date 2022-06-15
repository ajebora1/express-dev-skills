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
    getOne
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id);
  }