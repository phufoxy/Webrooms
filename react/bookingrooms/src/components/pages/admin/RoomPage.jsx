import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HeaderLayout, FooterLayout, SiderLayout } from '../../layouts/admin';
import { TableComponent, FormComponent } from '../../shared/admin';
class RoomPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            views: 'LIST'
        }
    }
    onChangerView = () => {
        this.setState({
            views: 'FORM'
        })
    }

    render() {
        const mainContent = () => {
            switch (this.state.views) {
                case "LIST":
                    return (
                        <TableComponent onChangerView={this.onChangerView}></TableComponent>
                    )
                case "FORM":
                    return (
                        <FormComponent></FormComponent>
                    )
                default:
                    return (
                        <></>
                    )
            }
        }
        return (
            <div className="wrapper">
                <HeaderLayout></HeaderLayout>
                <section className="b-dashboard-content">
                    <SiderLayout></SiderLayout>
                    <div className="right-content">
                        <div className="container-fluid">
                            
                            {mainContent()}
                        </div>
                        <FooterLayout></FooterLayout>
                    </div>
                </section>
                
            </div>
        );
    }
}

export default RoomPage;