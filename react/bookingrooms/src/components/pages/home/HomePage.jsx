import React, { Component } from 'react';
import { connect } from 'react-redux'
import { HeaderLayout, SlideBar } from '../../layouts/home';
import { FullcalenderComponent } from '../../shared/home';
import { requestGetEvent } from '../../../actions/events';

class HomePage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            visible: false,
            calender: []
        }
    }
    componentDidMount() {
        this.props.requestGetEvent();
        this.interval = setInterval(() => (this.props.requestGetEvent()), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
            <div className="wrapper">
                <HeaderLayout></HeaderLayout>
                <main className="b-page-main">
                    <div className="b-block">
                        <SlideBar></SlideBar>
                        <div className="b-block-right">
                            <FullcalenderComponent data={this.props.data}></FullcalenderComponent>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}
function mapStateProps(state) {
    return {
        data: state.event.all,
        fetched: state.event.fetched
    }
}
export default connect(mapStateProps, { requestGetEvent })(HomePage);