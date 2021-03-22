import './style.css'
import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import globalContext from '../../context/globalContext'

function TodoList(props) {
  const { state, dispatch } = useContext(globalContext)

  useEffect(() => {
    fetch('http://localhost:4000/todo', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'SET_INIT', payload: data }))
  }, [])

  const handlerDelete = (event) => {
    event.preventDefault()
    const id = event.target.parentElement.parentElement.id
    fetch(`http://localhost:4000/todo/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'SET_DELETE', payload: data._id }))
  }

  const handlerEdit = (event) => {
    event.preventDefault()
    const id = event.target.parentElement.parentElement.id

    const {
      edit: { value: edit },
    } = event.target
    if (!edit.trim()) {
      return
    }
    fetch(`http://localhost:4000/todo/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        edit,
      }),
    })
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'SET_EDIT', payload: { data, edit } }))
  }

  const changeFlag = (event) => {
    // event.preventDefault()
    const id = event.target.parentElement.parentElement.id
    fetch(`http://localhost:4000/todo/${id}`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'FINISH_TODO', payload: data._id }))
  }

  const MouseOut = (e) => {
    e.target.className = 'todoLength'
  }

  const MouseHandlerEnter = (e) => {
    e.target.className = ''
  }

  return (
    <div className="todosArr">
      {state.todos &&
        state.todos.map((el) => {
          return (
            <div className="todolist" id={el._id} key={performance.now()}>
              <div className="todoinput">
                <input
                  onClick={changeFlag}
                  size="60"
                  type="checkbox"
                  defaultChecked={el.completed}
                ></input>

                {el.completed ? (
                  <div
                    onMouseEnter={MouseHandlerEnter}
                    onMouseOut={MouseOut}
                    onClick={changeFlag}
                    className="todoLength"
                    style={{ textDecoration: 'line-through' }}
                  >
                    {el.text}
                  </div>
                ) : (
                  <div
                    onMouseEnter={MouseHandlerEnter}
                    onMouseOut={MouseOut}
                    onClick={changeFlag}
                    className="todoLength"
                    style={{ textverflow: 'ellipsis' }}
                  >
                    {el.text}
                  </div>
                )}
              </div>

              <div className="editDelDiv">
                <button className="deleteButton" onClick={handlerDelete}>
                  Удалить
                </button>
                <form id={el._id} onSubmit={handlerEdit}>
                  <input size="10" type="text" name="edit" />
                  <button className="editButton">Изменить</button>
                </form>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default TodoList
