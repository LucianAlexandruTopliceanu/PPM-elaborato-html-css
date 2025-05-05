import React from 'react'
const DetailedArticle: React.FC = () => {
    return (
        <div className="detailedArticle">
            <a href="" className="main-article-link">
                <div className="main-article-media-container">
                    <picture className="main-article-media">
                        <img className="main-article-media-img" alt="" src="https://placehold.co/1300x1000" />
                        <div>Lorem ipsum</div>
                    </picture>
                </div>
                <h1 className="main-article-title">
                    <p className="main-article-title-info">
                        <span className="main-article-title-info-live"></span>
                        <span className="main-article-title-info-text">live</span>
                    </p>
                    <p className="main-article-title-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra ullamcorper est vitae imperdiet. Vivamus.
                    </p>
                </h1>
                <p className="main-article-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pellentesque aliquam sapien vitae tristique. Curabitur rutrum dictum nulla sed viverra. Duis et dignissim ligula. Nunc tempus molestie porta. Nullam a.
                </p>
            </a>
        </div>
    )
}
export default DetailedArticle