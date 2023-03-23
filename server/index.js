import express from 'express'
import mongoose from "mongoose";
import dotenv from 'dotenv'
import cors from 'cors'

import skillRoute from "./routes/skill.js";

const app = express()
dotenv.config()

app.use(cors())
app.use(express.json())

//http://localhost:4000
app.use('/api/skills', skillRoute)

async function start(){
   try{
      await mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`)
      app.listen(process.env.PORT || 4444, err=>{
         if(err){
            return console.log(err)
         }
         console.log('Server ok')
      })
   }catch (e) {
      console.log(e)
   }
}

start()



