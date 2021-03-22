import React, { useContext, useState } from 'react'
import globalContext from '../../context/globalContext'

function Form(props) {
  const [text, setText] = useState('')
  const { state, dispatch } = useContext(globalContext)

  const inputHandler = (event) => {
    setText(event.target.value)
  }

  const handlerAdd = (event) => {
    event.preventDefault()
    const {
      text: { value: text },
    } = event.target
    if (!text.trim()) {
      return
    }
    fetch('http://localhost:4000/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    })
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'SET_ADD_POST', payload: data }))
    setText('')
  }

  console.log(state)

  return (
    <>
      <form onSubmit={handlerAdd}>
        <input
          className="addInput"
          value={text}
          onChange={inputHandler}
          name="text"
          type="text"
        />
        <button className="addButton">добавить</button>
      </form>
    </>
  )
}

export default Form
