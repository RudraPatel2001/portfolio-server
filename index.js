const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Skills = require('./models/skills.model')
const Project = require('./models/projects.model')
const app = express()
require('dotenv').config()

app.use(cors({ origin: "https://rudra-patel.netlify.app" }))
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ limit: "50mb" }))

const uri = process.env.ATLAS_URI
const PORT = process.env.PORT || 5000

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Success'))
    .catch(e => console.log(e.message))

app.get('/', (_, res) => {
    res.send('This is Rudra Patel\'s Portfolio')
})

app.get("/skills", async (_, res) => {
    await Skills.find()
        .then(r => res.json(r))
        .catch(e => res.json(e))
})

app.get("/projects", async (_, res) => {
    Project.find()
        .then(r => res.json(r))
        .catch(e => res.json(e))
})

app.post("/projects", async (req, res) => {
    const p_name = req.body.p_name
    const p_link = req.body.p_link
    const p_img = req.body.p_img
    const p_des = req.body.p_des
    const skills = req.body.skills
    const live = req.body.live
    const p_sc_link = req.body.p_sc_link

    const project = new Project({
        p_name, p_link, p_img, p_des, skills, live, p_sc_link
    })

    await project.save()
        .then(r => res.json(r))
        .catch(e => res.json(e))
})

app.listen(PORT, () => console.log('Server ' + PORT))