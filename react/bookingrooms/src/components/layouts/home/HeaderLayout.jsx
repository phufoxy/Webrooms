import React, { Component } from 'react';

class HeaderLayout extends Component {
    render() {
        return (
            <header className="b-page-header">
                <div className="b-block">
                    <div className="b-block-left">
                        <div className="b-icon">
                            <img src="https://greenglobal.vn/wp-content/themes/gg2019/resources/assets/images/logo-light.svg" alt="Logo" />
                        </div>
                    </div>
                    <div className="b-block-right">
                        <div className="b-list-item">
                            <li className="b-item">
                                <button className="b-btn"><i className="fas fa-bell" /></button>
                            </li>
                            <li className="b-item">
                                <button className="b-btn"><i className="fas fa-cog" /></button>
                            </li>
                            <li className="b-item b-dropdown">
                                <button className="b-btn"><i className="fas fa-user" /> Xin Chào, Hau</button>
                            </li>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default HeaderLayout;