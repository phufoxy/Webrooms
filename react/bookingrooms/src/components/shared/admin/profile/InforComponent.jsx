import React, {Component} from 'react';

class InforComponent extends Component {
    render() {
        return (
            <div className="col-lg-4">
                <div className="b-card">
                    <div className="card-body">
                        <div className="card-user text-center">
                            <img src="../../images/user2.jpg" className="img-user"/>
                            <h3 className="title-name">Hanna Gover</h3>
                            <h6 className="card-subtitle">Accoubts Manager Amix corp</h6>
                            <div className="link-text">
                                <a className="link" href="#">254</a>
                                <a className="link" href="#">54</a>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="card-body">
                        <small className="text-muted">Email address</small>
                        <h6 className="text">hannagover@gmail.com</h6>
                        <small className="text-muted">Phone</small>
                        <h6 className="text">hannagover@gmail.com</h6>
                        <small className="text-muted">Address</small>
                        <h6 className="text">71 Pilgrim Avenue Chevy Chase, MD 20815</h6>
                        <div className="map-box">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470029.1604841957!2d72.29955005258641!3d23.019996818380896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C+Gujarat!5e0!3m2!1sen!2sin!4v1493204785508"
                                width="100%"
                                height={150}
                                frameBorder={0}
                                style={{
                                border: 0
                            }}
                                allowFullScreen/>
                        </div>
                        <small className="text-muted p-t-30 db">Social Profile</small>
                        <br/>
                        <button className="btn btn-circle btn-secondary">
                            <i className="fab fa-facebook-f"/>
                        </button>
                        <button className="btn btn-circle btn-secondary">
                            <i className="fab fa-twitter"/>
                        </button>
                        <button className="btn btn-circle btn-secondary">
                            <i className="fab fa-youtube"/>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default InforComponent;