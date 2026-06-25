import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layout/layout';
import snippets from './snippetsRegistry';
import './snippets.css';

class Snippets extends Component {
    render() {
        return (
            <Layout>
                <div className="snippets-gallery">
                    <div className="snip-head">
                        <h1>Snippets &amp; Pages</h1>
                        <p>
                            A growing collection of standalone tools, experiments and coding snippets — each
                            built as a self-contained React page.
                        </p>
                    </div>

                    {snippets.length === 0 ? (
                        <p className="snip-empty">Nothing here yet — check back soon.</p>
                    ) : (
                        <div className="snip-grid">
                            {snippets.map((s) => (
                                <Link key={s.slug} to={s.path} className="snip-card">
                                    <div
                                        className="snip-icon"
                                        style={{ color: s.accent, boxShadow: `inset 0 0 0 1px ${s.accent}33` }}
                                    >
                                        {s.icon}
                                    </div>
                                    <h3>{s.title}</h3>
                                    <p>{s.description}</p>
                                    <div className="snip-tags">
                                        {s.tags.map((t) => (
                                            <span key={t} className="snip-tag">{t}</span>
                                        ))}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </Layout>
        );
    }
}

export default Snippets;
