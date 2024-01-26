import React from 'react'
import PropTypes from 'prop-types'

import ToDoItem from '../todo-item/todo-item'

import './todo-list.css'

const ToDoList = ({ tasksList, removeTask, completeTask }) => (
  <ul className="todo-list">
    {tasksList.map(({ id, text, isCompleted }) => (
      <ToDoItem id={id} removeTask={removeTask} completeTask={completeTask} key={id} text={text} isCompleted={isCompleted} />
    ))}
  </ul>
)

ToDoList.propTypes = {
  tasksList: PropTypes.array,
}

ToDoList.defaultProps = {
  tasksList: [],
}

export default ToDoList
