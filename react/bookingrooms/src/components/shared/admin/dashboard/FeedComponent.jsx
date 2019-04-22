import React, {Component} from 'react';

class FeedComponent extends Component {
    render() {
        return (
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
        );
    }
}

export default FeedComponent;