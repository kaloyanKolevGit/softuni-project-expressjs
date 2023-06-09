const mongoose = require('mongoose')
const cubeSchema = new mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String,
    difficultyLevel: Number,
})
const Cube = mongoose.model('Cube', cubeSchema);
exports.getAll = async function(search, from, to) {
    let result = Cube.find().lean();
    if (search) {
        result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (from) {
        result = result.filter(cube => cube.difficultyLevel >= Number(from));
    }

    if (to) {
        result = result.filter(cube => cube.difficultyLevel <= Number(to));
    }

    return result;
};

exports.getOne = (_id) => Cube.findById(_id);

exports.create = (cubeData) => {
    const newCube = new Cube({
        ...cubeData,
    });

    newCube.save();

    return newCube;
};