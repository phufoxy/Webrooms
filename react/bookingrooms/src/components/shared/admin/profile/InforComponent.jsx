import React, { Component } from 'react';

class InforComponent extends Component {
    render() {
        return (
            <div className="col-lg-4">
                <div className="b-card">
                    <div className="card-body">
                        <div className="card-user text-center">
                            <img src="../../images/user2.jpg" className="img-user" alt="true" />
                            <h3 className="title-name">Hanna Gover</h3>
                            <h6 className="card-subtitle">Accoubts Manager Amix corp</h6>
                            <div className="link-text">
                                <a className="link" href="/">254</a>
                                <a className="link" href="/">54</a>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="card-body">
                        <small className="text-muted">Email address</small>
                        <h6 className="text">hannagover@gmail.com</h6>
                        <small className="text-muted">Phone</small>
                        <h6 className="text">hannagover@gmail.com</h6>
                        <small className="text-muted">Address</small>
                        <h6 className="text">71 Pilgrim Avenue Chevy Chase, MD 20815</h6>
                        <div className="map-box">
                          
                        </div>
                        <small className="text-muted p-t-30 db">Social Profile</small>
                        <br />
                        <button className="btn btn-circle btn-secondary">
                            <i className="fab fa-facebook-f" />
                        </button>
                        <button className="btn btn-circle btn-secondary">
                            <i className="fab fa-twitter" />
                        </button>
                        <button className="btn btn-circle btn-secondary">
                            <i className="fab fa-youtube" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default InforComponent;