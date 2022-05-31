// init
import React, { useState } from "react"
import { connect } from "react-redux"

import { addTodos } from "../redux/reducer"

const mapStateToProps = (state) => {
  return {
    todos: state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  }
}

const Todos = (props) => {
  const [todo, setTodo] = useState("")

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  // sprawdzenie czy input działa
  // console.log("todo text", todo)
  // czy props wychodzi ze stora
  console.log("props from store", props)

  return (
    <div className="addTodos">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="todo-input"
      />
      {/* here we will write object/todo */}
      <button
        className="add-btn"
        onClick={() =>
          props.addTodo({
            id: Math.floor(Math.random() * 1000),
            item: todo,
            completed: false,
          })
        }
      >
        add
      </button>

      <ul>
        {props.todos.map((item) => {
          return <li key={item.id}>{item.item}</li>
        })}
      </ul>
    </div>
  )
}

// 4 we can use connect method to connent this component with redux store
// export default Todos
// export default connect(null, null)(Todos)
export default connect(mapStateToProps, mapDispatchToProps)(Todos)
