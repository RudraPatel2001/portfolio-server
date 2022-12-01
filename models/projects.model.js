const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    p_name: { type: String, required: true },
    p_link: { type: String, required: true },
    p_img: { type: String, required: true },
    p_des: { type: String, required: true },
    skills: { type: String, required: true },
    live: { type: String, required: true },
    p_sc_link: { type: String, required: true }
})

const Project = mongoose.model('Projects', projectSchema)

module.exports = Project;