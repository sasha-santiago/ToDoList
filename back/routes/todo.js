import express from 'express'
import {todo_get,todo_post,todo_delete,todo_put,todo_finish} from '../controllers/todo.js'
const router = express.Router()

router.route('/')
.get(todo_get)
.post(todo_post)


router.route('/:id')
.get(todo_finish)
.delete(todo_delete)
.put(todo_put)

export default router
