import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTast, removeTask, completeTask, changeFilter } from '../../actions/actionCreator';

import ToDoInput from '../../components/todo-input/todo-input';
import ToDoList from '../../components/todo-list/todo-list';
import Footer from '../../components/footer/footer';

import './todo.css';

class ToDo extends Component {

  state = {
    // activeFilter: 'all',
    taskText: ''
  }

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      taskText: value,
    })
  }

  // 1) В handleKeyPress вызываем созданый Э addTast
  handleKeyPress = ({ key }) => {
    const { taskText } = this.state;
    if (taskText.length > 3 && key === 'Enter') {
      // После подключения addTast в connect, данный Э становится доступным в К в св-ве this.props
      const { addTast } = this.props;
      // в Э передаем 3 аргумента:
      addTast((new Date()).getTime(), taskText, false);

      this.setState({
        taskText: '',
      })

    }

  }
  // 2) addTast срабатывает и перехватывается Редьюсером

  // filterTasks прин з-чи и зн акт ф-ра
  // После чего ф-ет з-чи по вып-сти и воз-ет new массив
  filterTasks = (tasks, activeFilter) => {
    switch (activeFilter) {
      case 'completed':
        return tasks.filter(task => task.isCompleted);
        break;
      case 'active':
        return tasks.filter(task => !task.isCompleted);
        break;
      default:
        return tasks;
    }
  }

  getActiveTasksCounter = tasks => tasks.filter(task => !task.isCompleted).length;

  render() {
    const { taskText } = this.state;
    const { tasks, removeTask, completeTask, filters, changeFilter } = this.props; // из пропсов вытягиваем Э removeTask, после чего этот..
    // .. Э removeTask передаем в виде пропсов в <ToDoList/>
    const isTasksExist = tasks && tasks.length > 0;
    const filteredTasks = this.filterTasks(tasks, filters);
    const taskCounter = this.getActiveTasksCounter(tasks);

    return (
      <div className="todo-wrapper">
        <ToDoInput onKeyPress={this.handleKeyPress} onChange={this.handleInputChange} value={taskText} />
        {isTasksExist && <ToDoList tasksList={filteredTasks} removeTask={removeTask} completeTask={completeTask} />}
        {isTasksExist && <Footer activeFilter={filters} changeFilter={changeFilter} amount={taskCounter.length} />}
      </div>
    );
  }
}
// 6) Ком-ты, к к-ым подключен state, следят за его обнов-ем и перехватывают эти изменения state-а,
// получая новые Д, т е пропсы
export default connect(state => ({
  tasks: state.tasks,
  filters: state.filters,
}), { addTast, removeTask, completeTask, changeFilter })(ToDo);
// После экспорта Э пробрасываем его в объект, к-ый идет 2м аргументом в ф connect
// В эту ф пробрасываем Redux-state и возвращаем из него объ со св-вом tasks,
// к-му присваиваем зн-ие state.tasks
