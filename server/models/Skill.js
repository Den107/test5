import mongoose from "mongoose";

const SkillSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    imgUrl: {type: String, default: ''}
}, {timestamps: true})

export default mongoose.model('Skill', SkillSchema)