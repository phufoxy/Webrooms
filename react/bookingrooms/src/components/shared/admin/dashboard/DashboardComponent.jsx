import React, {Component} from 'react';

class DashboardComponent extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="card-row">
                    <div className="row">
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
                        <div className="col-lg-4">
                            <div className="card-body">
                                <h4 className="card-title">Feeds</h4>
                                <div className="feed-widget">
                                    <ul className="list-feed">
                                        <li className="item-feed">
                                            <div className="social">
                                                <i className="far fa-bell icon-1"/>
                                                <p>You have 4 pending tasks.</p>
                                            </div>
                                            <span className="text-muted text-1">Just Now</span>
                                        </li>
                                        <li className="item-feed">
                                            <div className="social ">
                                                <i className="fas fa-database icon-2"/>
                                                <p>
                                                    Server #1 overloaded.</p>
                                            </div>
                                            <span className="text-muted text-2">2 Hours ago</span>
                                        </li>
                                        <li className="item-feed">
                                            <div className="social">
                                                <i className="fas fa-cart-plus icon-3"/>
                                                <p>New order received.</p>
                                            </div>
                                            <span className="text-muted text-3">31 May</span>
                                        </li>
                                        <li className="item-feed">
                                            <div className="social">
                                                <i className="fas fa-user icon-4"/>
                                                <p>New user registered.</p>
                                            </div>
                                            <span className="text-muted text-4">30 May</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-row">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card-body">
                                <div className="header-card">
                                    <div>
                                        <h4 className="card-title">Top Selling Products</h4>
                                        <h5 className="card-subtitle">Overview of Top Selling Items
                                        </h5>
                                    </div>
                                    <div className="drop-select">
                                        <select className="custom-select">
                                            <option value={0} selected>Monthly</option>
                                            <option value={1}>Daily</option>
                                            <option value={2}>Weekly</option>
                                            <option value={4}>Yearly</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr className="bg-table">
                                                <th scope="col">Product</th>
                                                <th scope="col">License</th>
                                                <th scope="col">Support Agent</th>
                                                <th scope="col">Technology</th>
                                                <th scope="col">Tickets</th>
                                                <th scope="col">Sales</th>
                                                <th scope="col">Earnings</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td scope="row">
                                                    <div className="product-name">
                                                        <a href="/" className="link-name user-1">AE</a>
                                                        <h4 className="b-text">Elite Admin</h4>
                                                    </div>
                                                </td>
                                                <td>Single Use</td>
                                                <td>John Doe</td>
                                                <td>
                                                    <label className="label label-1">Angular</label>
                                                </td>
                                                <td>46</td>
                                                <td>356</td>
                                                <td>
                                                    <h5 className="price">$2850.06</h5>
                                                </td>
                                                <td>
                                                    <button className="btn_edit">Edit</button>&nbsp;
                                                    <button className="btn_dele">Delete</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td scope="row">
                                                    <div className="product-name">
                                                        <a href="/" className="link-name user-2">MA</a>
                                                        <h4 className="b-text">Monster Admin</h4>
                                                    </div>
                                                </td>
                                                <td>Single Use</td>
                                                <td>Venessa Fern
                                                </td>
                                                <td>
                                                    <label className="label label-2">Vue Js</label>
                                                </td>
                                                <td>46</td>
                                                <td>356</td>
                                                <td>
                                                    <h5 className="price">$2850.06</h5>
                                                </td>
                                                <td>
                                                    <button className="btn_edit">Edit</button>&nbsp;
                                                    <button className="btn_dele">Delete</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td scope="row">
                                                    <div className="product-name">
                                                        <a href="/" className="link-name user-3">MP</a>
                                                        <h4 className="b-text">Material Pro Admin</h4>
                                                    </div>
                                                </td>
                                                <td>Single Use</td>
                                                <td>John Doe</td>
                                                <td>
                                                    <label className="label label-3">Bootstrap</label>
                                                </td>
                                                <td>46</td>
                                                <td>356</td>
                                                <td>
                                                    <h5 className="price">$2850.06</h5>
                                                </td>
                                                <td>
                                                    <button className="btn_edit">Edit</button>&nbsp;
                                                    <button className="btn_dele">Delete</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td scope="row">
                                                    <div className="product-name">
                                                        <a href="/" className="link-name user-4">AA</a>
                                                        <h4 className="b-text">Ample Admin</h4>
                                                    </div>
                                                </td>
                                                <td>Single Use</td>
                                                <td>John Doe</td>
                                                <td>
                                                    <label className="label label-4">React</label>
                                                </td>
                                                <td>46</td>
                                                <td>356</td>
                                                <td>
                                                    <h5 className="price">$2850.06</h5>
                                                </td>
                                                <td>
                                                    <button className="btn_edit">Edit</button>&nbsp;
                                                    <button className="btn_dele">Delete</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-row">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card-body">
                                <div>
                                    <h4 className="card-title">Recent Comments</h4>
                                </div>
                                <div className="comment-row">
                                    <div className="b-user">
                                        <img
                                            src="../../images/user.jpg"
                                            className="img-user"
                                            width="50px"
                                            height="50px"
                                            alt="user"/></div>
                                    <div className="comment-text">
                                        <div className="comment-header">
                                            <h6 className="name-user">James Anderson</h6>
                                            <p className="text-user">Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                                        </div>
                                        <div className="footer-comment">
                                            <span className="label label-1">Peding
                                            </span>
                                            <span className="action-icon icon-1">
                                                <a href="/">
                                                    <i className="far fa-comment-dots"/>
                                                </a>
                                                <a href="/">
                                                    <i className="far fa-heart"/>
                                                </a>
                                            </span>
                                            <span className="text-muted">April 14, 2016</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-row">
                                    <div className="b-user">
                                        <img
                                            src="../../images/user1.jpg"
                                            className="img-user"
                                            width="50px"
                                            height="50px"
                                            alt="img-user"/></div>
                                    <div className="comment-text">
                                        <div className="comment-header">
                                            <h6 className="name-user">Michael Jorden</h6>
                                            <p className="text-user">Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                                        </div>
                                        <div className="footer-comment">
                                            <span className="label label-2">Approved
                                            </span>
                                            <span className="action-icon">
                                                <a href="/">
                                                    <i className="far fa-comment-dots"/>
                                                </a>
                                                <a href="/">
                                                    <i className="far fa-heart heart"/>
                                                </a>
                                            </span>
                                            <span className="text-muted">April 14, 2016</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-row">
                                    <div className="b-user">
                                        <img
                                            src="../../images/user2.jpg"
                                            className="img-user"
                                            width="50px"
                                            height="50px"
                                            alt="img-user"/></div>
                                    <div className="comment-text">
                                        <div className="comment-header">
                                            <h6 className="name-user">Johnathan Doeting</h6>
                                            <p className="text-user">Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                                        </div>
                                        <div className="footer-comment">
                                            <span className="label label-3">Rejected
                                            </span>
                                            <span className="action-icon icon-1">
                                                <a href="/">
                                                    <i className="far fa-comment-dots"/>
                                                </a>
                                                <a href="/">
                                                    <i className="far fa-heart"/>
                                                </a>
                                            </span>
                                            <span className="text-muted">April 14, 2016</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                <ul className="sub-temp">
                                    <li className="list-temp text-center">
                                        <h4 className="text-info">
                                            <i className="fas fa-sun"/>
                                        </h4>
                                        <p className="d-block text-muted">09:30</p>
                                        <h3 className="temperature">70<sup>°</sup>
                                        </h3>
                                    </li>
                                    <li className="list-temp text-center">
                                        <h4 className="text-info ">
                                            <i className="fas fa-cloud-sun"/>
                                        </h4>
                                        <p className="d-block text-muted">11:30</p>
                                        <h3 className="temperature">72<sup>°</sup>
                                        </h3>
                                    </li>
                                    <li className="list-temp  text-center">
                                        <h4 className="text-info">
                                            <i className="fas fa-cloud-moon-rain"/>
                                        </h4>
                                        <p className="d-block text-muted">13:30</p>
                                        <h3 className="temperature">75<sup>°</sup>
                                        </h3>
                                    </li>
                                    <li className="list-temp  text-center">
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
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardComponent;