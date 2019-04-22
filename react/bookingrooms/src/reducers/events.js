import { REQUEST_LOADING, REQUEST_REJECTED } from '../actions/events';
const INITIAL_STATE = {
    all: [],
    fetching: false,
    fetched: false,
    error: null,

}
export default function (state = INITIAL_STATE, action = {}) {
    switch (action.type) {
        case REQUEST_LOADING:
            return Object.assign({}, state, {
                fetching: true,
                fetched: INITIAL_STATE.fetched
            });
        case REQUEST_REJECTED:
            return Object.assign({}, state, {
                fetching: INITIAL_STATE.fetching,
                fetched: INITIAL_STATE.fetched,
                error: action.payload.data
            });
        default:
            return state;
    }

}