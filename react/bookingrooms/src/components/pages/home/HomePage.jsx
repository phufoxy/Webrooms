import React, { Component } from 'react';
import { connect } from 'react-redux'
class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
            </div>
        );
    }
}
function mapStateProps(state) {
    return {

    }
}
export default connect(mapStateProps, {})(HomePage);