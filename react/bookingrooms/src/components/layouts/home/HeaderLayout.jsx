import React, {Component} from 'react';

class HeaderLayout extends Component {
    render() {
        return (
            <header class="b-page-header">
                <div class="b-block">
                    <div class="b-block-left">
                        <div class="b-icon">
                            <img
                                src="https://greenglobal.vn/wp-content/themes/gg2019/resources/assets/images/logo-light.svg"
                                alt="Logo"/>
                        </div>
                    </div>
                    <div class="b-block-right">
                        <ul class="b-list-item">
                            <li class="b-item">
                                <button class="b-btn">
                                    <i class="fas fa-bell"></i>
                                </button>
                            </li>
                            <li class="b-item">
                                <button class="b-btn">
                                    <i class="fas fa-cog"></i>
                                </button>
                            </li>
                            <li class="b-item b-dropdown">
                                <button class="b-btn">
                                    <i class="fas fa-user"></i>
                                    Xin Chào, Hau</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}

export default HeaderLayout;