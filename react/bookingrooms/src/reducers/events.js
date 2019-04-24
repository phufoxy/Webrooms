import { REQUEST_LOADING, REQUEST_REJECTED, REQUEST_GET_EVENTS, REQUEST_ADD_EVENT } from '../actions/events';
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
                id: item.attributes.id_rooms,
                title: item.attributes.content,
                className: item.attributes.id_rooms === 1 ? "SMALL" : "BIG",
                start: item.attributes.timestart,
                end: item.attributes.timeend,
                room:  item.attributes.id_rooms === 1 ? "Phòng Nhỏ" : "Phòng Lớn",
                user: "Tran Van Phu",
                rrule: item.attributes && item.attributes.repeat !== "null" ?
                    {
                        freq: "weekly",
                        interval: item.attributes.repeat.interval,
                        byweekday: item.attributes.repeat.byweekday,
                        dtstart: item.attributes.repeat.daystart,
                        until: item.attributes.repeat.until,
                        count: item.attributes.repeat.count
                    } : null,
                duration: item.attributes.timemeeting
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

        case REQUEST_ADD_EVENT:
            return Object.assign({}, state, {
                all: [...state.all, convertToFrontEnd(action.payload.attributes)]
            })


        default:
            return state;
    }

}