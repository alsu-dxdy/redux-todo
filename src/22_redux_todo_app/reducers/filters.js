import { CHANGE_FILTER } from '../../constants';

const BASE_FILTER = 'all';

const filter = (state = BASE_FILTER, { type, activeFilter }) => {
    switch (type) {
        case CHANGE_FILTER:
            return activeFilter;
            break;
        default:
            return state;
    }
}

export default filter;

// type: ADD, REMOVE, COMPLETE, CHANGE
// switch (type) { case ADD, case REMOVE, case COMPLETE, case CHANGE }
// const tasks = (state = TASKS, { id, text, isCompleted, type })
// const TASKS = [...]