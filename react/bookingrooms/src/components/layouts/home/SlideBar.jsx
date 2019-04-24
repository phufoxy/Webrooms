import React, { Component } from 'react';
import { Modal, Button, Form, Input, DatePicker, Select, Checkbox } from 'antd';
import { CalenderComponent } from '../../shared/home';
import 'antd/dist/antd.css';
const { RangePicker } = DatePicker;
const { Option } = Select;

function onChange(value, dateString) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
    console.log('onOk: ', value);
}

class SlideBar extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            visible: false,
            calender: []
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
    render() {
        return (
            <div className="b-block-left">
                <div className="b-group-btn">
                    <Button className="b-btn waves-effect waves-light" onClick={this.showModal}>
                        TẠO
                </Button>
                </div>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            <Input placeholder="Basic usage" />
                        </Form.Item>
                        <Form.Item>
                            <RangePicker
                                showTime={{ format: 'HH:mm' }}
                                format="YYYY-MM-DD HH:mm"
                                placeholder={['Start Time', 'End Time']}
                                onChange={onChange}
                                onOk={onOk}
                            />
                        </Form.Item>
                        <Form.Item label="Phòng">
                            <Select>
                                <Option value="1">Phòng Lớn</Option>
                                <Option value="2">Phòng Nhỏ</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <Checkbox >Lặp Lại</Checkbox>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Success
                        </Button>

                        </Form.Item>
                    </Form>
                </Modal>
                <CalenderComponent></CalenderComponent>
                <div className="b-rooms">
                    <div className="b-heading text-center">
                        <h2 className="b-text-title">
                            PHÒNG
                    </h2>
                    </div>
                    <div className="b-form">
                        <form>
                            <div className="b-form-group">
                                <input type="checkbox" name="a" id="a" />
                                <label htmlFor="a">
                                    Phòng họp nhỏ 1
                            </label>
                            </div>
                            <div className="b-form-group">
                                <input type="checkbox" name="a" id="g" />
                                <label htmlFor="g">
                                    Phòng họp nhỏ 1
                            </label>
                            </div>
                            <div className="b-form-group">
                                <input type="checkbox" name="a" id="c" />
                                <label htmlFor="c">
                                    Phòng họp nhỏ 1
                            </label>
                            </div>
                            <div className="b-form-group">
                                <input type="checkbox" name="a" id="b" />
                                <label htmlFor="b">
                                    Phòng họp nhỏ 1
                            </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SlideBar;