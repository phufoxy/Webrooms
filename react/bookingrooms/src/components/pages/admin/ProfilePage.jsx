import React, { Component } from 'react';
import {connect} from 'react-redux';
import {HeaderLayout,SiderLayout,FooterLayout,DashboardComponent} from '../../layouts/admin';
import {InforComponent, FormComponent} from '../../shared/admin/profile';
class ProfilePage extends Component {
    render() {
        return (
            <div className="wrapper">
                <HeaderLayout></HeaderLayout>
                <section className="b-dashboard-content">
                    <SiderLayout></SiderLayout>
                    <div className="right-form">
                        <div className="container-fuild">
                        <DashboardComponent></DashboardComponent>
                        <div className="row">
                            <InforComponent></InforComponent>
                            <FormComponent></FormComponent>
                        </div>
                        <FooterLayout></FooterLayout>
                        </div>
                    </div>
                    
                </section>
            </div>
        );
    }
}

function mapStateProps(state) {
    return {

    }
}


export default  connect(mapStateProps, {})(ProfilePage);