import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import rrulePlugin from '@fullcalendar/rrule';
import interactionPlugin from '@fullcalendar/interaction' // needed for dayClick
import '../../../../main.scss'
import { Modal } from 'antd';

class FullcalenderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            calendarWeekends: true,
            ArrayList: [],
            show: false,
            title: '',
            description: ''

        }
    }
    toggleWeekends = () => {
        this.setState({ // update a property
            calendarWeekends: !this.state.calendarWeekends
        })
    }

    gotoPast = () => {
        let calendarApi = this.calendarComponentRef.current.getApi()
        calendarApi.gotoDate('2000-01-01') // call a method on the Calendar object
    }
    handleDateClick = (arg) => {
        if (window.confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
            this.setState({  // add new event data
                calendarEvents: this.state.calendarEvents.concat({ // creates a new array
                    title: 'New Event',
                    start: arg.date,
                    allDay: arg.allDay
                })
            })
        }
    }
    onEvent(info) {
        this.setState({
            show: true,
            title: info.event.title,
            description: info.event.extendedProps.description,
        })

        // change the border color just for fun
        info.el.style.borderColor = 'red';
    }
    onHover = (info) => {
        console.log(info.event.title);

    }


    handleClose = () => {
        this.setState({ show: false });
    }
    handleOk = (e) => {
        this.setState({
            show: false,
        });
    }

    handleCancel = (e) => {
        this.setState({
            show: false,
        });
    }
    render() {
        return (
            <div className="b-fullcalender">
                <Modal
                    visible={this.state.show}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>{this.state.title}</p>
                    <p>{this.state.description}</p>

                </Modal>
                <FullCalendar
                    defaultView="timeGridWeek"

                    header={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
                    }}

                    dayNames={['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']}
                    plugins={[rrulePlugin, dayGridPlugin, timeGridPlugin, interactionPlugin,]}
                    ref={this.calendarComponentRef}
                    weekends={this.state.calendarWeekends}
                    resources={[
                        {
                            id: 'a',
                            title: 'Room A'
                        },
                        {
                            id: 'b',
                            title: 'Room B'
                        }
                    ]}
                    events={[
                        {
                            title: 'Meeting Room 1',
                            start: '2019-04-21T12:30:00',
                            end: '2019-04-21T17:30:00',
                            className: 'SMALL',
                            resourceIds: ['a'],
                            // daysOfWeek: [0, 2],
                            // startRecur: '2019-04-21T12:30:00',
                            // endRecur: '2019-05-01T12:30:00',
                            rrule: {
                                freq: 'weekly',
                                interval: 1, //distance
                                byweekday: ['mo', 'fr', 'su'],
                                dtstart: '2019-04-21T12:30:00',
                                until: '2019-06-01T17:30:00',
                                count: 3
                            },
                            duration: '03:00'


                        },
                        {
                            title: 'Meeting Room 1',
                            start: '2019-04-21T12:30:00',
                            end: '2019-04-21T17:30:00',
                            className: 'BIG',
                            resourceIds: ['b'],
                            // daysOfWeek: [0, 2],
                            // startRecur: '2019-04-21T12:30:00',
                            // endRecur: '2019-05-01T12:30:00',
                            rrule: {
                                freq: 'weekly',
                                interval: 1, //distance
                                byweekday: ['mo', 'fr', 'su'],
                                dtstart: '2019-04-21T12:30:00',
                                until: '2019-06-01T17:30:00',
                                count: 3
                            },
                            duration: '02:00'


                        },

                    ]}
                    dateClick={this.handleDateClick}
                    defaultDate={'2019-04-21'}
                    navLinks={true}
                    editable={true}
                    eventLimit={true}
                    minTime={'08:00:00'}
                    maxTime={'20:00:00'}
                    eventClick={this.onEvent.bind(this)}

                />
            </div>
        );
    }
}

export default FullcalenderComponent;