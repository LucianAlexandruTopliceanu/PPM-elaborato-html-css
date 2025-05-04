import React  from "react";
const BasicArticleWide: React.FC = () => {
    return (
        <div className="basicArticleWide" role="article">
            <a href="">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <picture>
                    <img alt="news image" src="https://placehold.co/1300x1000"/>
                </picture>
            </a>
        </div>
    );
}
export default BasicArticleWide;