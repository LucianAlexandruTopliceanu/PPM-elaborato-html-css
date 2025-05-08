import React  from "react";
const BasicArticleWide: React.FC = () => {
    return (
        <div className="basicArticleWide" role="article">
            <a href="">
                <div className="media-container">
                    <picture>
                        <img alt="news image" src="https://placehold.co/1300x1000"/>
                    </picture>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </a>
        </div>
    );
}
export default BasicArticleWide;