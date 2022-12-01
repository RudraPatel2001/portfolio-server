const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const skillSchema = new Schema({
    skill: { type: String, required: true },
    img: { type: String, required: true }
})

const Skills = mongoose.model('Skills', skillSchema);

module.exports = Skills;