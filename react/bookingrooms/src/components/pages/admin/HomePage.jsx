import React, { Component } from 'react';
import { connect } from 'react-redux';
import {HeaderLayout,SiderLayout,FooterLayout,DashboardComponent} from '../../layouts/admin';
import {SalesComponent, FeedComponent, ProductComponent, CommentComponent, TempComponent,} from '../../shared/admin/dashboard';
class HomePage extends Component {
    render() {
        return (
            <div className="wrapper">
                <HeaderLayout></HeaderLayout>
                <section className="b-dashboard-content">
                    <SiderLayout></SiderLayout>
                    <div className="right-content">
                        <div className="container-fluid">
                            <DashboardComponent></DashboardComponent>
                            <div className="row">
                                <SalesComponent></SalesComponent>
                                <FeedComponent></FeedComponent>
                                
                            </div>
                    
                            <ProductComponent></ProductComponent>

                            <div className="row">
                                <CommentComponent></CommentComponent>
                                <TempComponent></TempComponent>
                            </div>
                        </div>
                        <FooterLayout></FooterLayout>
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
export default connect(mapStateProps, {})(HomePage);