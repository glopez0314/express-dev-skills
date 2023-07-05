const skills = [
    {id: 163881, skill: 'HTML', learned: true},
    {id: 799452, skill: 'CSS', learned: true},
    {id: 143643, skill: 'JavaScript', learned: true},
    {id: 278694, skill: 'Python', learned: false},
    {id: 126375, skill: 'Express', learned: false},
];

module.exports = {
    getAll,
    getOne,
}

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}