import axios from 'axios';
import { message } from 'antd';
export const REQUEST_GET_EVENTS = "REQUEST_GET_EVENTS";
export const REQUEST_LOADING = 'REQUEST_LOADING';
export const REQUEST_REJECTED = 'REQUEST_REJECTED';
export const REQUEST_ADD_EVENT = 'REQUEST_ADD_EVENT';

// api
const API_URL = "http://localhost/booking-room/public/api/v1";

export function requestGetEvent() {
    return (dispatch) => {
        dispatch(requestLoading());
        return axios.request({
            method: 'GET',
            url: `${API_URL}/bookrooms`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
            },
        }).then(function (response) {
            dispatch(receiveData(response.data.data))
        }).catch(function (error) {
            // noteError(error);
            dispatch(requestRejected(error));
        })
    }
}
// add tour 
export function requestAddEvents(data) {
    let formData = new FormData();


    if (data.checkbox === true) {
        formData.append('id_rooms', data.rooms);
        formData.append('content', data.title);
        formData.append('nameuser', "vanphu");
        formData.append('timestart', data.dateStart);
        formData.append('timeend', data.dateEnd);
        formData.append('timemeeting', data.duration);
        formData.append('repeatby', 'weekly');
        formData.append('interval', 1);
        let arrayDay = '';

        data.byweekday.forEach((i, index, item) => {
            if (index === item.length - 1) {
                arrayDay += `${item[index]}`;
            } else {
                arrayDay += `${item[index]},`;
            }
        })
        formData.append('byweekday', arrayDay);
        formData.append('until', data.until);
        formData.append('count', data.count);
    } else {
        formData.append('id_rooms', data.rooms);
        formData.append('content', data.title);
        formData.append('nameuser', "vanphu");
        formData.append('timestart', data.dateStart);
        formData.append('timeend', data.dateEnd);
        formData.append('timemeeting', data.duration);
    }
    return (dispatch) => {
        return axios.request({
            method: 'POST',
            url: `${API_URL}/bookrooms`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
            },
            data: formData
        }).then(function (response) {
            message.success('Thêm Sự Kiện Thành Công');
            dispatch({
                type: REQUEST_ADD_EVENT,
                payload: response.data.data
            })
        }).catch(function (error) {
            dispatch(requestRejected(error));

        })
    }
}

export function requestLoading() {
    return { type: REQUEST_LOADING };
}
export function requestRejected(response) {
    return { type: REQUEST_REJECTED, payload: response };
}
export function receiveData(payload) {
    return { type: REQUEST_GET_EVENTS, payload };
}
