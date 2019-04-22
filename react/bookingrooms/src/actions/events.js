// import axios from 'axios';
// export const REQUEST_GET_EVENTS = "REQUEST_GET_EVENTS";
export const REQUEST_LOADING = 'REQUEST_LOADING';
export const REQUEST_REJECTED = 'REQUEST_REJECTED';
// api
// const API_URL = "http://localhost:3000";

// export function requestGetEvent() {
//     return (dispatch) => {
//         dispatch(requestLoading());
//         return axios.request({
//             method: 'GET',
//             url: `${API_URL}/events/`,
//             headers: {
//                 "Accept": "application/json",
//                 'Content-Type': 'application/json',
//             },
//         }).then(function (response) {
//             dispatch({
//                 type: REQUEST_GET_EVENTS,
//                 payload: response.data
//             })
//         }).catch(function (error) {
//             // noteError(error);
//             dispatch(requestRejected(error));
//         })
//     }
// }
export function requestLoading() {
    return { type: REQUEST_LOADING };
}
export function requestRejected(response) {
    return { type: REQUEST_REJECTED, payload: response };
}
