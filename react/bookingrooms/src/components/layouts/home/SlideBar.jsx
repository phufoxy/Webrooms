import React, { Component } from 'react';
import { Modal, Button, DatePicker, TimePicker, Checkbox, Select } from 'antd';
import { CalenderComponent } from '../../shared/home';
import moment from 'moment';
import locale from 'antd/lib/date-picker/locale/vi_VN';
import 'antd/dist/antd.css';
const { RangePicker } = DatePicker;
const format = 'HH:mm';
const dateFormat = 'YYYY-MM-DD';
var now = new Date()
const Option = Select.Option;
const children = [
    { id: '1', name: 'su' },
    { id: '2', name: 'mo' },
    { id: '3', name: 'tu' },
    { id: '4', name: 'we' },
    { id: '5', name: 'th' },
    { id: '6', name: 'fr' },
    { id: '7', name: 'sa' }
];

class SlideBar extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            visible: false,
            calender: [],
            title: '',
            dateStart: '',
            dateEnd: '',
            rooms: 1,
            duration: '00:30',
            checkbox: false,
            byweekday: ['su', 'mo'],
            until: '2019-04-27',
            count: 1
        }
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    }
    onChanger = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onChangerTime = (value) => {
        this.setState({
            duration: value._i
        })
    }
    onChangerSelect = (value) => {
        this.setState({
            rooms: value
        })
    }
    onChangeDate = (value, dateString) => {
        this.setState({
            dateStart: dateString[0],
            dateEnd: dateString[1]
        })
    }
    onChangeTime = (time, timeString) => {
        this.setState({
            duration: timeString
        })
    }
    onChangeDate1 = (date, dateString) => {
        this.setState({
            until: dateString
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            visible: false
        })
        this.props.onAddEvent(this.state)
        this.onReset();
    }
    onChangerCheck = (e) => {
        this.setState({
            checkbox: e.target.checked
        })

    }
    handleChange = (value) => {
        this.setState({
            byweekday: value
        })
    }
    onGetDate = (data) => {
        this.props.onGetDate(data);
    }
    onReset() {
        this.setState({
            title: ''
        })
    }
    render() {

        return (
            <div className="b-block-left">
                <div className="b-group-btn">
                    <Button className="b-btn waves-effect waves-light" onClick={this.showModal}>
                        TẠO
                </Button>
                </div>
                <Modal
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={null}>
                    <div className="b-book">
                        <div className="b-heading">
                            <h2 className="b-text-title">
                                ĐẶT LỊCH PHÒNG HỌP
                            </h2>
                        </div>
                        <div className="b-content">
                            <form className="b-form" onSubmit={this.onSubmit}>
                                <div className="b-form-group">
                                    <input type="text" placeholder="Nhập Tiêu Đề" name="title" className="b-input" onChange={this.onChanger} value={this.state.title} />
                                </div>
                                <div className="b-form-group">
                                    <RangePicker
                                        locale={locale}
                                        showTime={{ format: 'HH:mm' }}
                                        format="YYYY-MM-DD HH:mm"
                                        placeholder={['Start Time', 'End Time']}
                                        onChange={this.onChangeDate}
                                        onOk={this.onOk}
                                        style={{
                                            width: '100%'
                                        }}
                                        timeIntervals={15}
                                    />
                                </div>
                                <div className="b-form-group">
                                    <TimePicker minuteStep={30} defaultValue={moment(this.state.duration, format)} format={format} onChange={this.onChangeTime} />,
                                </div>
                                <div className="b-form-group">
                                    <label htmlFor="c">Chọn Phòng</label>
                                    <select className="b-select" defaultValue={this.state.rooms} name="rooms" onChange={this.onChanger}>
                                        <option value={1}>Phòng Nhỏ  </option>
                                        <option value={2}>Phòng lớn</option>
                                        <option>Phòng lớn</option>
                                    </select>
                                </div>
                                <div className="b-form-group">
                                    <Checkbox name="checkbox" onChange={this.onChangerCheck} value={this.state.checkbox}>Lặp Lại</Checkbox>,
                                </div>
                                <div className={this.state.checkbox ? "b-repeat" : "b-repeat is-disable"}>
                                    <div className="b-form-title">
                                        <h2 className="b-text-title">
                                            Kết Thúc
                                        </h2>
                                    </div>
                                    <div className="b-form-group b-date">
                                        <label className="b-lable" htmlFor="c">Vào Ngày</label>
                                        <DatePicker defaultValue={moment(now, dateFormat)} format={dateFormat} onChange={this.onChangeDate1} />
                                    </div>
                                    <div className="b-form-group">
                                        <label >Lặp Lại</label>
                                        <select className="b-select" name='count' defaultValue={this.state.count} onChange={this.onChanger}>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                            <option value={6}>6</option>
                                            <option value={7}>7</option>
                                            <option value={8}>8</option>
                                            <option value={10}>10</option>
                                            <option value={15}>15</option>
                                        </select>
                                    </div>
                                    <div className="b-form-group">
                                        <Select
                                            mode="multiple"
                                            style={{ width: '100%' }}
                                            placeholder="Please select"
                                            defaultValue={this.state.byweekday}
                                            onChange={this.handleChange}
                                        >
                                            {children.map(data => (
                                                <Option key={data.id} value={data.name}>{data.name}</Option>
                                            ))}
                                        </Select>,
                                    </div>
                                </div>
                                <div className="b-form-button">
                                    <button type="cancel" className="b-btn b-btn-save waves-effect waves-teal">Hủy</button>
                                    <button type="submit" className="b-btn b-btn-cancel waves-effect waves-teal">Lưu</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Modal>
                <CalenderComponent onGetDate={this.onGetDate}></CalenderComponent>
                <div className="b-rooms">
                    <div className="b-heading text-center">
                        <h2 className="b-text-title">
                            PHÒNG
                    </h2>
                    </div>
                    <div className="b-form">
                        <form>
                            <div className="b-form-group">
                                <input type="checkbox" name="a" />
                                <label htmlFor='a' className="b-lable-checkbox">
                                    Phòng họp nhỏ 1
                                </label>
                            </div>

                        </form>
                    </div>
                </div>
            </div >
        );
    }
}

export default SlideBar;