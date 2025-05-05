import React from 'react'
const MainArticle: React.FC = () => {
    return (
        <div className="mainArticle">
            <a href="" className="main-article-link">
                <div className="row">
                    <h1 className="main-article-title col-lg-12">
                        <p className="main-article-title-info">
                            <span className="main-article-title-info-live"></span>
                            <span className="main-article-title-info-text">live</span>
                        </p>
                        <p className="main-article-title-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra ullamcorper est
                            vitae imperdiet. Vivamus.
                        </p>
                    </h1>
                </div>
                <div className="main-article-media-container row">
                    <picture className="main-article-media col-lg-12">
                        <img className="main-article-media-img" alt="" src="https://placehold.co/1300x1000" />
                        <div>Lorem ipsum</div>
                    </picture>
                </div>
                <div className="row"><p className="main-article-description col-lg-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pellentesque aliquam sapien vitae
                    tristique. Curabitur rutrum dictum nulla sed viverra. Duis et dignissim ligula. Nunc tempus molestie
                    porta. Nullam a.
                </p></div>
            </a>
            <ul className="main-article-related row">
                <li className="col-lg-6">
                    <a href="">
                        <img alt="premium" src="https://placehold.co/18x18"/>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra ullamcorper est vitae imperdiet. Vivamus.
                        </p>
                    </a>
                </li>
                <li className="col-lg-6">
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