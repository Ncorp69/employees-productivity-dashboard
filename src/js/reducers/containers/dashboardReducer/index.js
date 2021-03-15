import { combineReducers } from 'redux';
import grid from './grid';
import showActiveEmployee from './showActiveEmployee';
import filters from './filters';

export default combineReducers({
    grid,
    showActiveEmployee,
    filters
});