import React, { Component } from 'react';
import { connect } from 'react-redux';
import {HeaderLayout,} from '../../layouts/home';
import {BlockLeft,BlockRight} from '../../shared/home';
class HomePage extends Component {
    render() {
        return (
            <div className="wrapper">
                <HeaderLayout></HeaderLayout>
                <main className="b-page-main">
                    <div className="b-block">
                        <BlockLeft></BlockLeft>
                        <BlockRight></BlockRight>
                    </div>
                </main>
            </div>
        );
    }
}
function mapStateProps(state) {
    return {

    }
}
export default connect(mapStateProps, {})(HomePage);