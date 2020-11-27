import { ADD_TASK, REMOVE_TASK } from '../../constants';

const TASKS = [
  {
    id: 1,
    text: 'Learn ReactJS',
    isCompleted: true,
  },
  {
    id: 2,
    text: 'Learn Redux',
    isCompleted: false,
  },
  {
    id: 3,
    text: 'Learn React Router',
    isCompleted: false,
  }
];

const tasks = (state = TASKS, { id, text, isCompleted, type }) => {
  // 3) Внутри Ред-ра в конст-ии входим в нужный кейс
  switch (type) {
    case ADD_TASK:
      return [ // 5) Ред-р возвращает новое состояние Redux-стора
        ...state, { // 4) Добавляем задачу в текущий ...state
          id,
          text,
          isCompleted,
        }
      ];
    case REMOVE_TASK:
      // возвращаем только несовпадения с полученным id
      return [...state].filter(task => task.id !== id);
    default:
      return state;
  }
}

export default tasks;
