import { REQUEST_LOADING, REQUEST_REJECTED, REQUEST_GET_EVENTS } from '../actions/events';
const INITIAL_STATE = {
    all: [],
    fetching: false,
    fetched: false,
    error: null,

}
function convertToFrontEnd(arrA) {
    let arrB = []
    if (arrA.length) {
        arrB = arrA.map(item => {
            return {
                id: item.id,
                title: item.title,
                description: item.description,
                className: item.rooms,
                start: item.start,
                end: item.end
            }
        })
    }
    return arrB;
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
        case REQUEST_GET_EVENTS:

            return Object.assign({}, state, {

                all: convertToFrontEnd(action.payload),
                fetching: INITIAL_STATE.fetching,
                fetched: true
            })
        default:
            return state;
    }

}