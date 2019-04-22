import React, {Component} from 'react';

class SalesComponent extends Component {
    render() {
        return (
            <div className="col-lg-8">
                <div className="card-body">
                    <div>
                        <h4 className="card-title">Sales Summary</h4>
                        <h5 className="card-subtitle">Overview of Latest Month
                        </h5>
                    </div>
                    <div className="chart">
                        <img src="../../images/chart1.png" className="img-chart" alt="chart"/></div>
                </div>
            </div>
        );
    }
}

export default SalesComponent;