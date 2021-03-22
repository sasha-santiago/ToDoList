const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_INIT':
      return {
        ...state,
        todos: [...action.payload],
      }

    case 'SET_ADD_POST':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }
    // ... state - предыдущее состояние
    // ...state.todos. - копия массива с заметками
    // action.payload-это новые заметки
    // мы обновляем список заметок в который входят старые заметки плюс новые

    case 'SET_DELETE':
      return {
        ...state,
        todos: [...state.todos.filter((el) => el._id !== action.payload)],
      }
    case 'SET_EDIT':
      // console.log(action.payload.data._id);
      const edit = state.todos.find((el) => el._id === action.payload.data._id)
      // console.log(edit);
      edit.text = action.payload.edit
      // console.log(edit);
      return {
        ...state,
        todos: [...state.todos],
      }

    case 'FINISH_TODO':
      let check = state.todos.find((el) => el._id === action.payload)
      check.completed = !check.completed

      return {
        ...state,
        todos: [...state.todos],
      }

    default:
      return state
  }
}

export default reducer
