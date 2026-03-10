import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { social } from '../../../constants/aboutConstants';

const WORDS = ['Developer', 'Drummer', 'Entrepreneur'];
const TYPE_SPEED = 80;
const DELETE_SPEED = 50;
const PAUSE_MS = 1200;

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = { displayed: '', wordIndex: 0, typing: true };
        this._timer = null;
    }

    componentDidMount() {
        this.tick();
    }

    componentWillUnmount() {
        clearTimeout(this._timer);
    }

    tick() {
        const { displayed, wordIndex, typing } = this.state;
        const target = WORDS[wordIndex];

        if (typing) {
            if (displayed.length < target.length) {
                this._timer = setTimeout(() => {
                    this.setState({ displayed: target.slice(0, displayed.length + 1) }, () => this.tick());
                }, TYPE_SPEED);
            } else {
                // Finished typing — pause then start deleting
                this._timer = setTimeout(() => {
                    this.setState({ typing: false }, () => this.tick());
                }, PAUSE_MS);
            }
        } else {
            if (displayed.length > 0) {
                this._timer = setTimeout(() => {
                    this.setState({ displayed: displayed.slice(0, -1) }, () => this.tick());
                }, DELETE_SPEED);
            } else {
                // Move to next word
                this.setState(
                    { wordIndex: (wordIndex + 1) % WORDS.length, typing: true },
                    () => this.tick()
                );
            }
        }
    }

    render() {
        const { displayed } = this.state;

        return (
            <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
                <div className="hero-container" data-aos="fade-in">

                    {/* Role badge */}
                    <div className="hero-badge">
                        <span className="hero-badge-dot" />
                        Java Developer · FNB South Africa
                    </div>

                    {/* Name */}
                    <h1 className="hero-name">
                        Musa<br />
                        <span className="hero-name-accent">Baloyi</span>
                    </h1>

                    {/* Typewriter */}
                    <div className="hero-typing">
                        {displayed}<span className="hero-cursor">|</span>
                    </div>

                    {/* Tagline */}
                    <p className="hero-tagline">
                        Building scalable systems · Creating things that matter.
                    </p>

                    {/* CTA buttons */}
                    <div className="hero-cta">
                        <a href="#experience" className="hero-btn hero-btn-primary">
                            View Experience
                        </a>
                        <a href="mailto:musambaloyi@gmail.com" className="hero-btn hero-btn-outline">
                            Get in touch
                        </a>
                    </div>

                    {/* Social links */}
                    <div className="hero-social">
                        {social.map((s, i) => (
                            <a
                                key={i}
                                href={s.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={s.name}
                                className="hero-social-link"
                            >
                                <FontAwesomeIcon icon={['fab', s.name]} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Scroll indicator */}
                <a href="#about" className="hero-scroll">
                    <span className="hero-scroll-label">Scroll</span>
                    <span className="hero-scroll-arrow" />
                </a>
            </section>
        );
    }
}

export default Landing;
