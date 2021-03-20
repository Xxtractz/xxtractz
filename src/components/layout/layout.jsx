import React, {Component} from 'react';
import profileImage from '../../assets/img/image.jpeg';

class Layout extends Component {
    render() {
        return (
            <div>
                {/* Header */}
                <header id="header">
                    <div className="d-flex flex-column">

                        <div className="profile">
                            <img src={profileImage} alt="" className="img-fluid rounded-circle"/>
                            <div className="text-center">
                                <h1 className="text-light"><a href="/">Musa Baloyi </a></h1>
                                <h3 className="text-white-50 ">Xxtractz</h3>
                                <p className="text-white-50 p-1"><a href={"https://www.wethinkcode.co.za"}>WethinkCode_ Alumni</a></p>
                            </div>
                        </div>

                        <nav className="nav-menu">
                            <ul>
                                <li className="active"><a href="/"><i className="bx bx-home"/> <span>Home</span></a>
                                </li>
                                <li><a href={"#about"}><i className="bx bx-user"/> <span>About</span></a></li>
                                <li><a href={"#experience"}><i className="bx bx-book-content"/> Experience</a></li>
                                <li><a href={"#skills"}><i className="bx bx-file-blank"/> <span>Skills</span></a></li>
                            </ul>
                        </nav>
                        {/*.nav-menu*/}
                        <button type="button" className="mobile-nav-toggle d-xl-none"><i
                            className="icofont-navigation-menu"/></button>

                    </div>
                </header>
                {/*End Header*/}

                <div className="content">
                    <main>{this.props.children}</main>
                </div>
            </div>
        );
    }
}

export default Layout;