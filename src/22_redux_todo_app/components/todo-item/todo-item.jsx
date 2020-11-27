import React from 'react';
import PropTypes from 'prop-types';

import './todo-item.css';

// Из пропсов достаем removeTask и id. И вешаем обр-к removeTask на эл-т иконки
const ToDoItem = ({ text, isCompleted, id, removeTask, completeTask }) => (
  <li className="todo-item">
    <i onClick={() => completeTask(id)} className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'} />
    <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
    <i onClick={() => removeTask(id)} className="fas fa-times" />
  </li>
);

ToDoItem.propTypes = {
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
}

ToDoItem.defaultProps = {
  text: '',
  isCompleted: false,
}

export default ToDoItem;
