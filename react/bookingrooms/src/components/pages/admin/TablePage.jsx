import React, { Component } from 'react';
import {connect} from 'react-redux';
import {TableComponent} from '../../shared/admin/table'
import {HeaderLayout,SiderLayout,DashboardComponent,FooterLayout} from '../../layouts/admin';

class TablePage extends Component {
    render() {
        return (
            <div className="wrapper">
                <HeaderLayout></HeaderLayout>
                <section className="b-dashboard-content">
                    <SiderLayout></SiderLayout>
                    <div className="right-table">
                        
                        <div className="container-fuild">
                            <DashboardComponent></DashboardComponent>
                            <div className="row">
                                <TableComponent></TableComponent>
                                <TableComponent></TableComponent>
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


export default  connect(mapStateProps, {})(TablePage);