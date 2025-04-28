import React from "react";

const LiveSection: React.FC = () => {
    return (
        <section className="live-section">
            <div className="live-section-container">
                <ul className="live-section-center">
                    <li className="live-section-item">
                        <a className="live-section-link" href="">
                            <div className="live-section-item-header">
                                <div className="live-section-header-time">
                                    20:35
                                </div>
                                <div className="live-section-header-alarm">
                                    Allerta
                                </div>
                            </div>
                            <div className="live-section-item-content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel.
                            </div>
                        </a>
                    </li>
                    <li className="live-section-item">
                        <a className="live-section-link" href="">
                            <div className="live-section-item-header">
                                <div className="live-section-header-time">
                                    19:00
                                </div>
                            </div>
                            <div className="live-section-item-content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel.
                            </div>
                        </a>
                    </li>
                    <li className="live-section-item">
                        <a className="live-section-link" href="">
                            <div className="live-section-item-header">
                                <div className="live-section-header-time">
                                    17:23
                                </div>
                            </div>
                            <div className="live-section-item-content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel.
                            </div>
                        </a>
                    </li>
                    <li className="live-section-item">
                        <a className="live-section-link" href="">
                            <div className="live-section-item-header">
                                <div className="live-section-header-time">
                                    20:35
                                </div>
                                <div className="live-section-header-live">
                                    <div className="live-section-header-live-icon"></div>
                                    Live
                                </div>
                            </div>
                            <div className="live-section-item-content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel.
                            </div>
                        </a>
                    </li>
                    <li className="live-section-item">
                        <a className="live-section-link" href="">
                            <div className="live-section-item-header">
                                <div className="live-section-header-time">
                                    20:35
                                </div>
                                <div className="live-section-header-alarm">
                                    Allerta
                                </div>
                            </div>
                            <div className="live-section-item-content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel.
                            </div>
                        </a>
                    </li>
                </ul>
                <div className="live-section-right">
                    <a href="" className="live-section-more">
                        Di più
                        <img alt="di più" className="live-section-more-icon" src="https://placehold.co/18x18" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default LiveSection;