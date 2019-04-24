import React, {Component} from 'react';

class TempComponent extends Component {
    render() {
        return (
            <div className="col-lg-6">
                <div className="card-body">
                    <h4 className="card-title">Temp Guide</h4>
                    <div className="shower-widget">
                        <div className="icon-shower">
                            <i className="fas fa-cloud-showers-heavy"/>
                            <span>73<sup>°</sup>
                            </span>
                        </div>
                        <div className="title-place">
                            <h3 className="b-title">Saturday</h3>
                            <small className="text-muted">Ahmedabad, India</small>
                        </div>
                    </div>
                    <table className="table table-temp">
                        <tbody>
                            <tr>
                                <td className="temp-title">Wind</td>
                                <td className="temp">ESE 17 mph</td>
                            </tr>
                            <tr>
                                <td className="temp-title">Humidity</td>
                                <td className="temp">83%</td>
                            </tr>
                            <tr>
                                <td className="temp-title">Pressure</td>
                                <td className="temp">28.56 in</td>
                            </tr>
                            <tr>
                                <td className="temp-title">Cloud Cover</td>
                                <td className="temp">78%</td>
                            </tr>
                        </tbody>
                    </table>
                    <ul className="row">
                        <li className="col-3 text-center">
                            <h4 className="text-info">
                                <i className="fas fa-sun"/>
                            </h4>
                            <p className="d-block text-muted">09:30</p>
                            <h3 className="temperature">70<sup>°</sup>
                            </h3>
                        </li>
                        <li className="col-3 text-center">
                            <h4 className="text-info ">
                                <i className="fas fa-cloud-sun"/>
                            </h4>
                            <p className="d-block text-muted">11:30</p>
                            <h3 className="temperature">72<sup>°</sup>
                            </h3>
                        </li>
                        <li className="col-3  text-center">
                            <h4 className="text-info">
                                <i className="fas fa-cloud-moon-rain"/>
                            </h4>
                            <p className="d-block text-muted">13:30</p>
                            <h3 className="temperature">75<sup>°</sup>
                            </h3>
                        </li>
                        <li className="col-3  text-center">
                            <h4 className="text-info">
                                <i className="fas fa-cloud-sun-rain"/>
                            </h4>
                            <p className="d-block text-muted">15:30</p>
                            <h3 className="temperature">76<sup>°</sup>
                            </h3>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default TempComponent;