import React, {Component} from 'react';

class CommentComponent extends Component {
    render() {
        return (
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
                                alt="user1"/></div>
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
                                alt="user2"/></div>
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
                                alt="user3"/></div>
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
        );
    }
}

export default CommentComponent;