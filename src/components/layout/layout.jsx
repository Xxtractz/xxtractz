import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import profileImage from '../../assets/img/image.jpeg';

const SECTIONS = ['hero', 'about', 'experience', 'skills'];

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = { mobileOpen: false, activeSection: 'hero' };
        this.toggleMobile = this.toggleMobile.bind(this);
        this.observer = null;
    }

    toggleMobile() {
        this.setState(prev => ({ mobileOpen: !prev.mobileOpen }));
    }

    componentDidMount() {
        this.setupObserver();
    }

    componentDidUpdate(prevProps) {
        // Re-observe when navigating back to home
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.setupObserver();
        }
    }

    componentWillUnmount() {
        if (this.observer) this.observer.disconnect();
    }

    setupObserver() {
        if (this.observer) this.observer.disconnect();

        const onHome = this.props.location.pathname === '/';
        if (!onHome) return;

        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.setState({ activeSection: entry.target.id });
                    }
                });
            },
            { threshold: 0.3 }
        );

        // Observe after a tick so sections are mounted
        setTimeout(() => {
            SECTIONS.forEach(id => {
                const el = document.getElementById(id);
                if (el) this.observer.observe(el);
            });
        }, 100);
    }

    isActive(section) {
        const { location } = this.props;
        const onHome = location.pathname === '/';
        if (!onHome) return false;
        return this.state.activeSection === section;
    }

    render() {
        const { location } = this.props;
        const onHome = location.pathname === '/';
        const { mobileOpen } = this.state;

        const closeMobile = () => this.setState({ mobileOpen: false });

        return (
            <div>
                {/* Mobile toggle */}
                <button
                    className="mobile-nav-toggle"
                    onClick={this.toggleMobile}
                    aria-label="Toggle navigation"
                >
                    <i className={mobileOpen ? 'icofont-close' : 'icofont-navigation-menu'} />
                </button>

                {/* Sidebar */}
                <header id="header" className={mobileOpen ? 'header-show' : ''}>
                    <div className="d-flex flex-column h-100">

                        <div className="profile">
                            <img src={profileImage} alt="Musa Baloyi" className="img-fluid rounded-circle" />
                            <div className="text-center">
                                <h1 className="text-light">
                                    <Link to="/">Musa Baloyi</Link>
                                </h1>
                                <p className="text-white-50" style={{ fontSize: '0.85rem', margin: '4px 0 0' }}>
                                    Full-stack Developer
                                </p>
                                <p style={{ margin: '2px 0 0' }}>
                                    <a
                                        href="https://www.wethinkcode.co.za"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ fontSize: '0.78rem', color: '#ba55d3' }}
                                    >
                                        WethinkCode_ Alumni
                                    </a>
                                </p>
                            </div>
                        </div>

                        <nav className="nav-menu" style={{ flex: 1 }}>
                            <ul>
                                <li className={this.isActive('hero') ? 'active' : ''}>
                                    <Link
                                        to="/"
                                        onClick={() => {
                                            closeMobile();
                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                        }}
                                    >
                                        <i className="bx bx-home" />
                                        <span>Home</span>
                                    </Link>
                                </li>

                                {onHome && (
                                    <>
                                        <li className={this.isActive('about') ? 'active' : ''}>
                                            <a href="#about" onClick={closeMobile}>
                                                <i className="bx bx-user" />
                                                <span>About</span>
                                            </a>
                                        </li>
                                        <li className={this.isActive('experience') ? 'active' : ''}>
                                            <a href="#experience" onClick={closeMobile}>
                                                <i className="bx bx-book-content" />
                                                <span>Experience</span>
                                            </a>
                                        </li>
                                        <li className={this.isActive('skills') ? 'active' : ''}>
                                            <a href="#skills" onClick={closeMobile}>
                                                <i className="bx bx-file-blank" />
                                                <span>Skills</span>
                                            </a>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </nav>

                        <div style={{ padding: '16px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                            <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.25)', textAlign: 'center', margin: 0 }}>
                                © {new Date().getFullYear()} Xxtractz
                            </p>
                        </div>
                    </div>
                </header>

                {/* Overlay on mobile */}
                {mobileOpen && (
                    <div
                        className="header-overlay"
                        onClick={closeMobile}
                    />
                )}

                <div id="main">
                    <main>{this.props.children}</main>
                </div>
            </div>
        );
    }
}

export default withRouter(Layout);
