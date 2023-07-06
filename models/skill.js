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
    create,
    deleteOne,
}

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.learned = false;
    skills.push(skill);
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}