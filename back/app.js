import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import Todo from './models/Todo.js'

import routerTodo from './routes/todo.js'
const app = express()

mongoose.connect('mongodb://localhost:27017/todolist', {useNewUrlParser: true, useUnifiedTopology: true});

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.use('/todo',routerTodo)

export default app
