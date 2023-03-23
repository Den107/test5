import Skill from "../models/Skill.js";
import path, {dirname} from 'path'
import {fileURLToPath} from 'url'

export const createSkill = async (req, res) => {
    try {
        const {title, description} = req.body

        if (req.files) {
            let fileName = Date.now().toString() + req.files.image.name
            const __dirname = dirname(fileURLToPath(import.meta.url))
            req.files.image.mv(path.join(__dirname, '..', 'uploads', fileName))

            const newSkillWithImage = new Skill({
                title, description, imageUrl: fileName
            })

            await newSkillWithImage.save()

            return res.json(newSkillWithImage)
        } else {
            const newSkillWithoutImage = new Skill({
                title, description, imageUrl: ''
            })

            await newSkillWithoutImage.save()
            return res.json(newSkillWithoutImage)
        }
    } catch (e) {
        console.log(e)
        res.json({message: 'Something wrong...'})
    }
}

export const getAllSkills = async (req, res) => {
    try {
        const skills = await Skill.find().sort('-createdAt')
        if (!skills) {
            return res.json({message: 'Skills not found'})
        }
        return res.json(skills)
    } catch (e) {
        console.log(e)
        res.json({message: 'Something wrong...'})
    }
}

export const getOneById = async (req, res) => {
    try {
        const id = req.params.id
        const skill = await Skill.findById(id)
        return res.json(skill)
    } catch (e) {
        console.log(e)
        res.json({message: 'Something wrong...'})
    }
}

export const removeOne = async (req, res) => {
    try {
        const id = req.params.id
        await Skill.findByIdAndDelete(id)
        return res.json({message: 'Done'})
    } catch (e) {
        console.log(e)
        res.json({message: 'Something wrong...'})
    }
}

export const updateOne = async (req, res) => {
    try {
        const id = req.params.id
        const {title, description} = req.body

        if (req.files) {
            let fileName = Date.now().toString() + req.files.image.name
            const __dirname = dirname(fileURLToPath(import.meta.url))
            req.files.image.mv(path.join(__dirname, '..', 'uploads', fileName))

        }

        const skill = await Skill.findByIdAndUpdate(id, {title, description})


        return res.json({message: 'Done'})
    } catch (e) {
        console.log(e)
        res.json({message: 'Something wrong...'})
    }
}