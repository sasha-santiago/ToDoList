import './App.css'
import globalContext from '../../context/globalContext'
import reducer from '../../utils/reducer'
import { useReducer } from 'react'
import Form from '../../components/Form/Form'
import TodoList from '../../components/TodoList/TodoList'

function App() {
  const [state, dispatch] = useReducer(reducer, { todos: [] })

  return (
    <globalContext.Provider value={{ state, dispatch }}>
      <div className="todo">
        <div className="todobody">
          <h1>Заметки</h1>
          <Form />
          <TodoList />
        </div>
      </div>
    </globalContext.Provider>
  )
}

export default App
