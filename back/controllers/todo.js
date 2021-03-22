import Todo from '../models/Todo.js'

export const todo_get = async (req, res) => {
  const todo = await Todo.find()
  res.json(todo)
}

export const todo_post = async (req, res) => {
  const {text} = req.body
  const todo = new Todo ({
    text
  })
  await todo.save()
  res.status(201).json(todo)
}

export const todo_delete = async (req, res) => {
  const {id} = req.params
  const todo = await Todo.findOneAndDelete({_id: id})
  res.status(200).json(todo)
}


export const todo_put = async (req,res) => {
  const {id} = req.params
  const {edit} = req.body
  console.log(edit);
  console.log(id);
  const todo = await Todo.findOne({_id:id})
  await todo.update({text:edit})
  await todo.save()
  res.status(201).json(todo)
}

export const todo_finish = async (req,res)=>{
  const {id} = req.params
  const todo = await Todo.findOne({_id:id})
  todo.complete ==!todo.complete
  await todo.save()
  res.status(201).json(todo)
}
