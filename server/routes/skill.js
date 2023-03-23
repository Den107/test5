import {Router} from 'express'
import {createSkill, getAllSkills, getOneById, removeOne, updateOne} from "../controllers/skill.js";
const router = new Router()

//Create
//http://localhost:4000/api/skills
router.post('/', createSkill)

//Get All
//http://localhost:4000/api/skills
router.get('/', getAllSkills)


//Get One
//http://localhost:4000/api/skills/:id
router.get('/:id', getOneById)

//Remove One
//http://localhost:4000/api/skills/:id
router.delete('/:id', removeOne)

//Update One
//http://localhost:4000/api/skills/:id
router.put('/:id', updateOne)

export default router