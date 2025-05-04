import React from 'react'
const MainArticle: React.FC = () => {
    return (
        <div className="main-article">
            <a href="" className="main-article-link">
                <h1 className="main-article-title">
                    <p className="main-article-title-info">
                        <span className="main-article-title-info-live"></span>
                        <span className="main-article-title-info-text">live</span>
                    </p>
                    <p className="main-article-title-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra ullamcorper est vitae imperdiet. Vivamus.
                    </p>
                </h1>
                <div className="main-article-media-container">
                    <picture className="main-article-media">
                        <img className="main-article-media-img" alt="" src="https://placehold.co/1300x1000" />
                        <div>Lorem ipsum</div>
                    </picture>
                </div>
                <p className="main-article-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pellentesque aliquam sapien vitae tristique. Curabitur rutrum dictum nulla sed viverra. Duis et dignissim ligula. Nunc tempus molestie porta. Nullam a.
                </p>
            </a>
            <ul className="main-article-related">
                <li>
                    <a href="">
                        <img alt="premium" src="https://placehold.co/18x18"/>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra ullamcorper est vitae imperdiet. Vivamus.
                        </p>
                    </a>
                </li>
                <li>
                    <a href="">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra ullamcorper est vitae imperdiet. Vivamus.
                        </p>
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default MainArticle