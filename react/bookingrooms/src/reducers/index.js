import { combineReducers } from 'redux';
import EventReducer from './events';
const rootReducer = combineReducers({
    event: EventReducer
});
export default rootReducer;