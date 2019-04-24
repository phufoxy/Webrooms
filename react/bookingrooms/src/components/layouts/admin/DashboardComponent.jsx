import React, {Component} from 'react';

class DashboardComponent extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-5">
                    <div className="page-title">
                        <h3 className="title">Dashboard</h3>
                        <a href="/" className="b-link">Home</a>
                        <span className="b-arrow">
                            <i className="fas fa-chevron-right"/>
                            &nbsp;Library</span>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="btn-upgrade">
                        <a href="/" className="link-upgrade">Upgrade to pro</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardComponent;